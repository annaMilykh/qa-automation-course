import type { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export class PageManager {
  readonly loginPage: LoginPage;

  constructor(private readonly page: Page) {
    this.loginPage = new LoginPage(this.page);
  }
}
