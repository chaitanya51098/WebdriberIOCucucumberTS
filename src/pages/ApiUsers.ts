import { APICalls } from "src/enums/ApiCalls";
import { click, selectVisibleText, setText } from "src/utils/commands";

class ApiUsers {

    async openUrl(url: string) {
        await browser.url(url);
        await browser.maximizeWindow();
    }
    get enterendpoint() { return $('//input[@id="urlvalue"]'); }
    get ajaxsubmit() { return $('//button[@id="submitajax"]'); }
    get httptext() { return $('//pre[@id="statuspre"]'); }
    get outputtext() { return $('//pre[@id="outputpre"]'); }
    get httpmethod() { return $("//select[@id='httpmethod']"); }
    get addparameter() { return $('//button[@id="addprambutton"]'); }
    get paramname1() { return $('//div[@style="display: block;"]//input[@class="input-medium fakeinputname"]'); }
    get paramvalue1() { return $("//div[@id='allparameters']//input[@class='input-xlarge realinputvalue']"); }
    get paramname2() { return $("(//div[@id='allparameters']//input[@class='input-medium fakeinputname'])[2]"); }
    get paramvalue2() { return $("(//div[@id='allparameters']//input[@class='input-xlarge realinputvalue'])[2]"); }
    async enterEndPoint(endpoint: string) {
        await setText(this.enterendpoint, endpoint);
    }
    async clickAjaxSubmit() {
        await click(this.ajaxsubmit);
    }
    async getHttpStatusText(): Promise<string> {
        await this.httptext.waitForDisplayed();
        return this.httptext.getText();
    }
    async getResponseBodyText() {
        (await this.outputtext).waitForDisplayed();
        return this.outputtext.getText();
    }
    async chooseApiCall(apicall: APICalls) {
        await selectVisibleText(this.httpmethod, apicall);
    }
    async clickAddParameter() {
        await click(this.addparameter);
    }
    async enterParamNameValue1(name:string,value:string) {
        await setText(this.paramname1,name);
        await setText(this.paramvalue1,value);

    }
    async enterParamNameValue2(name:string,value:string) {
        await this.paramname2.waitForDisplayed();
        await setText(this.paramname2,name);
        await this.paramvalue2.waitForDisplayed();
        await setText(this.paramvalue2,value);
    }


}
export default new ApiUsers();