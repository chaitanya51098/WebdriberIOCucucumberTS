import { click } from "src/utils/commands";

class demopage{
    get startbtn(){ return $('#start button');}
    get loadingicon(){return $('#loading');}
    get msg(){ return $('#finish h4');}
    // async clickOnStartBtn(){
    // await this.startbtn.waitForClickable({ timeout: 4000 });
    // await click(this.startbtn);
    // }
}
export default new demopage();