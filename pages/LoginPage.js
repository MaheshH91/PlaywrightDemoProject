const { test } = require('@playwright/test');
class LoginPage {

    constructor(page) {
        this.page = page;
        this.header = "//h1[text()='Sign In";
        this.username = page.locator("#email1");
        this.password = page.locator("//input[@placeholder='Enter Password']");
        this.loginButton = page.locator("//button[text()='Sign in']");
    }

    async loginToApplication(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async verifySignIn(){
        await expect(this.page.locator(this.header)).toBeVisible();
    }
}

module.exports = LoginPage;