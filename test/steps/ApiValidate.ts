import { Given, When, Then } from '@cucumber/cucumber'
import { BASE_URI } from 'src/config/APIconfig';
import userPage from 'src/pages/ApiUsers'
import supertest from 'supertest';
import { APICalls } from 'src/enums/ApiCalls';

let request = supertest(BASE_URI);
let api_response: supertest.Response;

const payloaddata = {
    "name": "abcd",
    "job": "abcderf"
}

Given(/^I am on page (.+)$/, async function (url: string) {
    await userPage.openUrl(url);
});

When(/^I do (.+) user search in rest test page.$/, async function (endpoint: string) {
    await userPage.chooseApiCall(APICalls.GET);
    await userPage.enterEndPoint(BASE_URI + endpoint);
    await userPage.clickAjaxSubmit();
});

When(/^I make GET (.+) api call.$/, async function (endpoint: string) {
    api_response = await request.get(endpoint);
    //console.log(api_response);
    //api_response_body = await api_response.body;
    //console.log(api_response_body);
    //api_statuscode = await api_response.statusCode;
    //console.log(api_statuscode);

});

Then(/^I validate the search result.$/, async function () {
    let ui_statuscode = await userPage.getHttpStatusText();
    let ui_responsebody =await JSON.parse(await userPage.getResponseBodyText());
    //console.log(ui_responsebody);
    // await expect(ui_responsebody).toEqual(api_response_body);
    // await expect(ui_statuscode).toContain(String(api_statuscode));
    // await expect(ui_responsebody.data.email).toEqual(api_response_body.data.email);
    await expect(ui_responsebody).toEqual(api_response.body);
    await expect(ui_statuscode).toContain(String(api_response.statusCode));
    await expect(ui_responsebody.data.email).toEqual(api_response.body.data.email);
});

When(/^I create user with (.+) for user search in rest test page.$/, async function (endpoint) {
    await userPage.chooseApiCall(APICalls.POST);
    await userPage.enterEndPoint(BASE_URI + endpoint);
    await userPage.clickAddParameter();
    await userPage.enterParamNameValue1("name", payloaddata.name);
    await userPage.clickAddParameter();
    await userPage.enterParamNameValue2("job", payloaddata.job);
    await userPage.clickAjaxSubmit();

});

When(/^I make POST call with (.+) using request methods$/, async function (endpoint) {
    api_response=await request.post(endpoint)
                              .send(payloaddata)
                              .set('content-type','application/json');
});

Then(/^I validate the create user search result.$/, async function () {
    let ui_statuscode = await userPage.getHttpStatusText();
    let ui_responsebody = JSON.parse(await userPage.getResponseBodyText());
    await expect(ui_statuscode).toContain(String(api_response.statusCode));
    await expect(ui_responsebody.name).toEqual(api_response.body.name);

});

