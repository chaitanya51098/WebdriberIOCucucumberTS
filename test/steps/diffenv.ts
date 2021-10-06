import { Given,Then } from '@cucumber/cucumber';

Given(/^I open the url$/,async function () {
    await browser.url('/');
    await browser.maximizeWindow();
});

Then(/^I validate the title of application$/,async function () {
    const title=await browser.getTitle();
    console.log("Application Title : ",title);
  });