import { Given, When, Then } from '@cucumber/cucumber';
import { WatchDirectoryFlags } from 'typescript';

Given(/^I am on (.+)$/, async function (appurl: string) {
    await browser.maximizeWindow();
    await browser.url(appurl);
});

When(/^I click on start button$/, async function () {
    const startbtn = await $('#start button');
    await startbtn.waitForClickable({ timeout: 4000 });
    await startbtn.click();
});

Then(/^I validate loading icon and text$/, async function () {

    const loadingicon = await $('#loading');
    const msg = await $('#finish h4');
    //await loadingicon.waitForDisplayed({ timeout: 10000, reverse: true });
    // {
    //     In waitfordisplayed and other we wait for elements/locators,,in waituntil we will make the browser
    //     waituntil its condition met & checked,if not met after particular time,then error is displayed 
    // }
    await browser.waitUntil(async()=> await msg.getText()==="Hello World!",
    {timeout:10000,timeoutMsg:"msg not displayed after 10 sec"});
    await expect(msg).toBeDisplayed();

});