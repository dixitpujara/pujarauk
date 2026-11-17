import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/config/site';
import { europe } from '@/content/pages';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Clients in Europe',
  description: 'What Pujara & Co offers clients outside the UK: India tax and subsidiary services for European residents and companies, and what we do not cover.',
  path: '/clients-in-europe',
});

export default function EuropePage() {
  const countries = siteConfig.areaServed;
  return (
    <>
      <PageHero title={europe.heading} lead={europe.intro} crumbs={[{ name: 'Clients in Europe', path: '/clients-in-europe' }]} />
      <Section labelledBy="offered-heading">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-lg border border-line bg-surface p-6 shadow-card sm:p-8">
            <h2 id="offered-heading" className="text-2xl">
              {europe.offered.heading}
            </h2>
            <ul className="mt-5 space-y-3">
              {europe.offered.items.map((i) => (
                <li key={i} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-success" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-line bg-surface-alt p-6 sm:p-8">
            <h2 id="not-offered-heading" className="text-2xl">
              {europe.notOffered.heading}
            </h2>
            <ul className="mt-5 space-y-3" aria-labelledby="not-offered-heading">
              {europe.notOffered.items.map((i) => (
                <li key={i} className="flex gap-3">
                  <Icon name="cross" className="mt-1 h-5 w-5 shrink-0 text-ink-muted" />
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
      <Section tone="alt" labelledBy="practical-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionHeading id="practical-heading" eyebrow="Practicalities" title={europe.practicalities.heading} />
            <h3 className="text-lg">Countries</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {countries.map((c) => (
                <li key={c.code} className="rounded-pill border border-line bg-surface px-3 py-1 text-sm">
                  {c.name}
                  {!c.confirmed ? <span className="text-ink-muted"> [CONFIRM]</span> : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="prose-brand text-lg text-ink-muted">
            {europe.practicalities.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </Section>
      <Section labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading id="faq-heading" eyebrow="Questions" title="Frequently asked questions" />
          <FaqList faqs={europe.faqs} />
        </div>
      </Section>
      <CtaBand heading="Based in Europe with an India question?" text="Tell us where you live and what you need. We will say plainly whether we can help." />
    </>
  );
}
