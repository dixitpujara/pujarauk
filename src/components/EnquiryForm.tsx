'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import { siteConfig } from '@/config/site';
import { track } from '@/lib/analytics';
import { enquirerTypes, enquirySchema, serviceOptions, type EnquiryInput } from '@/lib/enquiry-schema';
import { Icon } from './Icon';
import { Button } from './ui/Button';

type FieldErrors = Partial<Record<keyof EnquiryInput, string>>;
type Status = 'idle' | 'submitting' | 'error' | 'rate_limited';

const DRAFT_KEY = 'pc_enquiry_draft';

const emptyValues: EnquiryInput = {
  name: '',
  email: '',
  phone: '',
  enquirerType: '' as EnquiryInput['enquirerType'],
  service: '' as EnquiryInput['service'],
  message: '',
  privacy: false as unknown as true,
  marketingOptIn: false,
  website: '',
};

/** Maps a service page slug (?service=) to the form's option value. */
const serviceToOption: Record<string, string> = {
  'outsourced-bookkeeping-for-accountancy-practices': 'outsourced-bookkeeping',
  'year-end-accounts-preparation': 'year-end-accounts',
  'vat-return-preparation-and-making-tax-digital': 'vat',
  'payroll-processing-support': 'payroll',
  'management-accounts-and-reporting': 'management-accounts',
  'self-assessment-preparation-support': 'self-assessment',
  'india-tax-for-uk-and-european-residents': 'india-tax',
  'india-entry-and-subsidiary-compliance': 'india-entry',
};

