import {test, expect, Locator} from '@playwright/test';
const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

/*
These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

test('Built-in Locator Example - getByAltText', async ({page}) => {

    await page.goto(url);

    // page.getByAltText() to locate an element, usually image, by its text alternative.
    // Use this locator when your element supports alt text attribute.
    const logoElement:Locator = page.getByAltText('company-branding');

    // await is used when return type is Promise. It is used to wait for the promise to resolve and return the actual value.
    // await is used when we are taking action on locator element. It is used to wait for the action to be performed on the element and return the actual value.

    await expect(logoElement).toBeVisible();
})

test('Built-in Locator Example - getByText', async ({page}) => {

    await page.goto(url);

    // page.getByText() to locate by text content.
    // Use this locator when you want to locate an element based on its text content. 
    // It is useful when the element does not have any unique attributes or when you want to locate an element based on its visible text.    
    const usernameText:Locator = page.getByText('Username : Admin');
    await expect(usernameText).toBeVisible();
    const passwordText:Locator = page.getByText('Password : admin123');
    await expect(passwordText).toBeVisible();
})

test('Built-in Locator Example - getByLabel', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/');  

    // Locate the form control by label's text
    // When to use: Ideal for form fields where the label is associated with the input element. It provides a more user-centric way to locate form controls, especially when the form is well-structured with proper labels.
    
    await page.getByRole('link', {name: 'Register'}).click();
    
    await page.getByLabel('First name:').fill('Rajesh');
    await page.getByLabel('Last name:').fill('Ramtere');
    await page.getByLabel('Email:').fill('rajesh.ramtere@gmail.com');
})

test('Built-in Locator Example - getByRole', async ({page}) => {

    // getByRole() - Locating an element by role - Role is not an attribute
    // Role locators includes buttons, checkboxes, radio buttons, links, headings, etc. It is based on the ARIA roles and HTML semantics. It is the most recommended locator as it is more resilient to changes in the UI and provides better accessibility support.
    // When to use: It is the most recommended locator as it is more resilient to changes in the UI and provides better accessibility support. It is ideal for locating interactive elements like buttons, links, form controls, and headings.

    // <a href="..."> link
    // <area href="..."> link
    // <button> button
    // <form> (with name attribute) form
    // <h1>, <h2>, <h3>, <h4>, <h5>, <h6> heading
    // <header> banner (context-specific)
    // <img> (with alt) img
    // <input type="button"> button
    // <input type="checkbox"> checkbox
    // <input type="radio"> radio
    // <input type="range"> slider
    // <input type="reset"> button
    // <input type="search"> searchbox
    // <input type="submit"> button
    // <input type="text"> textbox
    // <li> listitem
    // <ol>, <ul> list
    // <option> option
    // <select> listbox (or combobox, depends on usage)
    // <table> table
    // <tbody>, <thead>, <tfoot> rowgroup
    // <td> cell
    // <th> columnheader or rowheader
    // <textarea> textbox
    // <tr> row

    await page.goto(url);

    await page.getByRole('textbox', {name: 'username'}).fill('Admin');
    await page.getByRole('textbox', {name: 'password'}).fill('admin123');
    await page.getByRole('button', {name : 'Login'}).click();

    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();

})

test.only('Built-in Locator Example - getByPlaceholder', async ({page}) => {

    // getByPlaceholder() - Locating an input element by its placeholder text
    // When to use: Use this locator when you want to locate an input element based on its placeholder text. It is useful when the input field has a unique placeholder that can be used to identify it.

    await page.goto(url);

    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name : 'Login'}).click();

    await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
})