const { test } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const HomePage = require('../pages/HomePage');

test('Login to Application using POM', async ({ page }) => {

    await page.goto('https://freelance-learn-automation.vercel.app/login');

    const loginPage = new LoginPage(page);
    await loginPage.loginToApplication('admin@email.com', 'admin123');

    const homePage = new HomePage(page);
    await homePage.verifyManageOption();
    await homePage.logoutFromApplication();
});