import type { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.getByTestId("signin-username").locator("input");
    this.passwordInput = page.getByTestId("signin-password").locator("input");

    this.signInButton = page.getByTestId("signin-submit");
  }

  async openLoginPage(): Promise<void> {
    await this.open("/signin");
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}
