import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/Icon';
import { LinkButton } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Thank you for your enquiry',
  description: 'We have received your enquiry and will reply within one UK working day.',
  path: '/contact/thank-you',
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <section aria-labelledby="thanks-heading" className="container-content py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-pill bg-success-bg text-success">
          <Icon name="check" className="h-8 w-8" />
        </div>
        <h1 id="thanks-heading" className="mt-6 text-4xl">
          Thank you. Your enquiry has been received.
        </h1>
        <p className="mt-4 text-lg text-ink-muted">
          {siteConfig.contact.responseCommitment} A confirmation has been sent to your email address. If it has not arrived within a few minutes, check your junk folder or email us directly at{' '}
          <a href={`mailto:${siteConfig.contact.email}`} className="font-semibold text-navy underline">
            {siteConfig.contact.email}
          </a>
          .
        </p>
        <p className="mt-4 text-ink-muted">Please do not reply with National Insurance numbers, UTRs, bank details or documents. We will set up a secure channel for those.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton href="/insights" variant="secondary">
            Read our Insights
          </LinkButton>
          <LinkButton href="/">Back to the homepage</LinkButton>
        </div>
        <p className="mt-10 text-sm">
          <Link href="/how-we-work" className="underline">
            What happens next: see how we work
          </Link>
        </p>
      </div>
    </section>
  );
}
