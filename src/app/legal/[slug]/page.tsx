import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AnalyticsOptOut } from '@/components/AnalyticsOptOut';
import { PageHero } from '@/components/PageHero';
import { formatAddress, siteConfig } from '@/config/site';
import { legalSlugs, loadLegal } from '@/lib/content';
import { buildMetadata, formatUkDate } from '@/lib/seo';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return legalSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const mod = await loadLegal(slug);
  if (!mod) return {};
  return buildMetadata({ title: mod.meta.title, description: mod.meta.description, path: `/legal/${slug}` });
}

export default async function LegalPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const mod = await loadLegal(slug);
  if (!mod) notFound();
  const { meta, default: Body } = mod;
  const p = siteConfig.provider;
  return (
    <>
      <PageHero
        title={meta.title}
        lead={meta.description}
        crumbs={[
          { name: 'Legal', path: '/legal/privacy-notice' },
          { name: meta.title, path: `/legal/${meta.slug}` },
        ]}
      >
        <p className="mt-6 text-sm text-ink-muted">
          Last updated <time dateTime={meta.updatedOn}>{formatUkDate(meta.updatedOn)}</time>
          {meta.draft ? ' · Draft for professional review' : ''}
        </p>
      </PageHero>
      <article className="container-content py-14 sm:py-20">
        <div className="prose-brand mx-auto">
          <Body />
          {slug === 'cookie-policy' ? <AnalyticsOptOut /> : null}
          <hr />
          <p className="text-sm text-ink-muted">
            {p.legalName}, {p.legalForm}. {formatAddress()}. Email {siteConfig.contact.email}.
          </p>
        </div>
      </article>
    </>
  );
}
