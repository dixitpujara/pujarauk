import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { LinkButton } from '@/components/ui/Button';
import { Section, SectionHeading } from '@/components/ui/Section';
import { pricing } from '@/content/pages';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Pricing',
  description: 'Fixed fees in GBP agreed in writing before work starts. Request a quote for bookkeeping, accounts, VAT, payroll, management accounts or India tax support.',
  path: '/pricing',
});

export default function PricingPage() {
  return (
    <>
      <PageHero title={pricing.heading} lead={pricing.intro} crumbs={[{ name: 'Pricing', path: '/pricing' }]}>
        <div className="mt-8">
          <LinkButton href="/contact#enquiry" size="lg">
            Request a quote
          </LinkButton>
        </div>
      </PageHero>

      {pricing.mode === 'packages' ? (
        <Section labelledBy="packages-heading">
          <SectionHeading id="packages-heading" eyebrow="Packages" title="Typical packages" text="Every package is confirmed in writing after a short scoping call. Prices are in GBP." />
          <ul className="grid gap-6 md:grid-cols-3">
            {pricing.packages.map((p) => (
              <li key={p.name} className="flex flex-col rounded-lg border border-line bg-surface p-6 shadow-card">
                <h3 className="text-xl">{p.name}</h3>
                <p className="mt-2 text-2xl font-bold text-navy">{p.priceFrom}</p>
                <p className="text-sm text-ink-muted">{p.priceNote}</p>
                <p className="mt-4 text-ink-muted">{p.forWhom}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.includes.map((i) => (
                    <li key={i} className="flex gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {i}
                    </li>
                  ))}
                </ul>
                <LinkButton href="/contact#enquiry" variant="secondary" className="mt-auto pt-0 mt-6">
                  Ask about {p.name}
                </LinkButton>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section tone="alt" labelledBy="quote-heading">
        <SectionHeading id="quote-heading" eyebrow="Process" title={pricing.howWeQuote.heading} />
        <ol className="grid gap-6 md:grid-cols-3">
          {pricing.howWeQuote.steps.map((s, i) => (
            <li key={s.title} className="rounded-lg border border-line bg-surface p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-navy text-sm font-bold text-white" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 text-ink-muted">{s.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section labelledBy="factors-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading id="factors-heading" title={pricing.whatAffectsPrice.heading} />
          <ul className="grid gap-4 sm:grid-cols-2">
            {pricing.whatAffectsPrice.items.map((i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-line p-4">
                <Icon name="info" className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                <span>{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="alt" labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading id="faq-heading" eyebrow="Questions" title="Pricing questions" />
          <FaqList faqs={pricing.faqs} />
        </div>
      </Section>

      <CtaBand heading="Get a written quote" text="Tell us about the work and we will send a fixed fee in GBP, with what is included, within one UK working day of our call." />
    </>
  );
}
