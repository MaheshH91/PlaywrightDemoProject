const { test, expect } = require('@playwright/test');

test("Keyboard events in Playwright", async ({ page }) => {
  await page.goto("https://duckduckgo.com/", { waitUntil: "domcontentloaded" });

  const searchBox = page.locator('#searchbox_input');
  await searchBox.waitFor({ state: 'visible' });
  await searchBox.click();

  // Type text with delay
  await page.keyboard.type("Mukesh Ambani", { delay: 100 });

  // Select all, copy, delete, paste
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  await page.keyboard.press("Backspace");
  await page.keyboard.press("Control+V");

  // Highlight "Ambani" using Shift+ArrowLeft
  await page.keyboard.down("Shift");
  for (let i = 0; i < "Ambani".length; i++) {
    await page.keyboard.press("ArrowLeft");
  }
  await page.keyboard.up("Shift");

  // Submit search
  await searchBox.press("Enter");
});
