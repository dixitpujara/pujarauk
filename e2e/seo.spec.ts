import { expect, test } from '@playwright/test';
import { pages } from './pages';

test.describe('SEO and structure', () => {
  for (const path of pages.filter((p) => p !== '/this-page-does-not-exist' && p !== '/contact/thank-you')) {
    test(`title, description, H1, canonical, lang: ${path}`, async ({ page }) => {
      await page.goto(path);
      const title = await page.title();
      expect(title.length, `title "${title}"`).toBeLessThanOrEqual(60);
      const description = await page.locator('meta[name="description"]').getAttribute('content');
      expect(description, 'meta description present').toBeTruthy();
      expect(description!.length, `description "${description}"`).toBeLessThanOrEqual(155);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', /^https:\/\/www\.pujaraandco\.co\.uk/);
      await expect(page.locator('html')).toHaveAttribute('lang', 'en-GB');
      // No links to the India site and no hreflang pairing (brief section 2).
      await expect(page.locator('a[href*="pujaraandco.com"]')).toHaveCount(0);
      await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(0);
    });
  }

  test('404 page returns 404 with the custom template', async ({ page }) => {
    const res = await page.goto('/this-page-does-not-exist');
    expect(res?.status()).toBe(404);
    await expect(page.getByRole('heading', { level: 1 })).toContainText('cannot find');
  });

  test('old URLs redirect permanently', async ({ request }) => {
    const res = await request.get('/services/bookkeeping', { maxRedirects: 0 });
    expect(res.status()).toBe(308);
    expect(res.headers()['location']).toContain('/services/outsourced-bookkeeping-for-accountancy-practices');
  });

  test('sitemap and robots exist', async ({ request }) => {
    const sm = await request.get('/sitemap.xml');
    expect(sm.ok()).toBeTruthy();
    expect(await sm.text()).toContain('/services/year-end-accounts-preparation');
    const rb = await request.get('/robots.txt');
    expect(await rb.text()).toContain('Sitemap:');
  });

  test('security headers are set', async ({ request }) => {
    const res = await request.get('/');
    const h = res.headers();
    expect(h['content-security-policy']).toContain("default-src 'self'");
    expect(h['strict-transport-security']).toContain('max-age');
    expect(h['x-content-type-options']).toBe('nosniff');
    expect(h['referrer-policy']).toBe('strict-origin-when-cross-origin');
  });
});
