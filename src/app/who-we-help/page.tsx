import type { Metadata } from 'next';
import Link from 'next/link';
import { CtaBand } from '@/components/CtaBand';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/ui/Section';
import { confirmedAudiences } from '@/content/audiences';
import { whoWeHelp } from '@/content/pages';
import { getService } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Who we help',
  description: 'UK accountancy practices, small businesses, contractors and landlords, UK and European residents with India tax matters, and Indian subsidiaries.',
  path: '/who-we-help',
});

export default function WhoWeHelpPage() {
  const audiences = confirmedAudiences();
  return (
    <>
      <PageHero title={whoWeHelp.heading} lead={whoWeHelp.intro} crumbs={[{ name: 'Who we help', path: '/who-we-help' }]}>
        <nav aria-label="On this page" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {audiences.map((a) => (
              <li key={a.id}>
                <a href={`#${a.slug}`} className="inline-block rounded-pill border border-line bg-surface px-4 py-2 text-sm font-medium text-navy no-underline hover:bg-surface-navy-tint">
                  {a.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>
      {audiences.map((a, i) => (
        <Section key={a.id} id={a.slug} tone={i % 2 ? 'alt' : 'default'} labelledBy={`${a.slug}-heading`} className="scroll-mt-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">{a.name}</p>
              <h2 id={`${a.slug}-heading`} className="mt-2 text-3xl sm:text-4xl">
                {a.heading}
              </h2>
              <p className="mt-4 text-lg text-ink-muted">{a.intro}</p>
              <h3 className="mt-8 text-lg">Services for you</h3>
              <ul className="mt-3 space-y-2">
                {a.services.map((slug) => {
                  const s = getService(slug);
                  return s ? (
                    <li key={slug}>
                      <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-2 font-semibold text-navy">
                        <Icon name="arrow" className="h-4 w-4" /> {s.name}
                      </Link>
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-surface p-6 shadow-card">
                <h3 className="text-lg">Sound familiar?</h3>
                <ul className="mt-4 space-y-3 text-ink-muted">
                  {a.painPoints.map((p) => (
                    <li key={p} className="flex gap-3">
                      <Icon name="warning" className="mt-1 h-4 w-4 shrink-0 text-accent-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-line bg-surface p-6 shadow-card">
                <h3 className="text-lg">How we help</h3>
                <ul className="mt-4 space-y-3 text-ink-muted">
                  {a.howWeHelp.map((p) => (
                    <li key={p} className="flex gap-3">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-success" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      ))}
      <CtaBand heading="Tell us about your situation" text="A short call is enough to work out whether we are the right fit and what it would cost." />
    </>
  );
}
