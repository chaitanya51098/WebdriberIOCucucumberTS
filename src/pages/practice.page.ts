import { click, selectRadioButton, selectVisibleText, setText } from "../utils/commands";
import Page from "./page";
class Chai {
    private get mainpageheader() { return $('//div[@class="wsb-htmlsnippet-element"]//h1'); }
    private get firstName() { return $('//input[@name="firstname"]'); }
    private get lastName() { return $('//input[@name="lastname"]'); }
    private get gender() { return $$('//input[@name="sex"]'); }
    private get years() { return $$('//input[@name="exp"]'); }
    private get continents() { return $('//select[@id="continents"]'); }
    private get commands() { return $('//select[@id="selenium_commands"]'); }
    private get date() { return $('//input[@id="datepicker"]'); }
    private get checkbox() { return $$('//input[@type="checkbox"]'); }
    private get submit() { return $('//button[@id="submit"]'); }
    private get finalpageheader() { return $('//div[@class="txt "]//h1'); }

    getHeader() {
        return this.mainpageheader;
    }

    async enterfirstname(fname: string) {
        await setText(this.firstName, fname);
    }

    async enterlastname(lname: string) {
        await setText(this.lastName, lname);
    }

    async selectGender(sex: string) {
        await selectRadioButton(this.gender, sex);
    }

    async selectYears(years: string) {
        await selectRadioButton(this.years, years);
    }

    async enterDate(date: string) {
        await (await this.date).setValue(date);
    }

    async selectfavouritechaipage(favouritechaipage: string) {
        await selectRadioButton(this.checkbox, favouritechaipage);
    }

    async selectexcitingelement(excitingelement: string) {
        await selectRadioButton(this.checkbox, excitingelement);
    }

    async selectContinent(continent: string) {
        await selectVisibleText(this.continents, continent);
    }

    async selectCommand(othercommand: string) {
        await selectVisibleText(this.commands, othercommand);
    }

    async clickSubmit() {
        await click(this.submit);
    }

    async getFinalHeader() {
        return this.finalpageheader;
    }
}
export default new Chai();