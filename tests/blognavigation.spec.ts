import { test, expect } from '@playwright/test';

test('blog navigation', async ({ page }) => {
  await page.goto('https://ilarionhalushka.github.io/');
  await page.getByRole('button', { name: 'About me' }).click();
  await page.getByRole('textbox', { name: 'search...' }).click();
  await page.getByRole('textbox', { name: 'search...' }).fill('articles');
  await page.getByRole('textbox', { name: 'search...' }).press('Enter');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Search' }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: '<- Back to the list of' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'How To Choose Between' }).first().click();
  const page2 = await page2Promise;
  await page2.getByRole('button', { name: '<- Back to the list of' }).click();
  await page2.locator('iframe[title="Software Testing Course by Ilarion Halushka"]').contentFrame().getByRole('button', { name: 'Play' }).click();
  await page2.locator('iframe[title="Software Testing Course by Ilarion Halushka"]').contentFrame().getByRole('button', { name: 'Pause keyboard shortcut k' }).click();
  await page2.getByRole('link', { name: 'HR Interview Questions' }).click();
  await page2.getByRole('button', { name: 'Home' }).click();
});