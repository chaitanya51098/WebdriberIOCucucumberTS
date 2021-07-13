import{Given,Then} from '@cucumber/cucumber'

Given(/^I open browser and load the (.+)$/,async function (homepageurl) {
   await browser.url(homepageurl);
    await browser.maximizeWindow();
  });

Then(/^I should see a header with (.+)$/,async function (headertext) {
    const header=await $('.heading');
    await expect(await header.getText()).toEqual(headertext);
    //await expect(header).toHaveTextContaining(headertext);
  });