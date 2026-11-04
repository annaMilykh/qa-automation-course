import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./src/specs",

  timeout: 30000,

  expect: {
    timeout: 5000,
  },

  reporter: "html",

  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    testIdAttribute: "data-test",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
