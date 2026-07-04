import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://in.search.yahoo.com/?fr2=inr');
  await page.getByRole('combobox', { name: 'Search query' }).fill('Mukesh Ambani');
  await page.getByRole('combobox', { name: 'Search query' }).press('Enter');
});