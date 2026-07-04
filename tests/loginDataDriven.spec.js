const { test, expect } = require('@playwright/test');
const testdata = JSON.parse(JSON.stringify(require("../testLogin.json")));

// test.use({ viewport: { width: 1500, height: 1000 } })

test.describe('Data Driven Login Tests', function () {

    for (const loginData of testdata) {
        test.describe(`Login with users ${loginData.id}`, function () {
            test(' Login To Application', async ({ page }) => {
                await page.goto('https://freelance-learn-automation.vercel.app/login');
                // Login
                await page.getByPlaceholder('Enter Email').fill(loginData.username, { delay: 200 });
                await page.locator("input[name='password1']").fill(loginData.password, { delay: 200 });
                await page.waitForTimeout(2000);
            })})
}
});