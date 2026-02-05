import { test, expect } from '@playwright/test';

test('authenticate and save state', async ({ page }) => {
  await page.goto('/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  await expect(page).toHaveURL(/inventory.html/);

  await page.context().storageState({ path: 'auth.json' });
});
