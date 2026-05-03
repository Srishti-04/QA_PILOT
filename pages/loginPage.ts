import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
  await this.page.goto('https://the-internet.herokuapp.com/login');
  await this.page.waitForSelector('#username');
}
  async login(username: string, password: string) {
  await this.page.waitForSelector('#username');
  await this.username.fill(username);

  await this.password.fill(password);
  await this.loginBtn.click();
}

  async getMessage() {
    return this.page.locator('#flash').textContent();
  }
}