export function EnquiryForm({ sensitiveDataNotice }: { sensitiveDataNotice: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultService = serviceToOption[searchParams.get('service') ?? ''] ?? '';
  const uid = useId();
  const [values, setValues] = useState<EnquiryInput>(() => ({ ...emptyValues, service: defaultService as EnquiryInput['service'] }));
  const [draftRestored, setDraftRestored] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const [startedAt] = useState<number>(() => Date.now());
  const errorSummaryRef = useRef<HTMLDivElement>(null);

  // Keep an unsent draft for the session so a failed submit never loses the message.
  // Restored once after hydration (sessionStorage is not available on the server).
  useEffect(() => {
    if (draftRestored) return;
    let draft: Partial<EnquiryInput> | null = null;
    try {
      const raw = window.sessionStorage.getItem(DRAFT_KEY);
      draft = raw ? (JSON.parse(raw) as Partial<EnquiryInput>) : null;
    } catch {
      draft = null;
    }
    const timer = window.setTimeout(() => {
      if (draft) {
        const restored = draft;
        setValues((v) => ({ ...v, ...restored, service: (defaultService || restored.service || '') as EnquiryInput['service'], privacy: false as unknown as true, website: '' }));
      }
      setDraftRestored(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [draftRestored, defaultService]);
  useEffect(() => {
    if (!draftRestored) return;
    try {
      const { privacy: _p, website: _w, ...rest } = values;
      void _p;
      void _w;
      window.sessionStorage.setItem(DRAFT_KEY, JSON.stringify(rest));
    } catch {
      /* ignore */
    }
  }, [values, draftRestored]);

  const id = (name: string) => `${uid}-${name}`;
  const set = <K extends keyof EnquiryInput>(key: K, value: EnquiryInput[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerMessage('');
    const parsed = enquirySchema.safeParse({ ...values, startedAt });
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof EnquiryInput;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      setStatus('idle');
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
      return;
    }
    setStatus('submitting');
    track('enquiry_submit', { service: parsed.data.service, enquirer: parsed.data.enquirerType });
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      });
      const body = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: FieldErrors };
      if (res.status === 429) {
        setStatus('rate_limited');
        setServerMessage(body.message ?? 'Too many attempts. Please try again in a few minutes.');
        return;
      }
      if (!res.ok || !body.ok) {
        if (body.errors) setErrors(body.errors);
        setStatus('error');
        setServerMessage(body.message ?? 'We could not send your enquiry.');
        track('enquiry_error');
        requestAnimationFrame(() => errorSummaryRef.current?.focus());
        return;
      }
      try {
        window.sessionStorage.removeItem(DRAFT_KEY);
      } catch {
        /* ignore */
      }
      track('enquiry_success', { service: parsed.data.service });
      router.push('/contact/thank-you');
    } catch {
      setStatus('error');
      setServerMessage('We could not reach our server. Check your connection and try again.');
      track('enquiry_error');
      requestAnimationFrame(() => errorSummaryRef.current?.focus());
    }
  }

  const errorList = Object.entries(errors).filter(([, v]) => Boolean(v)) as [keyof EnquiryInput, string][];
  const inputClass = (key: keyof EnquiryInput) =>
    `mt-1.5 block w-full rounded-md border bg-white px-3.5 py-2.5 text-base text-ink shadow-sm placeholder:text-ink-muted/70 focus:border-navy ${errors[key] ? 'border-error' : 'border-line'}`;

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby={id('notice')} className="space-y-6">
      <div
        ref={errorSummaryRef}
        tabIndex={-1}
        role="alert"
        aria-live="assertive"
        className={`rounded-md border p-4 text-sm ${errorList.length || status === 'error' || status === 'rate_limited' ? 'border-error bg-error-bg text-error' : 'hidden'}`}
      >
        {status === 'error' || status === 'rate_limited' ? (
          <p className="font-semibold">
            {serverMessage} Your message is kept in this tab. You can also email us at{' '}
            <a href={`mailto:${siteConfig.contact.email}`} className="underline">
              {siteConfig.contact.email}
            </a>{' '}
            or call {siteConfig.contact.ukPhone.confirmed ? siteConfig.contact.ukPhone.display : siteConfig.contact.indiaPhones[0].display}.
          </p>
        ) : null}
        {errorList.length ? (
          <>
            <p className="font-semibold">Please fix the following:</p>
            <ul className="mt-2 list-disc pl-5">
              {errorList.map(([key, msg]) => (
                <li key={key}>
                  <a href={`#${id(key)}`} className="underline">
                    {msg}
                  </a>
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </div>

      <p id={id('notice')} className="flex gap-3 rounded-md border border-line bg-info-bg p-4 text-sm text-ink">
        <Icon name="info" className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
        <span>{sensitiveDataNotice}</span>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id={id('name')} label="Your name" error={errors.name} required>
          <input id={id('name')} name="name" type="text" autoComplete="name" required value={values.name} onChange={(e) => set('name', e.target.value)} className={inputClass('name')} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? `${id('name')}-error` : undefined} />
        </Field>
        <Field id={id('email')} label="Email address" error={errors.email} required>
          <input id={id('email')} name="email" type="email" autoComplete="email" inputMode="email" required value={values.email} onChange={(e) => set('email', e.target.value)} className={inputClass('email')} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? `${id('email')}-error` : undefined} />
        </Field>
        <Field id={id('phone')} label="Phone number" hint="Optional. Include the country code if outside the UK." error={errors.phone}>
          <input id={id('phone')} name="phone" type="tel" autoComplete="tel" inputMode="tel" value={values.phone ?? ''} onChange={(e) => set('phone', e.target.value)} className={inputClass('phone')} aria-invalid={Boolean(errors.phone)} aria-describedby={`${id('phone')}-hint${errors.phone ? ` ${id('phone')}-error` : ''}`} />
        </Field>
        <Field id={id('enquirerType')} label="I am…" error={errors.enquirerType} required>
          <select id={id('enquirerType')} name="enquirerType" required value={values.enquirerType} onChange={(e) => set('enquirerType', e.target.value as EnquiryInput['enquirerType'])} className={inputClass('enquirerType')} aria-invalid={Boolean(errors.enquirerType)} aria-describedby={errors.enquirerType ? `${id('enquirerType')}-error` : undefined}>
            <option value="">Please choose</option>
            {enquirerTypes.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field id={id('service')} label="Service of interest" error={errors.service} required>
            <select id={id('service')} name="service" required value={values.service} onChange={(e) => set('service', e.target.value as EnquiryInput['service'])} className={inputClass('service')} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? `${id('service')}-error` : undefined}>
              <option value="">Please choose</option>
              {serviceOptions.map((s) => (
                <option key={s.value} value={s.value}>
                  {s.label}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field id={id('message')} label="How can we help?" hint="Tell us about your practice or business, the work involved and any deadlines." error={errors.message} required>
            <textarea id={id('message')} name="message" rows={6} required value={values.message} onChange={(e) => set('message', e.target.value)} className={inputClass('message')} aria-invalid={Boolean(errors.message)} aria-describedby={`${id('message')}-hint${errors.message ? ` ${id('message')}-error` : ''}`} />
          </Field>
        </div>
      </div>

      {/* Honeypot: hidden from people, tempting for bots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={id('website')}>Leave this field empty</label>
        <input id={id('website')} name="website" type="text" tabIndex={-1} autoComplete="off" value={values.website ?? ''} onChange={(e) => set('website', e.target.value)} />
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <input id={id('privacy')} name="privacy" type="checkbox" required checked={Boolean(values.privacy)} onChange={(e) => set('privacy', e.target.checked as unknown as true)} className="mt-1 h-5 w-5 shrink-0 accent-navy" aria-invalid={Boolean(errors.privacy)} aria-describedby={errors.privacy ? `${id('privacy')}-error` : undefined} />
          <div>
            <label htmlFor={id('privacy')} className="font-medium">
              I have read the{' '}
              <Link href="/legal/privacy-notice" className="underline">
                Privacy Notice
              </Link>{' '}
              and understand how my details will be used. <span className="text-error">*</span>
            </label>
            {errors.privacy ? (
              <p id={`${id('privacy')}-error`} className="mt-1 text-sm text-error">
                {errors.privacy}
              </p>
            ) : null}
          </div>
        </div>
        <div className="flex items-start gap-3">
          <input id={id('marketingOptIn')} name="marketingOptIn" type="checkbox" checked={Boolean(values.marketingOptIn)} onChange={(e) => set('marketingOptIn', e.target.checked)} className="mt-1 h-5 w-5 shrink-0 accent-navy" />
          <label htmlFor={id('marketingOptIn')}>
            Send me occasional UK tax and accounting updates by email. Optional. You can unsubscribe at any time.
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === 'submitting'} aria-busy={status === 'submitting'}>
          {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
        </Button>
        <p className="text-sm text-ink-muted">{siteConfig.contact.responseCommitment}</p>
      </div>
    </form>
  );
}

function Field({ id, label, hint, error, required, children }: { id: string; label: string; hint?: string; error?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="font-medium">
        {label} {required ? <span className="text-error" aria-hidden="true">*</span> : <span className="text-ink-muted text-sm">(optional)</span>}
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-sm text-ink-muted">
          {hint}
        </p>
      ) : null}
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 flex items-center gap-1.5 text-sm text-error">
          <Icon name="warning" className="h-4 w-4" /> {error}
        </p>
      ) : null}
    </div>
  );
}
