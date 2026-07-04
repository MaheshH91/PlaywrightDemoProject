import { test, expect } from '@playwright/test';

test.skip('Handle Frame Test', async ({ page }) => {
  await page.goto('https://docs.oracle.com/javase/8/docs/api/');

  // Use CSS selector for frame
  const frame = page.frameLocator('frame[name="packageListFrame"]');

  // Locate and click link inside the frame
  await frame.locator('a:text("java.applet")').click();

  // Verify navigation happened
  await expect(page).toHaveURL(/javase/);
  await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result
})
test('Handle iframes in playwright & Drag nd Drop', async({page}) =>{
    // Go to URL
    await page.goto('https://jqueryui.com/droppable/')

    // iframe
    const iframeElement = page.frameLocator('.demo-frame')

    // src and dest element
    const dragElement = iframeElement.locator("[id='draggable']");
    const dropElement = iframeElement.locator("[id='droppable']");

    // drag and drop element
    await dragElement.dragTo(dropElement);

    await page.waitForTimeout(5000);

})