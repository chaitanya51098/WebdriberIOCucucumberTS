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

    async givefirstandlastname(fname:string, lname:string) {
        await (await this.firstName).setValue(fname);
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
}
export default new Chai();