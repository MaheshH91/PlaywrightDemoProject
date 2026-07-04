import { test, expect } from '@playwright/test';

test('Working with multiple tabs/windows', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://freelance-learn-automation.vercel.app/login');

  // Wait for the new tab to open
  const [newPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator("(//a[contains(@href,'facebook')])[1]").click()
  ]);

  // Interact with the new tab
  await newPage.locator("(//input[@name='email'])[2]").type("test@example.com");

  await newPage.close();

  await page.locator("#email1").fill("admin@email.com")

});
