import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { FaqList } from '@/components/FaqList';
import { PageHero } from '@/components/PageHero';
import { Section, SectionHeading } from '@/components/ui/Section';
import { siteConfig } from '@/config/site';
import { howWeWork } from '@/content/pages';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'How we work',
  description: 'Onboarding, secure document exchange, software, turnaround times, review process, UK communication hours, confidentiality and data security.',
  path: '/how-we-work',
});

export default function HowWeWorkPage() {
  return (
    <>
      <PageHero title={howWeWork.heading} lead={howWeWork.intro} crumbs={[{ name: 'How we work', path: '/how-we-work' }]}>
        <p className="mt-6 max-w-3xl text-ink-muted">{siteConfig.provider.teamLocationSentence}</p>
        <nav aria-label="On this page" className="mt-8">
          <ul className="flex flex-wrap gap-2">
            {howWeWork.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="inline-block rounded-pill border border-line bg-surface px-4 py-2 text-sm font-medium text-navy no-underline hover:bg-surface-navy-tint">
                  {s.heading}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>
      <div className="container-content py-14 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1fr_2fr]">
          <div className="hidden lg:block">
            <nav aria-label="Sections" className="sticky top-28">
              <ol className="space-y-2 border-l-2 border-line pl-4 text-sm">
                {howWeWork.sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-ink-muted hover:text-navy">
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <div className="space-y-14">
            {howWeWork.sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-heading`} className="scroll-mt-24">
                <h2 id={`${s.id}-heading`} className="text-2xl sm:text-3xl">
                  {s.heading}
                </h2>
                <div className="prose-brand mt-4 text-ink-muted">
                  {s.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                  {s.bullets?.length ? (
                    <ul>
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
      <Section tone="alt" labelledBy="faq-heading">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading id="faq-heading" eyebrow="Questions" title="Frequently asked questions" />
          <FaqList faqs={howWeWork.faqs} />
        </div>
      </Section>
      <CtaBand heading="See it in practice" text="Book a call and we will walk you through onboarding, access and the first month of work." />
    </>
  );
}
