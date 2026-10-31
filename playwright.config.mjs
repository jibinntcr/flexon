import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  expect: {
    timeout: 10000,
  },
  fullyParallel: true,
  retries: 1,
  workers: 2,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'playwright-report/results.json' }],
  ],
  use: {
    baseURL: process.env.BASE_URL || 'http://localhost:3001',
    channel: 'chrome',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Mobile Narrow - Galaxy S9+ (320px)',
      use: {
        ...devices['Galaxy S9+'],
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
    {
      name: 'Mobile Standard - iPhone SE (375px)',
      use: {
        ...devices['iPhone SE'],
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
    {
      name: 'Mobile Large - Pixel 7 (412px)',
      use: {
        ...devices['Pixel 7'],
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
    {
      name: 'Tablet - iPad Mini (768px)',
      use: {
        ...devices['iPad Mini'],
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
    {
      name: 'Desktop - Chrome (1440px)',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 900 },
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
});

