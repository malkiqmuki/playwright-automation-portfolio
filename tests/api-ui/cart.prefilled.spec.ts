import { test, expect } from '@playwright/test';

test.describe('@api-ui Cart prefilled via auth state', () => {
  test('cart has item without login UI', async ({ page }) => {
    await page.goto('/inventory.html');
    await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

    await page.goto('/cart.html');
    await expect(page.locator('.cart_item')).toHaveCount(1);
  });
});
