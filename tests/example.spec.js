// @ts-check
import { test, expect } from "@chromatic-com/playwright";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/"); //jah
});
