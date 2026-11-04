import { test, expect } from "../fixtures/testFixtures";

test("Sign in form displays required fields", async ({ pages }) => {
  const loginPage = pages.loginPage;

  await loginPage.openLoginPage();

  await expect(loginPage.usernameInput).toBeVisible();
  await expect(loginPage.passwordInput).toBeVisible();
  await expect(loginPage.signInButton).toBeVisible();
});

test("User can sign in with valid credentials", async ({ pages, page }) => {
  const loginPage = pages.loginPage;

  await loginPage.openLoginPage();

  await loginPage.login("Arvilla_Hegmann", "s3cret");

  await expect(page).not.toHaveURL(/\/signin(?:[?#]|$)/);
});
