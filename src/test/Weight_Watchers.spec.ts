import { test } from "@playwright/test";

test('Weight Watchers location search with 2 zip codes', async ({ page }) => {
 
  const zipCodes = ["10954", "33125"]; //Only 2 iterations

  for (let i = 0; i < zipCodes.length; i++) {
    await page.goto("https://www.weightwatchers.com/us/find-a-workshop");//go to Weight Watcher page
    await page.waitForTimeout(2000);
    //Click on In Person
    await page.click('[class="buttonText-0YATk"]');
    //Enter zip code
    await page.locator('[id="location-search"]').fill(zipCodes[i]);
    await page.click('[id="location-search-cta"]');
    await page.waitForTimeout(3000);
      await page.keyboard.press("PageDown");
    //Capture studio name
    let studioName = await page.locator('[class*="address"]').first().innerText();
    console.log(`Zip: ${zipCodes[i]} | Studio: ${studioName}`);
    await page.waitForTimeout(3000);
    await page.locator('[class*="linkUnderline"]').first().click();
  await page.waitForTimeout(2000);

let hours = await page.locator('[class*="scheduleContainer"]').locator('li, div').allInnerTexts();

console.log(`\nHours of operation for ${studioName}:`);
hours.forEach((h, i) => console.log(`${i + 1}. ${h.trim()}`));


  }
});