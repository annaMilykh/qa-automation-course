import { test as base } from "@playwright/test";
import { PageManager } from "../managers/PageManager";

type AppFixtures = {
  pages: PageManager;
};

export const test = base.extend<AppFixtures>({
  pages: async ({ page }, use) => {
    const pages = new PageManager(page);

    await use(pages);
  },
});

export { expect } from "@playwright/test";
