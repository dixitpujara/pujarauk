#!/usr/bin/env node
/* Tiny static site generator. Run: node src/build.js
   Reads src/pages/*.js, wraps each in the shared layout, writes to site/. */
const fs = require('fs');
const path = require('path');
const cfg = require('./config');
const layout = require('./partials/layout');

const pagesDir = path.join(__dirname, 'pages');
const outDir = path.join(__dirname, '..', 'site');

const pages = fs.readdirSync(pagesDir)
  .filter(f => f.endsWith('.js'))
  .flatMap(f => {
    const mod = require(path.join(pagesDir, f));
    return Array.isArray(mod) ? mod : [mod];
  });

const urls = [];
for (const page of pages) {
  const html = layout(page, cfg);
  const rel = page.path === '/404.html' ? '404.html' : path.join(page.path, 'index.html');
  const file = path.join(outDir, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, html);
  if (page.path !== '/404.html') urls.push(page.path);
  console.log('wrote', rel);
}

// sitemap + robots
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${cfg.siteUrl}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(outDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${cfg.siteUrl}/sitemap.xml\n`);
console.log('wrote sitemap.xml, robots.txt');
