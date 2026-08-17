import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e',
  fullyParallel: true,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4173',
    locale: 'es-CR',
  },
  webServer: {
    command: 'node js/serve.js',
    url: 'http://localhost:4173',
    env: { PORT: '4173' },
    reuseExistingServer: !process.env.CI,
  },
});
