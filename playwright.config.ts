import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';

//Rotina que define qual o arquivo de configuração de ambiente será utilizado
//Se a variável de ambiente ENVIRONMENT não for informada, será utilizado o arquivo .env
const envfile = process.env.ENVIRONMENT ? `.env.${process.env.ENVIRONMENT}` : '.env.hml';
dotenv.config({ path: path.resolve(__dirname,'env', envfile) });


/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //timeout: 30000,
  testDir: './e2e',
  
  /* Rodar testes em paralelo */
  fullyParallel: true,
  
  /* Falha os testes em CI e Local se acidentalmente algum teste estiver marcado como test.only no código fonte. */
  forbidOnly: !!process.env.CI,
  
  /* Define no CI e Local quantos Retry serão executados nos testes que falharem */
  retries: process.env.CI ? 1 : 1,
  
  /* Define no CI e LocaL quantos testes rodarão com paralelismo. */
  workers: process.env.CI ? 3 : 3,
  
  reporter: [
    ['allure-playwright'],
    //['list'],
    ['json', { outputFile: 'test-results/results.json' }],
    //['html'],
    ['list'],
    ['@estruyf/github-actions-reporter']
  ],


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    bypassCSP: true,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off',
    baseURL: process.env.BASE_URL,
    //storageState: 'state.json',
    video: 'on',
    screenshot: 'on',
    testIdAttribute: 'data-test',
  },


  /* Configure projects for major browsers */
  projects: [
    // Setup project
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'],
                contextOptions: { permissions: ['clipboard-read', 'clipboard-write'] } }
    }
    // ,{
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] }
    // }
    // ,{
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] }
    // }

  ]
  
});



