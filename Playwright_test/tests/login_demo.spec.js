import { test, expect } from '@playwright/test';

test('Demo login test 1', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');

    /*
    //Using element attribute
    await page.fill('input[placeholder="Enter your username"]', 'Justyna');
    await page.fill('input[placeholder="Enter your password"]', 'test123');

    await page.waitForSelector('text="Sign in"', {timeout: 2500});
    await page.click('text="Sign in"');
    */

    //Using CSS selectors
    await page.fill('#username', 'Justyna');
    await page.fill('#password', 'test123');

    // Click the Sign in button
    await page.waitForSelector('#log-in', { timeout: 2500 });
    await page.click('#log-in');

});


test.only('Demo login 2', async ({ page }) => {

    //Using Inspector / CodeGen tool:
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('.oxd-userdropdown-name').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();

});



