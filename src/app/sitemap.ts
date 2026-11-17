import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/config/site';
import { serviceSlugs } from '@/content/services';
import { allInsights, legalSlugs } from '@/lib/content';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const statics: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/who-we-help', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/how-we-work', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/clients-in-europe', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/insights', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/contact', priority: 0.9, changeFrequency: 'yearly' },
  ];
  const insights = await allInsights();
  return [
    ...statics.map((s) => ({ url: absoluteUrl(s.path), lastModified: now, changeFrequency: s.changeFrequency, priority: s.priority })),
    ...serviceSlugs.map((slug) => ({ url: absoluteUrl(`/services/${slug}`), lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...insights.map((a) => ({ url: absoluteUrl(`/insights/${a.slug}`), lastModified: new Date(a.reviewedOn), changeFrequency: 'monthly' as const, priority: 0.6 })),
    ...legalSlugs().map((slug) => ({ url: absoluteUrl(`/legal/${slug}`), lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 })),
  ];
}
