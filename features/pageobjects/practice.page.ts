class Chai {
    get mainpageheader() { return $('//div[@class="wsb-htmlsnippet-element"]//h1'); }
    get firstName() { return $('//input[@name="firstname"]'); }
    get lastName() { return $('//input[@name="lastname"]'); }
    get gender() { return $$('//input[@name="sex"]'); }
    get years() { return $$('//input[@name="exp"]'); }
    get continents() { return $('//select[@id="continents"]'); }
    get commands() { return $('//select[@id="selenium_commands"]'); }
    get date() { return $('//input[@id="datepicker"]'); }
    get checkbox() { return $$('//input[@type="checkbox"]'); }
    get submit() { return $('//button[@id="submit"]'); }
    get finalpageheader() { return $('//div[@class="txt "]//h1'); }

    getHeader() {
        return this.mainpageheader;
    }

    async enterfirstname(fname: string) {
        await (await this.firstName).setValue(fname);
    }
    async enterlastname(lname: string) {
        await (await this.lastName).setValue(lname);
    }

    async selectradiobuttn(element: WebdriverIO.ElementArray, value: string) {

        for (let i = 0; i < element.length; i++) {
            const ele = await element[i].getAttribute('value');
            if (ele === value) {
                await element[i].click();
                break;
            }
        }
    }

    async selectGender(sex: string) {
        await this.selectradiobuttn(await this.gender, sex);
    }

    async selectYears(years: string) {
        await this.selectradiobuttn(await this.years, years);
    }

    async enterDate(date: string) {
        await (await this.date).setValue(date);
    }
    async selectfavouritechaipage(favouritechaipage: string) {
        await this.selectradiobuttn(await this.checkbox, favouritechaipage);
    }
    async selectexcitingelement(excitingelement: string) {
        await this.selectradiobuttn(await this.checkbox, excitingelement);
    }
    async selectContinent(continent: string) {
        await (await this.continents).selectByVisibleText(continent);
    }
    async selectCommand(othercommand: string) {
        await (await this.commands).selectByVisibleText(othercommand);
    }
    async clickSubmit() {
        await (await this.submit).click();
    }
    async getFinalHeader(){
        return this.finalpageheader;
    }
}
export default new Chai();