import { test, expect} from '@playwright/test'


test('Mobile Emulator', async ({ page }) => {

   
  await page.goto('https://playwright.dev/');

  await page.waitForTimeout(10000);

});

