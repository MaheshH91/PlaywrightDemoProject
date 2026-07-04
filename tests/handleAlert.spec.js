import { test, expect } from '@playwright/test';

test('Handle Simple Alert Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    await page.locator("//button[text()='Click for JS Alert']").click()

    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain("alert")
        expect(dialog.message()).toContain("I am a JS Alert")
        await dialog.accept()
        // expect(dialog.type()).toContain("alert")
    })

})

test('Handle Confirm Alert Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Attach dialog handler before triggering the alert
    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toContain('I am a JS Confirm');
        /*  await dialog.dismiss(); */
        dialog.accept()
    });

    await page.locator("//button[text()='Click for JS Confirm']").click();

    // Verify result text after dismiss
    //   await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});
test('Handle Prompt Alert Test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // Attach dialog handler before triggering the alert
    page.on('dialog', async (dialogWindow) => {
        expect(dialogWindow.type()).toBe('prompt');
        expect(dialogWindow.message()).toContain('I am a JS prompt');
        /*  await dialogWindow.dismiss(); */
        dialogWindow.accept("Mahesh")
    });

    await page.locator("//button[text()='Click for JS Prompt']").click();

    // Verify result text after dismiss
    //   await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
    await expect(page.locator('#result')).toHaveText('You entered: Mahesh');
});
