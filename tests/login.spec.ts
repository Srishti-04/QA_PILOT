import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Valid Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('tomsmith', 'SuperSecretPassword!');

  const message = await loginPage.getMessage();
  expect(message).toContain('secure area');
});

test('Invalid Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('wronguser', 'wrongpass');

  const message = await loginPage.getMessage();
  expect(message).toContain('invalid');
});