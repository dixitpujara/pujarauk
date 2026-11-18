import { expect, test } from '@playwright/test';

test.describe('Enquiry form', () => {
  test('shows field errors and keeps keyboard focus management', async ({ page }) => {
    await page.goto('/contact');
    await page.getByRole('button', { name: 'Send enquiry' }).click();
    const alert = page.locator('#enquiry [role="alert"]');
    await expect(alert).toContainText('Please fix the following');
    await expect(alert).toBeFocused();
    await expect(page.getByLabel(/Your name/)).toHaveAttribute('aria-invalid', 'true');
  });

  test('rejects messages containing a National Insurance number', async ({ page }) => {
    await page.goto('/contact');
    await page.getByLabel(/Your name/).fill('Test Person');
    await page.getByLabel(/Email address/).fill('test@example.com');
    await page.getByLabel(/I am/).selectOption('practice');
    await page.getByLabel(/Service of interest/).selectOption('vat');
    await page.getByLabel(/How can we help/).fill('My NI number is AB 12 34 56 C please set me up.');
    await page.getByLabel(/I have read the/).check();
    await page.getByRole('button', { name: 'Send enquiry' }).click();
    await expect(page.locator('#enquiry [role="alert"]')).toContainText('reference number, bank or card details');
  });

  test('shows a graceful failure with an alternative route when email is not configured', async ({ page }) => {
    await page.goto('/contact');
    await page.getByLabel(/Your name/).fill('Test Person');
    await page.getByLabel(/Email address/).fill('test@example.com');
    await page.getByLabel(/I am/).selectOption('business');
    await page.getByLabel(/Service of interest/).selectOption('year-end-accounts');
    await page.getByLabel(/How can we help/).fill('We need year-end accounts prepared for a small limited company.');
    await page.getByLabel(/I have read the/).check();
    // Wait past the anti-bot minimum fill time.
    await page.waitForTimeout(3200);
    await page.getByRole('button', { name: 'Send enquiry' }).click();
    const alert = page.locator('#enquiry [role="alert"]');
    await expect(alert).toContainText('not switched on yet');
    const mailto = alert.getByRole('link', { name: 'Open in my email app' });
    await expect(mailto).toHaveAttribute('href', /^mailto:hello@pujaraandco\.co\.uk\?subject=.*body=.*year-end/i);
    await expect(alert).toContainText('hello@pujaraandco.co.uk');
  });

  test('API rejects honeypot and invalid payloads', async ({ request }) => {
    const bad = await request.post('/api/enquiry', { data: { name: 'x' } });
    expect(bad.status()).toBe(400);
    const bot = await request.post('/api/enquiry', {
      data: { name: 'Bot', email: 'bot@example.com', enquirerType: 'practice', service: 'vat', message: 'Buy my things now please thanks', privacy: true, website: 'http://spam', startedAt: Date.now() - 10000 },
    });
    expect(bot.status()).toBe(200); // silently dropped
  });
});
