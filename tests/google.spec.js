const { test, expect } = require('@playwright/test');

test("Verify Application Title", async ({ page }) => {
    await page.goto("http://google.com/");   // await navigation

    // Print the current URL
    const urlText = await page.url();
    console.log("Current URL:", urlText);

    const title = await page.title()
    console.log(title)
    // Verify the page title
    await expect(page).toHaveTitle(/Google/);

    await page.locator('textarea[name="q"]').fill('Playwright');

    await page.keyboard.press('Enter');

});
