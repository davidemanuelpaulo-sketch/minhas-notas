import { defineConfig, devices } from '@playwright/test';
const exe = process.env.CHROME_PATH;
export default defineConfig({
  testDir: './testes',
  timeout: 45000,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['github']] : 'list',
  use: { baseURL: 'http://localhost:5174', timezoneId: 'America/Sao_Paulo', locale: 'pt-BR', ...(exe ? { launchOptions: { executablePath: exe } } : {}) },
  projects: [
    { name: 'celular', testIgnore: /computador\.spec\.mjs/, use: { ...devices['Pixel 7'], browserName: 'chromium', ...(exe ? { launchOptions: { executablePath: exe } } : {}) } },
    { name: 'computador', use: { viewport: { width: 1360, height: 860 }, browserName: 'chromium' }, testMatch: /computador\.spec\.mjs/ },
  ],
  webServer: { command: 'node scripts/gerar-teste.mjs && npx vite --port 5174 --strictPort', url: 'http://localhost:5174/testes/index.html', reuseExistingServer: !process.env.CI, timeout: 60000 },
});
