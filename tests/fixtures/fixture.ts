
import { test as baseTest } from '@anaconda/playwright-utils';
import { LoginPage } from '@pages/login-page-class';
import { ProductsPage } from '@pages/products-page-class';
import { MiniCart } from '@pages/mini-cart-class';
import { ReleaseAPI } from '@pages/api/release-api';

// Extend the built-in test fixtures with your custom fixtures
export const test = baseTest.extend<{
  loginPage: LoginPage;
  productsPage: ProductsPage;
  miniCartPage: MiniCart;
  releaseAPI: ReleaseAPI;
}>({
  // Initialize your page objects here
  loginPage: async ({}: any, use: (arg0: LoginPage) => any) => {
    await use(new LoginPage());
  },
  productsPage: async ({}: any, use: (arg0: ProductsPage) => any) => {
    await use(new ProductsPage());
  },
  miniCartPage: async ({}: any, use: (arg0: MiniCart) => any) => {
    await use(new MiniCart());
  },
  releaseAPI: async ({}: any, use: (arg0: ReleaseAPI) => any) => {
    await use(new ReleaseAPI());
  },
});

export const expect = test.expect;

