import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly cartBadge: Locator;
  readonly addToCartButtons: Locator;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.addToCartButtons = page.locator('.btn_inventory');
    this.cartLink = page.locator('.shopping_cart_link');
  }

  async addFirstItemToCart() {
    await this.addToCartButtons.first().click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async getCartCount() {
    return this.cartBadge.textContent();
  }
}
