const { expect } = require('@playwright/test');

class HomePage {
    constructor(page) {
        this.page = page;
        this.manageOption = page.locator("//span[text()='Manage']");
        this.menu = page.locator("//img[@alt='menu']");
        this.logoutOption = page.locator("//button[text()='Sign out']");
    }

    async verifyManageOption() {
        // Explicit 10s timeout to survive slow remote server responses
        await expect(this.manageOption).toBeVisible({ timeout: 10000 });
    }

    async logoutFromApplication() {
        await this.menu.click();
        await expect(this.logoutOption).toBeVisible({ timeout: 5000 });
        await this.logoutOption.click();
    }
}

module.exports = HomePage;
