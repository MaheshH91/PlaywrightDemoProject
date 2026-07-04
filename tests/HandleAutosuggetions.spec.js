import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

test('Autosuggestion Test - Using Keyboard', async ({ page }) => {
    await page.goto('https://www.google.com/', { waitUntil: 'domcontentloaded' });

    const searchBox = page.locator('textarea[name="q"], input[name="q"]');
    await searchBox.click();
    await searchBox.fill('Mukesh Ambani');

    const suggestion = page.locator('li[role="presentation"] div[role="option"]:visible').first();
    await expect(suggestion).toBeVisible({ timeout: 15000 });

    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');
});

test('Autosuggestion Test - using loop', async ({ page }) => {
    await page.goto('https://www.google.com/', { waitUntil: 'domcontentloaded' });

    const searchBox = page.locator('textarea[name="q"], input[name="q"]');
    await searchBox.click();
    await searchBox.fill('Mukesh Otwani');

    const suggestions = page.locator('li[role="presentation"] div[role="option"]:visible');
    await expect(suggestions.first()).toBeVisible({ timeout: 15000 });

    const count = await suggestions.count();
    for (let i = 0; i < count; i++) {
        const text = await suggestions.nth(i).innerText();
        if (text.toLowerCase().includes('youtube')) {
            await suggestions.nth(i).click();
            break;
        }
    }
});

test('Verify Application Title Using Loop', async ({ page }) => {
    await page.goto('https://www.google.com/', { waitUntil: 'domcontentloaded' });

    const searchBox = page.locator('textarea[name="q"], input[name="q"]');
    await searchBox.click();
    await searchBox.fill('Mukesh otwani');

    const suggestionItems = page.locator('li[role="presentation"] div[role="option"]:visible');
    await expect(suggestionItems.first()).toBeVisible({ timeout: 15000 });

    const count = await suggestionItems.count();
    for (let i = 0; i < count; i++) {
        const text = await suggestionItems.nth(i).innerText();
        if (text.toLowerCase().includes('playwright')) {
            await suggestionItems.nth(i).click();
            break;
        }
    }
});
