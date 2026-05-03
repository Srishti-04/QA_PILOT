import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly flashMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginBtn = page.locator('button[type="submit"]');
    this.flashMsg = page.locator('#flash');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login', {
      waitUntil: 'domcontentloaded',
      timeout: 60000
    });
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
  }

  async getMessage() {
    return await this.flashMsg.textContent();
  }
}