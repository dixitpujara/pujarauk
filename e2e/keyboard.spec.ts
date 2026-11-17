import { expect, test } from '@playwright/test';

test.describe('Keyboard operation', () => {
  test('skip link, header navigation and FAQ work with the keyboard', async ({ page, isMobile }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');
    const skip = page.getByRole('link', { name: 'Skip to main content' });
    await expect(skip).toBeFocused();
    await page.keyboard.press('Enter');
    await expect(page.locator('#main')).toBeFocused();

    if (isMobile) {
      const toggle = page.getByRole('button', { name: 'Open menu' });
      await toggle.focus();
      await page.keyboard.press('Enter');
      await expect(page.getByRole('button', { name: 'Close menu' })).toHaveAttribute('aria-expanded', 'true');
      await page.keyboard.press('Escape');
      await expect(page.getByRole('button', { name: 'Open menu' })).toBeFocused();
    }

    const faq = page.locator('details summary').first();
    await faq.focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('details[open]').first()).toBeVisible();
  });

  test('page is usable at 320px wide without horizontal scroll', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 720 });
    await page.goto('/services/year-end-accounts-preparation');
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    expect(scrollWidth).toBeLessThanOrEqual(320);
  });
});
