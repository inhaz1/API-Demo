import { AnacondaConfigDefaults, AnacondaProjectDefaults } from '@anaconda/playwright-utils';
import { defineConfig } from '@playwright/test';

// Default url for all tests to use allowing to run tests against staging/dev.
const BASE_URL = process.env.URL || 'http://localhost:5000';

export default defineConfig({
  // Setup the defaults for all projects
  ...AnacondaConfigDefaults,
  /**
   * The directory where tests are located.
   * See https://playwright.dev/docs/api/class-testconfig#testconfig-testdir
   */
  testDir: './tests',
  use: {
    ...AnacondaProjectDefaults,
    /* Records traces after each test failure for debugging purposes. */
    trace: 'retain-on-failure',
    /* Captures screenshots after each test failure to provide visual context. */
    screenshot: 'only-on-failure',
    headless: true,
    // testIdAttribute: 'qa-target',
    baseURL: BASE_URL,
  },

  /**
   * Configure projects for major browsers.
   * See https://playwright.dev/docs/test-configuration#projects
   */
  projects: [
    {
      name: 'chromium',
      use: {
        launchOptions: {
          args: ['--disable-web-security'],
          slowMo: 0,
          headless: false,
        },
      },
    },
  ],

  /**
   * If the tests are being run on localhost, this configuration starts a web server.
   * Otherwise, if the server is already up then we just re-use it such as a staging server.
   * See https://playwright.dev/docs/test-webserver#configuring-a-web-server
   */
  // webServer: {
  //   command: 'npm run server', // Start the UI server
  //   url: BASE_URL,
  //   ignoreHTTPSErrors: true,
  //   timeout: 2 * 60 * 1000,
  //   reuseExistingServer: true,
  //   stdout: 'pipe',
  //   stderr: 'pipe',
  // },
});