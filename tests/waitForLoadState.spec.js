import { test, expect } from '@playwright/test';

test('Working with waitForLoadState', async ({ page }) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByText("New user? Signup").click()

    await page.waitForLoadState("networkidle")

    const checkboxCount = await page.locator("//input[@type='checkbox']").count()

    expect(checkboxCount).toBe(7)



})