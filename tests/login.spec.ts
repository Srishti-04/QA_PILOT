import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.skip(process.env.CI === 'true', 'Skipping UI tests in CI');

test.describe('Login Tests', () => {

  test('Valid Login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('tomsmith', 'SuperSecretPassword!');

    const msg = await login.getMessage();
    expect(msg).toContain('secure area');
  });

  test('Invalid Login', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('wrong', 'wrong');

    const msg = await login.getMessage();
    expect(msg).toContain('invalid');
  });

});