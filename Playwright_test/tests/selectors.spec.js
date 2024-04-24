import {test, expect} from '@playwright/test';

test('Selectors demo', async ({page})=> {

    await page.goto('https://www.saucedemo.com/')
    //await page.pause(); //--> Opens up the inspector tool

    //Using any object property:
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('Edison');
    await page.locator('[id=user-name]').fill('Joseph');

    /*Using any CSS selector:
    #login-button
    .submit-button*/
    //await page.locator('#login-button').click();

    //Using Xpath:
    await page.locator('//input[@id="login-button"]').click();

    //Using inspector tool for "best" found locator:
    await page.locator('[data-test="login-button"]').click();
});
