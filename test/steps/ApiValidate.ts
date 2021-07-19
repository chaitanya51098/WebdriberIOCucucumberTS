import { Given, When, Then } from '@cucumber/cucumber'
import { BASE_URI } from '../../src/config/APIconfig';
import userPage from '../../src/pages/ApiUsers'
import supertest from 'supertest'

let request=supertest(BASE_URI);
let api_response_body: any;
let api_statuscode: any;
Given(/^I am on page (.+)$/, async function (url: string) {
    await userPage.openUrl(url);
});

When(/^I do (.+) user search in rest test page.$/, async function (endpoint:string) {
    await userPage.enterEndPoint(BASE_URI + endpoint);
    await userPage.clickAjaxSubmit();
});

When(/^I make GET (.+) api call.$/, async function (endpoint:string) {
    let api_response=await request.get(endpoint);
    //console.log(api_response);
    api_response_body=await api_response.body;
    //console.log(api_response_body);
    api_statuscode=await api_response.statusCode;
    //console.log(api_statuscode);
});

Then(/^I validate the search result.$/, async function () {
    let ui_statuscode=await userPage.getHttpStatusText();
    let ui_responsebody=JSON.parse(await userPage.getResponseBodyText());
    //console.log(ui_responsebody);
    await expect(ui_responsebody).toEqual(api_response_body);
    await expect(ui_statuscode).toContain(String(api_statuscode));
    await expect(ui_responsebody.data.email).toEqual(api_response_body.data.email);
        
});
