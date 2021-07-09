import { Given,When,Then } from '@cucumber/cucumber'
import chai from '../pageobjects/practice.page'

Given(/^I load the url,validate (.+) on main page.$/,async function (header:string) {

    await browser.url('http://www.practiceselenium.com/practice-form.html');
    await browser.maximizeWindow();
    await expect(chai.mainpageheader).toHaveTextContaining(header);

  });
  
When(/^I give (.+) and (.+) in the form.$/,async function (firstname:string, lastname:string) {
        
        await chai.givefirstandlastname(firstname,lastname);
    
    });
  
Then(/^I click on submit and validate (.+) on new page.$/,async function (headertext:string) {
        await (await chai.submit).click();
        await expect(await chai.finalpageheader).toHaveTextContaining(headertext);
    });
  
When(/^I mention (.+),(.+),(.+),(.+)$/,async function (sex:string, years:string, date:string, favouritechai:string) {
     
    await chai.selectradiobuttn(await chai.gender,sex);
    await chai.selectradiobuttn(await chai.years,years);
    await (await chai.date).setValue(date);
    await chai.selectradiobuttn(await chai.checkbox,favouritechai);
    
    });
  
When(/^I also give (.+),(.+),(.+)$/,async function (excitingelement:string, continent:string, othercommand:string) {
    
    await chai.selectradiobuttn(await chai.checkbox,excitingelement);
    await (await chai.continents).selectByVisibleText(continent);
    await (await chai.commands).selectByVisibleText(othercommand);

    });
  
  