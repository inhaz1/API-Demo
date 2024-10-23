import { test as baseTest } from '@anaconda/playwright-utils';
import { LoginPage } from '@pages/login-page-class';
import { ProductsPage } from '@pages/products-page-class';
import { MiniCart } from '@pages/mini-cart-class';
import { API } from '@pages/api/api';

// Extend the built-in test fixtures with your custom fixtures
export const test = baseTest.extend<{
  loginPage: LoginPage;
  productsPage: ProductsPage;
  miniCartPage: MiniCart;
  api: API;
}>({
  // Initialize your page objects here
  loginPage: async ({}, use) => {
    await use(new LoginPage());
  },
  productsPage: async ({}, use) => {
    await use(new ProductsPage());
  },
  miniCartPage: async ({}, use) => {
    await use(new MiniCart());
  },
  api: async ({}, use) => {
    await use(new API());
  },
});

export const expect = test.expect;
