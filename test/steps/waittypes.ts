import { Given, When, Then } from '@cucumber/cucumber';
import demopage from 'src/pages/waits'

Given(/^I am on (.+)$/, async function (appurl: string) {
    await browser.maximizeWindow();
    await browser.url(appurl);
});

When(/^I click on start button$/, async function () {
    
    await demopage.startbtn.waitForClickable({ timeout: 4000 });
    await demopage.startbtn.click();
});

Then(/^I validate loading icon and text$/, async function () {

    
    
    //await demopage.loadingicon.waitForDisplayed({ timeout: 10000, reverse: true });
    // {
    //     In waitfordisplayed and other we wait for elements/locators,,in waituntil we will make the browser
    //     waitfor particular time until its condition met & checked,if not met after
    //       particular time,then error is displayed 
    // }
    await browser.waitUntil(async()=> await demopage.msg.getText()==="Hello World!",
    {timeout:10000,timeoutMsg:"msg not displayed after 10 sec"});
    await expect(demopage.msg).toBeDisplayed();

});