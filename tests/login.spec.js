const { test, expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")));

// test.use({ viewport: { width: 1500, height: 1000 } })

test('Valid Login and Logout', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // Login
    await page.getByPlaceholder('Username').fill('Admin', { delay: 200 });
    await page.locator("input[name='password']").fill('admin123', { delay: 200 })
    await page.locator("button[type='submit']").click();

    // Verify Dashboard
    await expect(page).toHaveURL(/dashboard/);

    // Open profile menu
    await page.getByAltText('profile picture').first().click();

    // Click Logout
    await page.getByText('Logout').click();

    // Verify Login Page
    await expect(page).toHaveURL(/login1/);
    await expect(page.getByPlaceholder('Username')).toBeVisible();
});

test('SignUp To Application', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    await page.getByPlaceholder('Name').type(testdata.name, { delay: 200 });

    await page.locator("//input[@id='email']").fill(testdata.username, { delay: 200 });

    await page.locator("//input[@id='password']").fill(testdata.password, { delay: 200 });

    // Handle interests checkboxes
    for (const interest of testdata.interest) {
        await page.getByLabel(interest, { exact: true }).check();
    }
    // await page.locator("//button[@id='login1']").click();

    await page.pause();

})