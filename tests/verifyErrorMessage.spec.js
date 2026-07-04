import { test, expect } from '@playwright/test';

test("Verify Error Message", async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const size = page.viewportSize();
console.log("Width:", size.width, "Height:", size.height);

  // Login with wrong password
  await page.getByPlaceholder('Username').fill('Admin');
  await page.locator("input[name='password']").fill('adminsdfsd');
  await page.locator("button[type='submit']").click();

  // Capture error message
  const errorMessage = await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent();
  console.log("Error message is: " + errorMessage);

  // Assertions
  expect(errorMessage.includes("Invalid")).toBeTruthy();
  // expect(errorMessage.includes("Error")).toBeTruthy();

  // Correct way to check exact match
  expect (errorMessage === 'Invalid credentials').toBeTruthy();

});
