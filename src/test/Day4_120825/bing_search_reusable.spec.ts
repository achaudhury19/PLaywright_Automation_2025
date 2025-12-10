import { Page, test } from "@playwright/test";
import { getText, type, typeText } from "../Reusable_Action";   

let page: Page;

test.beforeAll(async ({ browser }) =>{
    page = await browser.newPage ()    //create new page instance
});

test('search for playwright on bing', async ({page}) => {
    await page.goto('https://www.bing.com')
    await page.waitForTimeout(3000)//wait for a few seconds
    await type(page, '[name="q"]', 'Playwright', 'Search Box')
    await page.keyboard.press('Enter') //hitting enter key after typing

});

test('capture search number for playwright', async ({}) => {
let searchResults = await getText(page, '[class="sb_count"]', 'Search Results Text')
console.log("Search Results: ", searchResults);
let searchNumber = searchResults.split(" ")[1]; //splitting the text to get the number only
console.log('Search Number for Playwright: ', searchNumber);

});