const { test, expect } = require('@playwright/test');

test("File Upload",async function({page}) {

await page.goto("https://the-internet.herokuapp.com/upload")

await page.locator("#file-upload").setInputFiles("./upload/screenshot.png")

await page.getByRole("button", {name:"Upload"}).click()

expect(await page.locator("//h3")).toHaveText("File Uploaded!")

await expect(page.locator("#uploaded-files")).toBeVisible()


})