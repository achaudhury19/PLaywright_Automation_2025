import { Page, test } from "@playwright/test";


test('Mouse hover to quick tools modue and select track a package on USPS @smoke', async  ({page}) => {
    //navigate to usps
    await page.goto('https://www.usps.com/');
    //mouse hover to quick tools module
    await page.locator('[class="nav-first-element menuitem"]').hover();
    //click on track a package link
    await page.locator('text=Track a Package').click();
    //type a tracking number
    await page.locator('id=tracking-input').fill('27HTW7927HW3');
    await page.waitForTimeout(3000); //wait for few seconds to see the typed number

/*
exapmle of contains using text and non-text

//click on track button using contains with text
await page.locator('button:has-text("Track")').click();
//click on track button using counins id
await page.locator('id=track-submit').click();

*/


});



//end of test