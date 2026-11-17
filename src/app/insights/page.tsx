import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/ui/Section';
import { allInsights } from '@/lib/content';
import { buildMetadata, formatUkDate } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Insights for UK practices, businesses and NRIs',
  description: 'Practical, dated articles on Making Tax Digital, India tax for UK residents, outsourcing and running a UK practice. General information, not advice.',
  path: '/insights',
});

export default async function InsightsPage() {
  const articles = await allInsights();
  return (
    <>
      <PageHero
        title="Insights"
        lead="Short, practical articles for UK accountancy practices, business owners and people with tax matters in India. Each one shows its author, publish date and last review date."
        crumbs={[{ name: 'Insights', path: '/insights' }]}
      />
      <Section>
        {articles.length === 0 ? (
          <p className="text-ink-muted">No articles have been published yet. Check back soon.</p>
        ) : (
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <li key={a.slug} className="group relative flex flex-col rounded-lg border border-line bg-surface p-6 shadow-card transition-shadow hover:shadow-card-hover">
                <ul className="flex flex-wrap gap-2" aria-label="Topics">
                  {a.tags.slice(0, 2).map((t) => (
                    <li key={t} className="rounded-pill bg-surface-navy-tint px-2.5 py-0.5 text-xs font-semibold text-navy">
                      {t}
                    </li>
                  ))}
                </ul>
                <h2 className="mt-4 text-xl">
                  <Link href={`/insights/${a.slug}`} className="no-underline after:absolute after:inset-0 after:content-[''] group-hover:underline">
                    {a.title}
                  </Link>
                </h2>
                <p className="mt-3 text-ink-muted">{a.description}</p>
                <p className="mt-5 text-sm text-ink-muted">
                  {a.author}, {a.authorDesignation} · <time dateTime={a.publishedOn}>{formatUkDate(a.publishedOn)}</time> · {a.readingMinutes} min read
                </p>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
