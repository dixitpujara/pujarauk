import type { Metadata } from 'next';
import { Suspense } from 'react';
import { BookingEmbed } from '@/components/BookingEmbed';
import { EnquiryForm } from '@/components/EnquiryForm';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { TrackedLink } from '@/components/TrackedLink';
import { formatAddress, siteConfig } from '@/config/site';
import { contact } from '@/content/pages';
import { contactPageSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact Pujara & Co',
  description: 'Book a free consultation in UK time or send an enquiry. We reply within one UK working day. Full provider details and secure contact routes.',
  path: '/contact',
});

export default function ContactPage() {
  const c = siteConfig.contact;
  const p = siteConfig.provider;

  return (
    <>
      <JsonLd data={contactPageSchema()} />
      <PageHero title={contact.heading} lead={contact.intro} crumbs={[{ name: 'Contact', path: '/contact' }]} />

      <div className="container-content grid gap-14 py-14 sm:py-20 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-16">
          <section id="book" aria-labelledby="book-heading" className="scroll-mt-24">
            <h2 id="book-heading" className="text-3xl">
              {contact.bookingHeading}
            </h2>
            <p className="mt-3 text-ink-muted">{contact.bookingIntro}</p>
            <div className="mt-6">
              <BookingEmbed />
            </div>
          </section>

          <section id="enquiry" aria-labelledby="enquiry-heading" className="scroll-mt-24">
            <h2 id="enquiry-heading" className="text-3xl">
              Send an enquiry
            </h2>
            <p className="mt-3 text-ink-muted">{contact.formIntro}</p>
            <div className="relative mt-6">
              <Suspense fallback={<p className="text-ink-muted">Loading the form…</p>}>
                <EnquiryForm sensitiveDataNotice={contact.sensitiveDataNotice} />
              </Suspense>
            </div>
          </section>
        </div>

        <aside aria-labelledby="details-heading" className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-lg border border-line bg-surface-alt p-6 sm:p-8">
            <h2 id="details-heading" className="text-2xl">
              {contact.detailsHeading}
            </h2>
            <p className="mt-3 text-sm text-ink-muted">
              <strong className="text-ink">{p.legalName}</strong>, {p.legalForm}.
            </p>
            <address className="mt-4 not-italic">
              <p className="text-sm text-ink-muted">{formatAddress()}</p>
            </address>
            <ul className="mt-6 space-y-3">
              {c.ukPhone.confirmed ? (
                <li>
                  <TrackedLink href={`tel:${c.ukPhone.e164}`} event="phone_click" props={{ location: 'contact' }} className="inline-flex items-center gap-3 font-semibold text-navy">
                    <Icon name="phone" className="h-5 w-5" /> {c.ukPhone.display} (UK)
                  </TrackedLink>
                </li>
              ) : (
                <li className="flex items-start gap-3 text-sm text-ink-muted">
                  <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0" /> UK number: {c.ukPhone.display}
                </li>
              )}
              {c.indiaPhones.map((ph) => (
                <li key={ph.e164}>
                  <TrackedLink href={`tel:${ph.e164}`} event="phone_click" props={{ location: 'contact' }} className="inline-flex items-center gap-3 font-semibold text-navy">
                    <Icon name="phone" className="h-5 w-5" /> {ph.display}
                  </TrackedLink>
                </li>
              ))}
              <li>
                <TrackedLink href={`https://wa.me/${c.whatsapp.e164}`} event="whatsapp_click" props={{ location: 'contact' }} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 font-semibold text-navy">
                  <Icon name="whatsapp" className="h-5 w-5" /> WhatsApp
                </TrackedLink>
              </li>
              <li>
                <TrackedLink href={`mailto:${c.email}`} event="email_click" className="inline-flex items-center gap-3 font-semibold text-navy break-all">
                  <Icon name="mail" className="h-5 w-5 shrink-0" /> {c.email}
                </TrackedLink>
              </li>
            </ul>
            <dl className="mt-6 space-y-3 text-sm">
              <div>
                <dt className="font-semibold">Hours</dt>
                <dd className="text-ink-muted">{c.hours}</dd>
              </div>
              <div>
                <dt className="font-semibold">Response time</dt>
                <dd className="text-ink-muted">{c.responseCommitment}</dd>
              </div>
              <div>
                <dt className="font-semibold">Professional body</dt>
                <dd className="text-ink-muted">
                  <a href={p.professionalBody.url} rel="noopener noreferrer" className="underline">
                    {p.professionalBody.name}
                  </a>{' '}
                  ·{' '}
                  <a href={p.professionalBody.rulesUrl} rel="noopener noreferrer" className="underline">
                    {p.professionalBody.rulesLabel}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold">Principal</dt>
                <dd className="text-ink-muted">
                  {siteConfig.principal.name}, {siteConfig.principal.designation}, Membership No. {siteConfig.principal.membershipNumber}
                </dd>
              </div>
            </dl>
            {c.googleBusinessProfile.link ? (
              <p className="mt-6 text-sm">
                <a href={c.googleBusinessProfile.url} rel="noopener noreferrer" className="underline">
                  Google Business Profile
                </a>
              </p>
            ) : null}
            <p className="mt-6 text-xs text-ink-muted">{p.teamLocationSentence}</p>
          </div>
        </aside>
      </div>
    </>
  );
}
