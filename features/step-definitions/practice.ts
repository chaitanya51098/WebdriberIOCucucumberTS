import { Given, When, Then } from '@cucumber/cucumber'
import chaipage from '../pageobjects/practice.page'


Given(/^I load the url \"([^\"]*)\"$/, async function (url: string) {
    await browser.url(url);
    await browser.maximizeWindow();

});

Then(/^I validate (.+) on main page.$/, async function (header: string) {
    await expect(chaipage.getHeader()).toHaveTextContaining(header);
});

When(/^I give (.+) and (.+) in the form.$/, async function (firstname: string, lastname: string) {

    await chaipage.enterfirstname(firstname);
    await chaipage.enterlastname(lastname);

});

Then(/^I click on submit and validate (.+) on new page.$/, async function (headertext: string) {
    await chaipage.clickSubmit();
    await expect(await chaipage.getFinalHeader()).toHaveTextContaining(headertext);
});

When(/^I mention (.+),(.+),(.+),(.+)$/, async function (sex: string, years: string, date: string, favouritechaipage: string) {

    await chaipage.selectGender(sex);
    await chaipage.selectYears(years);
    await chaipage.enterDate(date);
    await chaipage.selectfavouritechaipage(favouritechaipage);

});

When(/^I also give (.+),(.+),(.+)$/, async function (excitingelement: string, continent: string, othercommand: string) {

    await chaipage.selectexcitingelement(excitingelement);
    await chaipage.selectContinent(continent);
    await chaipage.selectCommand(othercommand);

});

