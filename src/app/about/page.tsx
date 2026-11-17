import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { Icon } from '@/components/Icon';
import { PageHero } from '@/components/PageHero';
import { PhotoPlaceholder } from '@/components/Placeholder';
import { Section, SectionHeading } from '@/components/ui/Section';
import { formatAddress, siteConfig } from '@/config/site';
import { about } from '@/content/pages';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About Pujara & Co',
  description: 'A founder-led firm of Chartered Accountants (India), registered with ICAI, serving UK and European clients remotely from Ahmedabad in UK working hours.',
  path: '/about',
});

export default function AboutPage() {
  const p = siteConfig.principal;
  return (
    <>
      <PageHero title={about.heading} lead={about.intro} crumbs={[{ name: 'About', path: '/about' }]} />

      <Section labelledBy="practice-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading id="practice-heading" eyebrow="The practice" title={about.practice.heading} />
          <div className="prose-brand text-lg text-ink-muted">
            {about.practice.paragraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
            <p className="font-semibold text-navy">{siteConfig.provider.teamLocationSentence}</p>
            <p className="text-base">
              {siteConfig.provider.legalName}, {siteConfig.provider.legalForm}. {formatAddress()}.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="alt" labelledBy="principal-heading">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <PhotoPlaceholder label={p.photo.alt} ratio="aspect-[4/5]" className="max-w-sm" />
          <div>
            <SectionHeading id="principal-heading" eyebrow="Principal" title={`${p.name}, ${p.designation}`} text={`${p.role}. ${p.qualificationSentence}.`} />
            <div className="prose-brand text-lg text-ink-muted">
              {about.principal.paragraphs.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section labelledBy="team-heading">
        <SectionHeading id="team-heading" eyebrow="Team" title={about.team.heading} text={about.team.intro} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {about.team.members.map((m) => (
            <li key={m.name} className="rounded-lg border border-line bg-surface p-6 shadow-card">
              {m.photo ? (
                <PhotoPlaceholder label={m.photo.alt} ratio="aspect-square" className="mb-5 max-w-[8rem]" />
              ) : (
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-pill bg-surface-navy-tint text-navy" aria-hidden="true">
                  <Icon name="users" className="h-7 w-7" />
                </div>
              )}
              <h3 className="text-lg">{m.name}</h3>
              <p className="text-sm font-semibold text-accent-600">{m.role}</p>
              <p className="mt-1 text-sm text-ink-muted">{m.qualification}</p>
              <p className="mt-3 text-ink-muted">{m.bio}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="alt" labelledBy="values-heading">
        <SectionHeading id="values-heading" eyebrow="Values" title={about.values.heading} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.items.map((v) => (
            <li key={v.title} className="rounded-lg border border-line bg-surface p-6">
              <Icon name="shield" className="h-7 w-7 text-navy" />
              <h3 className="mt-4 text-lg">{v.title}</h3>
              <p className="mt-2 text-ink-muted">{v.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand heading="Work with a firm that says what it does and does it" text="Book a free consultation and speak directly with the principal." />
    </>
  );
}
