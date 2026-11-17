import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBand } from '@/components/CtaBand';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { insightSlugs, loadInsight } from '@/lib/content';
import { articleSchema } from '@/lib/schema';
import { buildMetadata, formatUkDate } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return insightSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const mod = await loadInsight(slug);
  if (!mod) return {};
  return buildMetadata({
    title: mod.meta.metaTitle ?? mod.meta.title,
    description: mod.meta.description,
    path: `/insights/${slug}`,
    type: 'article',
    publishedTime: mod.meta.publishedOn,
    modifiedTime: mod.meta.reviewedOn,
    authors: [mod.meta.author],
  });
}

export default async function InsightPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const mod = await loadInsight(slug);
  if (!mod) notFound();
  const { meta, default: Body } = mod;
  return (
    <>
      <JsonLd data={articleSchema(meta)} />
      <PageHero
        title={meta.title}
        lead={meta.description}
        crumbs={[
          { name: 'Insights', path: '/insights' },
          { name: meta.title, path: `/insights/${meta.slug}` },
        ]}
      >
        <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted">
          <div className="flex gap-1.5">
            <dt className="font-semibold text-ink">Author:</dt>
            <dd>
              <Link href="/about" className="underline">
                {meta.author}, {meta.authorDesignation}
              </Link>
            </dd>
          </div>
          <div className="flex gap-1.5">
            <dt className="font-semibold text-ink">Published:</dt>
            <dd>
              <time dateTime={meta.publishedOn}>{formatUkDate(meta.publishedOn)}</time>
            </dd>
          </div>
          <div className="flex gap-1.5">
            <dt className="font-semibold text-ink">Last reviewed:</dt>
            <dd>
              <time dateTime={meta.reviewedOn}>{formatUkDate(meta.reviewedOn)}</time>
            </dd>
          </div>
          <div className="flex gap-1.5">
            <dt className="font-semibold text-ink">Reading time:</dt>
            <dd>{meta.readingMinutes} minutes</dd>
          </div>
        </dl>
      </PageHero>
      <article className="container-content py-14 sm:py-20">
        <div className="prose-brand mx-auto">
          <Body />
          {meta.sources.length ? (
            <section aria-labelledby="sources-heading">
              <h2 id="sources-heading">Sources</h2>
              <ul>
                {meta.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} rel="noopener noreferrer">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          <p className="rounded-md border border-line bg-surface-alt p-4 text-sm text-ink-muted">
            This article is general information, not advice. It was reviewed on {formatUkDate(meta.reviewedOn)}. Tax rules change; check GOV.UK and speak to your accountant before acting.
          </p>
        </div>
      </article>
      <CtaBand heading="Need help with this?" text="Book a free consultation and we will tell you what we can prepare and what your UK accountant should handle." />
    </>
  );
}
