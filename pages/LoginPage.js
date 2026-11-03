const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;
        // Fixed: Added closing quote and bracket
        this.header = page.locator("//h1[text()='Sign In']");
        this.username = page.locator("#email1");
        this.password = page.locator("//input[@placeholder='Enter Password']");
        this.loginButton = page.locator("//button[text()='Sign in']");
    }

    async loginToApplication(username, password) {
        await this.username.fill(username);
        await this.password.fill(password);

        // Wait for network/navigation so tests don't assert before the dashboard loads
        await Promise.all([
            this.page.waitForLoadState('networkidle').catch(() => { }),
            this.loginButton.click()
        ]);
    }

    async verifySignIn() {
        await expect(this.header).toBeVisible();
    }
}

module.exports = LoginPage;
