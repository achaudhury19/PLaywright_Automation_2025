import { Page } from "@playwright/test";
//export means its resuable outside this file
//method to click on a unique element
export async function click(page:Page, locator:string, elementName:string){
    console.log("Clicking on "+ elementName);
    await page.locator(locator).click();
}//end of click

//method to click on any element by index
export async function clickByIndex(page:Page, locator:string, index:number, elementName:string) {
    console.log("Clicking on element "+ elementName);
    await page.locator(locator).nth(index).click();
}//end of clickByIndex




//method to type on a unique element
export async function type(page:Page, locator:string, text:string, elementName:string){
    console.log("Typing on "+ elementName);
    let element = page.locator(locator);
    await element.fill('');
    await element.fill(text);//uservalue
}//end of type

//method to type on any element by index
export async function typeTextByIndex(page:Page, locator:string, index:number, text:string, elementName:string){
    console.log("Typing on "+ elementName);
    let element = page.locator(locator).nth(index);
    await element.fill('');
    await element.fill(text);//uservalue
}//end of typeByIndex

//method to get text from any unique element
export async function getText(page:Page, locator:string, elementName:string){
    console.log("Getting text from "+ elementName);
    let results = await page.locator(locator).innerText();
    return results;
}//end of getText

//method to get text from any element by index
export async function getTextByIndex(page:Page, locator:string, index:number, elementName:string){
    console.log("Getting text from element "+ elementName);
    let results = await page.locator(locator).nth(index).innerText();
    return results;
}//end of getTextByIndex    