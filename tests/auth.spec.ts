import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../test-data/users.json';

test.describe('Authentication Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    await loginPage.login(users.standardUser.username, users.standardUser.password);
    await expect(page).toHaveURL(/inventory/); // check you are on inventory page
  });

  test('should show error with invalid password', async () => {
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);

    // stable assertion with built-in wait
    await expect(loginPage.errorMessage)
      .toHaveText(/Username and password do not match/i, { timeout: 5000 });
  });

  test('should show error for locked out user', async () => {
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);

    // stable assertion with built-in wait
    await expect(loginPage.errorMessage)
      .toHaveText(/locked out/i, { timeout: 5000 });
  });

  test('should show error with empty fields', async () => {
    await loginPage.login('', '');

    await expect(loginPage.errorMessage)
      .toHaveText(/Username is required|Password is required/i, { timeout: 5000 });
  });
});
