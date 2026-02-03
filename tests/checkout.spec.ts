import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Checkout flow', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('should complete checkout successfully', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const checkoutPage = new CheckoutPage(page);

    await inventoryPage.addFirstItemToCart();
    await inventoryPage.openCart();
    await checkoutPage.completeCheckout('John', 'Doe', '1000');

    await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
  });

  test('should show error when trying to checkout without items', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/cart.html');
  await page.click('#checkout');
  await page.click('#continue');

  await expect(page.locator('[data-test="error"]'))
    .toContainText('Error');
  });
});
