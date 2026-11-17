import type { Metadata } from 'next';
import { absoluteUrl, siteConfig } from '@/config/site';

const TITLE_SUFFIX = ' | Pujara & Co';

type PageMeta = {
  /** Full title including suffix if you want control; otherwise suffix is appended. */
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
};

/** Builds Next.js Metadata with canonical, Open Graph and sensible defaults. */
export function buildMetadata(meta: PageMeta): Metadata {
  const title = meta.title.endsWith(TITLE_SUFFIX) ? meta.title : `${meta.title}${TITLE_SUFFIX}`;
  const url = absoluteUrl(meta.path);
  return {
    // absolute: the layout's title template must not append the suffix twice.
    title: { absolute: title },
    description: meta.description,
    alternates: { canonical: url },
    robots: meta.noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description: meta.description,
      url,
      siteName: siteConfig.name,
      locale: 'en_GB',
      type: meta.type ?? 'website',
      ...(meta.type === 'article'
        ? { publishedTime: meta.publishedTime, modifiedTime: meta.modifiedTime, authors: meta.authors }
        : {}),
    },
    twitter: { card: 'summary_large_image', title, description: meta.description },
  };
}

/** Formats an ISO date (yyyy-mm-dd) as "17 November 2026". */
export function formatUkDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
}
