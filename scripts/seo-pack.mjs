/**
 * Crawls the running build and prints a markdown table of every indexable
 * page's title, description, canonical and JSON-LD types. Used to produce
 * docs/SEO-PACK.md. Usage: npm run build && npm start, then node scripts/seo-pack.mjs
 */
const base = process.env.LH_BASE_URL ?? 'http://127.0.0.1:3000';
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
const dec = (s) => s.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&rsquo;/g, '’');
const rows = [];
for (const path of urls) {
  const html = await (await fetch(`${base}${path}`)).text();
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? '';
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? '').replace(/<[^>]+>/g, '').trim();
  const types = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .flatMap((m) => { try { const j = JSON.parse(m[1]); return [j['@type']]; } catch { return []; } });
  rows.push({ path, title, titleLen: dec(title).length, desc, descLen: dec(desc).length, h1, canonical, types: [...new Set(types)].join(', ') });
}
console.log('| URL | Title (chars) | Meta description (chars) | H1 | JSON-LD |');
console.log('| --- | --- | --- | --- | --- |');
for (const r of rows) console.log(`| ${r.path} | ${dec(r.title)} (${r.titleLen}) | ${dec(r.desc)} (${r.descLen}) | ${dec(r.h1)} | ${r.types} |`);
