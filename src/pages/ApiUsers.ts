import { click, setText } from "../utils/commands";

class ApiUsers {

    async openUrl(url: string) {
        await browser.url(url);
        await browser.maximizeWindow();
    }
    get enterendpoint() { return $('//input[@id="urlvalue"]'); }
    get ajaxsubmit() { return $('//button[@id="submitajax"]'); }
    get httptext() { return $('//pre[@id="statuspre"]'); }
    get outputtext() { return $('//pre[@id="outputpre"]'); }

    async enterEndPoint(endpoint:string){
        await setText(this.enterendpoint,endpoint);
    }
    async clickAjaxSubmit(){
        await click(this.ajaxsubmit);
    }
    async getHttpStatusText(): Promise<string> {
        (await this.httptext).waitForDisplayed();
        return (await this.httptext).getText();
    }
    async getResponseBodyText(){
        (await this.outputtext).waitForDisplayed();
        return (await this.outputtext).getText();
    }
}
export default new ApiUsers();