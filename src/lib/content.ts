import fs from 'node:fs';
import path from 'node:path';
import type { ArticleMeta, LegalMeta } from '@/content/types';

const INSIGHTS_DIR = path.join(process.cwd(), 'src', 'content', 'insights');
const LEGAL_DIR = path.join(process.cwd(), 'src', 'content', 'legal');

function slugsIn(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
    .sort();
}

export function insightSlugs(): string[] {
  return slugsIn(INSIGHTS_DIR);
}

export function legalSlugs(): string[] {
  return slugsIn(LEGAL_DIR);
}

type MdxModule<M> = { default: React.ComponentType; meta: M };

export async function loadInsight(slug: string): Promise<MdxModule<ArticleMeta> | null> {
  if (!insightSlugs().includes(slug)) return null;
  const mod = (await import(`@/content/insights/${slug}.mdx`)) as MdxModule<ArticleMeta>;
  return mod;
}

export async function loadLegal(slug: string): Promise<MdxModule<LegalMeta> | null> {
  if (!legalSlugs().includes(slug)) return null;
  const mod = (await import(`@/content/legal/${slug}.mdx`)) as MdxModule<LegalMeta>;
  return mod;
}

export async function allInsights(): Promise<ArticleMeta[]> {
  const metas = await Promise.all(insightSlugs().map(async (slug) => (await loadInsight(slug))?.meta));
  return metas
    .filter((m): m is ArticleMeta => Boolean(m))
    .sort((a, b) => (a.publishedOn < b.publishedOn ? 1 : -1));
}

export async function allLegal(): Promise<LegalMeta[]> {
  const metas = await Promise.all(legalSlugs().map(async (slug) => (await loadLegal(slug))?.meta));
  return metas.filter((m): m is LegalMeta => Boolean(m));
}
