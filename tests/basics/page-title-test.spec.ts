import {test, expect} from 'playwright/test';

test('Verify Page Title', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    console.log('Page Title: ' + await page.title());

    await expect(page).toHaveTitle('OrangeHRM');
})

test('Verify Page URL', async ({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    console.log('Page URL: ' + await page.url());

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})