import { Page, test } from "@playwright/test";
import { getText, type, typeText } from "../Reusable_Action";   
import { getTextByIndex } from "../Reusable_Action";    
import {bingReusable} from "../Day4_120825/bing_search_reusable.spec"ts;

let page: Page;

test.beforeAll(async ({ browser }) =>{
    page = await browser.newPage ()    //create new page instance
});

test('search for playwright on bing', async ({ }) => {
    //navigte to bing homepage
    await page.goto('https://www.bing.com')
    await page.waitForTimeout(3000)//wait for a few seconds
    await type(page, '[name="q"]', 'Honda', 'Search Box')
    await page.keyboard.press('Enter') //hitting enter key after typing

});//end of test


test('capture search number for Honda', async ({}) => {
    let searchresults = await getText(page, '[class="sb_count"]', 'search results Text')
    console.log("Search Results: ", searchresults);
    let searchNumber = searchresults.split(" ")[0]; //splitting the text to get the number only
    console.log('Search Number for Honda: ', searchNumber);

});