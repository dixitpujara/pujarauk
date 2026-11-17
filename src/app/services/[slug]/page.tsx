import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { Icon } from '@/components/Icon';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { LinkButton } from '@/components/ui/Button';
import { Section, SectionHeading } from '@/components/ui/Section';
import { audiences } from '@/content/audiences';
import { getService, serviceSlugs, services } from '@/content/services';
import { serviceSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({ title: service.metaTitle, description: service.metaDescription, path: `/services/${slug}` });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const forAudiences = audiences.filter((a) => a.confirmed && service.audiences.includes(a.id));
  const related = services.filter((s) => s.slug !== service.slug && s.audiences.some((a) => service.audiences.includes(a))).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <PageHero
        title={service.title}
        lead={service.intro}
        eyebrow={service.name}
        crumbs={[
          { name: 'Services', path: '/services' },
          { name: service.name, path: `/services/${service.slug}` },
        ]}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/contact#book" size="lg">
            Book a free consultation
          </LinkButton>
          <LinkButton href={`/contact?service=${service.slug}#enquiry`} variant="secondary" size="lg">
            Send an enquiry
          </LinkButton>
        </div>
      </PageHero>

      <Section labelledBy="who-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading id="who-heading" eyebrow="Who it is for" title="Is this for you?" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.whoItIsFor.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-line p-4">
                <Icon name="users" className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="alt" labelledBy="included-heading">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading id="included-heading" title="What is included" />
            <ul className="space-y-3">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 id="not-included-heading" className="mb-10 text-3xl sm:text-4xl">
              What is not included
            </h2>
            <ul className="space-y-3" aria-labelledby="not-included-heading">
              {service.notIncluded.map((item) => (
                <li key={item} className="flex gap-3">
                  <Icon name="cross" className="mt-1 h-5 w-5 shrink-0 text-ink-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section labelledBy="how-heading">
        <SectionHeading id="how-heading" eyebrow="Process" title="How it works" />
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {service.howItWorks.map((step, i) => (
            <li key={step.title} className="rounded-lg border border-line p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-pill bg-navy text-sm font-bold text-white" aria-hidden="true">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg">
                <span className="sr-only">Step {i + 1}: </span>
                {step.title}
              </h3>
              <p className="mt-2 text-ink-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="alt" labelledBy="provides-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading id="provides-heading" eyebrow="Your side" title="What you provide" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.clientProvides.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-line bg-surface p-4">
                <Icon name="accounts" className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <SectionHeading id="faq-heading" eyebrow="Questions" title="Frequently asked questions" />
            {forAudiences.length ? (
              <p className="text-sm text-ink-muted">
                Written for:{' '}
                {forAudiences.map((a, i) => (
                  <span key={a.id}>
                    <Link href={`/who-we-help#${a.slug}`} className="font-semibold text-navy underline">
                      {a.name}
                    </Link>
                    {i < forAudiences.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            ) : null}
          </div>
          <FaqList faqs={service.faqs} />
        </div>
      </Section>

      {related.length ? (
        <Section tone="alt" labelledBy="related-heading">
          <SectionHeading id="related-heading" title="Related services" />
          <ul className="grid gap-4 sm:grid-cols-3">
            {related.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="flex h-full items-center gap-3 rounded-lg border border-line bg-surface p-5 font-semibold text-navy no-underline shadow-card hover:underline">
                  <Icon name={s.icon} className="h-6 w-6 shrink-0" /> {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <CtaBand heading={service.cta.heading} text={service.cta.text} />
    </>
  );
}
