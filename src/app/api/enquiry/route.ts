import { NextResponse, type NextRequest } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/config/site';
import { enquirerTypes, enquirySchema, labelFor, serviceOptions } from '@/lib/enquiry-schema';
import { rateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

const LIMIT = Number(process.env.ENQUIRY_RATE_LIMIT ?? 5);
const WINDOW = Number(process.env.ENQUIRY_RATE_WINDOW_SECONDS ?? 600);
const MIN_FILL_MS = 3000;

function clientKey(req: NextRequest): string {
  const fwd = req.headers.get('x-forwarded-for');
  const ip = fwd?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || 'unknown';
  return ip;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string);
}

export async function POST(req: NextRequest) {
  // Same-origin check: browsers set Origin on cross-site POSTs.
  const origin = req.headers.get('origin');
  const host = req.headers.get('host');
  if (origin && host && new URL(origin).host !== host) {
    return NextResponse.json({ ok: false, message: 'Request rejected.' }, { status: 403 });
  }

  const rl = rateLimit(`enquiry:${clientKey(req)}`, LIMIT, WINDOW);
  if (!rl.allowed) {
    return NextResponse.json(
      { ok: false, message: `Too many attempts. Please try again in about ${Math.ceil(rl.retryAfterSeconds / 60)} minute(s).` },
      { status: 429, headers: { 'Retry-After': String(rl.retryAfterSeconds) } },
    );
  }

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: 'Invalid request.' }, { status: 400 });
  }

  // Honeypot first: a filled hidden field means a bot. Reply as if it worked so
  // nothing is learned, and send nothing.
  if (json && typeof json === 'object' && typeof (json as { website?: unknown }).website === 'string' && (json as { website: string }).website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = enquirySchema.safeParse(json);
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? 'form');
      if (!errors[key]) errors[key] = issue.message;
    }
    return NextResponse.json({ ok: false, message: 'Please check the highlighted fields.', errors }, { status: 400 });
  }

  const data = parsed.data;

  // Bot checks: honeypot filled or form completed implausibly fast. Return a
  // success-shaped response so bots learn nothing; nothing is sent.
  const tooFast = typeof data.startedAt === 'number' && Date.now() - data.startedAt < MIN_FILL_MS;
  if (tooFast) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO ?? siteConfig.contact.email;
  const from = process.env.ENQUIRY_FROM ?? `${siteConfig.name} <no-reply@pujaraandco.co.uk>`;
  const replyTo = process.env.ENQUIRY_REPLY_TO ?? siteConfig.contact.email;

  if (!apiKey) {
    // Email not configured: log without personal data and tell the visitor to use another route.
    console.error('[enquiry] RESEND_API_KEY is not set; enquiry not delivered', { service: data.service, enquirerType: data.enquirerType });
    return NextResponse.json(
      { ok: false, message: 'Our enquiry service is temporarily unavailable.' },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const enquirer = labelFor(enquirerTypes, data.enquirerType);
  const service = labelFor(serviceOptions, data.service);
  const safe = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    phone: escapeHtml(data.phone || 'Not given'),
    message: escapeHtml(data.message).replace(/\n/g, '<br>'),
    enquirer: escapeHtml(enquirer),
    service: escapeHtml(service),
  };

  const notificationHtml = `
    <h2>New website enquiry</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><strong>Name</strong></td><td>${safe.name}</td></tr>
      <tr><td><strong>Email</strong></td><td>${safe.email}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${safe.phone}</td></tr>
      <tr><td><strong>They are</strong></td><td>${safe.enquirer}</td></tr>
      <tr><td><strong>Service</strong></td><td>${safe.service}</td></tr>
      <tr><td><strong>Marketing opt-in</strong></td><td>${data.marketingOptIn ? 'Yes' : 'No'}</td></tr>
    </table>
    <h3>Message</h3>
    <p>${safe.message}</p>
    <p style="color:#666;font-size:12px">Received ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })} UK time via ${siteConfig.url}</p>
  `;

  const autoReplyHtml = `
    <p>Dear ${safe.name},</p>
    <p>Thank you for contacting ${siteConfig.name}. We have received your enquiry about <strong>${safe.service}</strong>.</p>
    <p>${siteConfig.contact.responseCommitment} Our working hours are ${siteConfig.contact.hours}.</p>
    <p>If your enquiry is urgent, you can call us on ${siteConfig.contact.ukPhone.confirmed ? escapeHtml(siteConfig.contact.ukPhone.display) : escapeHtml(siteConfig.contact.indiaPhones[0].display)}.</p>
    <p>Please do not reply with National Insurance numbers, Unique Taxpayer References, bank details or documents. We will set up a secure channel for those once we are working together.</p>
    <p>Kind regards,<br>${siteConfig.principal.name}, ${siteConfig.principal.designation}<br>${siteConfig.provider.legalName}</p>
    <p style="color:#666;font-size:12px">${escapeHtml(siteConfig.provider.legalName)}, ${escapeHtml(siteConfig.provider.legalForm)}. This is an automated acknowledgement.</p>
  `;

  try {
    const notify = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Website enquiry: ${service} (${enquirer})`,
      html: notificationHtml,
    });
    if (notify.error) throw new Error(notify.error.message);

    // Auto-reply failures are logged but do not fail the submission.
    const reply = await resend.emails.send({
      from,
      to: [data.email],
      replyTo,
      subject: `Thank you for contacting ${siteConfig.name}`,
      html: autoReplyHtml,
    });
    if (reply.error) console.error('[enquiry] auto-reply failed', reply.error.message);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[enquiry] delivery failed', err instanceof Error ? err.message : 'unknown error');
    return NextResponse.json({ ok: false, message: 'We could not send your enquiry right now.' }, { status: 502 });
  }
}

export function GET() {
  return NextResponse.json({ ok: false, message: 'Method not allowed.' }, { status: 405 });
}
