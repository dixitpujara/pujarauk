import Link from 'next/link';
import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { Icon } from '@/components/Icon';
import { PhotoPlaceholder } from '@/components/Placeholder';
import { ServiceCard } from '@/components/ServiceCard';
import { LinkButton } from '@/components/ui/Button';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/config/site';
import { confirmedAudiences } from '@/content/audiences';
import { home } from '@/content/pages';
import { services } from '@/content/services';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Accounts and India tax support for UK clients',
  description: 'Outsourced bookkeeping, accounts, VAT and payroll preparation for UK practices and businesses, plus India tax support for UK and European residents.',
  path: '/',
});

export default function HomePage() {
  const audiences = confirmedAudiences();
  return (
    <>
      {/* Hero */}
      <section aria-labelledby="hero-heading" className="border-b border-line bg-surface-alt">
        <div className="container-content grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent-600">{home.hero.eyebrow}</p>
            <h1 id="hero-heading" className="mt-3 text-4xl sm:text-5xl">
              {home.hero.heading}
            </h1>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl text-ink-muted">{home.hero.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href="/contact#book" size="lg">
                {home.hero.primaryCta}
              </LinkButton>
              <LinkButton href="/contact#enquiry" variant="secondary" size="lg">
                {home.hero.secondaryCta}
              </LinkButton>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-ink-muted">
              <Icon name="clock" className="h-4 w-4" /> {siteConfig.contact.responseCommitment}
            </p>
          </div>
          <div className="hidden lg:block">
            <PhotoPlaceholder label="[PLACEHOLDER: real photo of Mitul Pujara or the team at work in Ahmedabad. No stock imagery.]" ratio="aspect-[4/5]" className="max-w-sm ml-auto" />
          </div>
        </div>
      </section>

      {/* Services overview */}
      <Section labelledBy="services-heading">
        <SectionHeading id="services-heading" eyebrow="Services" title={home.servicesIntro.heading} text={home.servicesIntro.text} />
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </ul>
      </Section>

      {/* Who we work with */}
      <Section tone="alt" labelledBy="who-heading">
        <SectionHeading id="who-heading" eyebrow="Who we help" title={home.whoWeWorkWith.heading} text={home.whoWeWorkWith.text} />
        <ul className="grid gap-5 md:grid-cols-2">
          {audiences.map((a) => (
            <li key={a.id} className="rounded-lg border border-line bg-surface p-6 shadow-card">
              <h3 className="text-xl">
                <Link href={`/who-we-help#${a.slug}`} className="no-underline hover:underline">
                  {a.name}
                </Link>
              </h3>
              <p className="mt-3 text-ink-muted">{a.intro}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* How it works */}
      <Section labelledBy="how-heading">
        <SectionHeading id="how-heading" eyebrow="Process" title={home.howItWorks.heading} />
        <ol className="grid gap-6 md:grid-cols-3">
          {home.howItWorks.steps.map((step, i) => (
            <li key={step.title} className="relative rounded-lg border border-line p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-navy text-sm font-bold text-white" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-ink-muted">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8">
          <Link href="/how-we-work" className="inline-flex items-center gap-2 font-semibold text-navy">
            See how we work in detail <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* Credentials strip (confirmed items only) */}
      <section aria-label="Practice details" className="border-y border-line bg-surface-navy-tint">
        <dl className="container-content grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {home.credentials.map((c) => (
            <div key={c.label}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-muted">{c.label}</dt>
              <dd className="mt-1 font-semibold text-navy">{c.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Principal introduction */}
      <Section labelledBy="principal-heading">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <PhotoPlaceholder label={siteConfig.principal.photo.alt} ratio="aspect-[4/5]" className="max-w-sm" />
          <div>
            <SectionHeading id="principal-heading" eyebrow="Founder-led" title={home.principalIntro.heading} />
            <div className="space-y-4 text-lg text-ink-muted">
              {home.principalIntro.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <LinkButton href="/about" variant="secondary" className="mt-8">
              {home.principalIntro.ctaLabel}
            </LinkButton>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="alt" labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading id="faq-heading" eyebrow="Questions" title="Frequently asked questions" />
          <FaqList faqs={home.faqs} />
        </div>
      </Section>

      <CtaBand heading={home.closingCta.heading} text={home.closingCta.text} />
    </>
  );
}
