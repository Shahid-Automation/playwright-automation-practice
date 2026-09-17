import { test, expect } from '@playwright/test';

test('Creatematter', async ({ page }) => {
  await page.goto('https://login.test.leap365.com.au');
  await page.getByRole('textbox', { name: 'Username / Email' }).fill('sc.autest.superdiary@leaptest.io');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test2406');
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  await page.goto('https://test.leap365.com.au/matters');
  await page.waitForTimeout(10000);
  await page.getByRole('button', { name: 'New Matter' }).click();
  await page.locator('.x-tree-cell > sc-icon > .x-icon > use').first().click();
  await page.waitForTimeout(10000);
  await page.getByRole('textbox', { name: 'Search matter types' }).fill('purchase');
  await page.getByRole('gridcell', { name: 'Purchase', exact: true }).click();
  await page.getByRole('button', { name: 'Matter Details leap-web-' }).click();
  await page.getByRole('button', { name: 'Client Details leap-web-' }).click();
  //await page.locator('sc-card-people-suggestion-input').filter({ hasText: 'Given namesSorry, we could' }).getByRole('textbox').click();
  //await page.locator('sc-card-people-suggestion-input').filter({ hasText: 'Given namesSorry, we could' }).getByRole('textbox').fill('Br');
  //await page.locator('sc-card-people-suggestion-input').filter({ hasText: 'Given namesSorry, we could' }).getByRole('textbox').click();
  await page.locator('sc-card-people-suggestion-input').filter({ hasText: 'Given namesSorry, we could' }).getByRole('textbox').fill('Bruce');
  await page.locator('sc-card-people-suggestion-input').filter({ hasText: 'Given namesSorry, we could' }).getByRole('textbox').click();
  //await page.locator('sc-card-people-suggestion-input').filter({ hasText: 'Given namesSorry, we could' }).getByRole('textbox').press('Tab');
  //await page.locator('sc-card-people-suggestion-input').filter({ hasText: 'Given namesSorry, we could' }).getByRole('textbox').click();
  //await page.locator('sc-card-people-suggestion-input').filter({ hasText: 'Given namesSorry, we could' }).getByRole('textbox').fill('Bruce');
  await page.getByText('BruceUPDT Wayne').click();
  await page.getByRole('button', { name: 'Create' }).click();
  await page.locator('sc-pre-load-orb').click();
});