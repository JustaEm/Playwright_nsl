import { test, expect } from '@playwright/test';

test('Assertions test', async ({ page }) => {

    await page.goto('https://kitchen.applitools.com/')

    //Check element Present/Not present:
    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    await page.$('text=The Kitchen');
    
    //Check element Visible/Hidden
    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();

    //Check element Text matches value or not
    await expect (page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');

    //Check Url of the page
    await expect(page).toHaveURL(/kitchen.applitools.com/);

    //Check Title of the page
    await expect(page).toHaveTitle(/.*Kitchen/);

    //Check Page matches screenshot Visual Validation
    await expect(page).toHaveScreenshot();


});


