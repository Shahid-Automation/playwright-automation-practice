const { test, expect } = require('@playwright/test');

test('Home page', async ({ page }) => {
  await page.goto('https://test.leap365.com.au/');
  await expect(page).toHaveTitle('Sign In');
})