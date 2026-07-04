import { test, expect } from '@playwright/test';

test('Select values from dropdown', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/signup');

    await page.locator('#state').selectOption({ label: 'Madhya Pradesh' });

    await page.waitForTimeout(1000);

    await page.locator('#state').selectOption({ value: 'Maharashtra' });

    await page.waitForTimeout(2000);

    await page.locator('#state').selectOption({ index: 4 });

    await page.waitForTimeout(3000);

    /*  const allOptions = await page.locator('#state option').allTextContents();
   
     console.log(allOptions);
   
     await expect(allOptions).toContain('Karnataka'); */

    let state = await page.$("#state");

    let allElements = await state.$$("option")

    let ddStatus = false;

    for (let i = 0; i < allElements.length; i++) {
        let element = allElements[i]

        let elementValue = await element.textContent();
        console.log("value from dropdown using for loop: " + elementValue);
        if (elementValue.includes("Rajasthan")) {
            ddStatus = true;
            break;
        }
    } await expect(ddStatus).toBeTruthy();

    await page.locator('#hobbies').selectOption(['Playing', 'Swimming']);

    await page.waitForTimeout(3000);




});
