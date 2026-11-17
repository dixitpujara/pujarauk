/**
 * Runs Lighthouse (mobile) against a running build for a handful of pages and
 * writes HTML reports to lighthouse-reports/. Usage: npm run build && npm start
 * in one terminal, then `npm run lighthouse` in another.
 */
import fs from 'node:fs';
import path from 'node:path';
import { launch } from 'chrome-launcher';
import lighthouse from 'lighthouse';

const base = process.env.LH_BASE_URL ?? 'http://127.0.0.1:3000';
const pages = ['/', '/services/outsourced-bookkeeping-for-accountancy-practices', '/contact', '/insights/making-tax-digital-for-income-tax-what-changes-from-april-2026'];
const outDir = path.resolve('lighthouse-reports');
fs.mkdirSync(outDir, { recursive: true });

const chrome = await launch({
  chromePath: process.env.CHROME_PATH,
  chromeFlags: ['--headless=new', '--no-sandbox', '--disable-gpu'],
});

const rows = [];
try {
  for (const p of pages) {
    const result = await lighthouse(`${base}${p}`, {
      port: chrome.port,
      output: 'html',
      logLevel: 'error',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      formFactor: 'mobile',
      screenEmulation: { mobile: true, width: 412, height: 823, deviceScaleFactor: 1.75, disabled: false },
      throttlingMethod: 'simulate',
    });
    const cats = result.lhr.categories;
    const audits = result.lhr.audits;
    const file = path.join(outDir, `${p === '/' ? 'home' : p.slice(1).replace(/\//g, '_')}.html`);
    fs.writeFileSync(file, result.report);
    rows.push({
      page: p,
      performance: Math.round(cats.performance.score * 100),
      accessibility: Math.round(cats.accessibility.score * 100),
      bestPractices: Math.round(cats['best-practices'].score * 100),
      seo: Math.round(cats.seo.score * 100),
      lcp: audits['largest-contentful-paint'].displayValue,
      cls: audits['cumulative-layout-shift'].displayValue,
      tbt: audits['total-blocking-time'].displayValue,
    });
  }
} finally {
  await chrome.kill();
}
console.table(rows);
fs.writeFileSync(path.join(outDir, 'summary.json'), JSON.stringify(rows, null, 2));
