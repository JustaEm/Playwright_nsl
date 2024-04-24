const {test, expect} = require('@playwright/test');

test('My first test', async ({ page }) => {

    await page.goto('https://google.com');
    // Wait until the page is fully loaded
    await expect(page).toHaveTitle('Google');

});
