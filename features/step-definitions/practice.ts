import { Given, When, Then } from '@cucumber/cucumber'
import chaipage from '../pageobjects/practice.page'


Given(/^I load the url \"([^\"]*)\"$/, async function (url:string) {
    await browser.url(url);
    await browser.maximizeWindow();

});

Then(/^I validate (.+) on main page.$/, async function (header:string) {
    await expect(chaipage.mainpageheader).toHaveTextContaining(header);
});

When(/^I give (.+) and (.+) in the form.$/, async function (firstname: string, lastname: string) {

    await chaipage.enterfirstandlastname(firstname, lastname);

});


Then(/^I click on submit and validate (.+) on new page.$/, async function (headertext: string) {
    await (await chaipage.submit).click();
    await expect(await chaipage.finalpageheader).toHaveTextContaining(headertext);
});

When(/^I mention (.+),(.+),(.+),(.+)$/, async function (sex: string, years: string, date: string, favouritechaipage: string) {

    await chaipage.selectradiobuttn(await chaipage.gender, sex);
    await chaipage.selectradiobuttn(await chaipage.years, years);
    await (await chaipage.date).setValue(date);
    await chaipage.selectradiobuttn(await chaipage.checkbox, favouritechaipage);

});

When(/^I also give (.+),(.+),(.+)$/, async function (excitingelement: string, continent: string, othercommand: string) {

    await chaipage.selectradiobuttn(await chaipage.checkbox, excitingelement);
    await (await chaipage.continents).selectByVisibleText(continent);
    await (await chaipage.commands).selectByVisibleText(othercommand);

});

