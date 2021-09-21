export const selectRadioButton = async (elements: Promise<WebdriverIO.ElementArray>, value: string) => {
    const element = await elements;
    for (let i = 0; i < element.length; i++) {
        const ele = await element[i].getAttribute('value');
        if (ele === value) {
            await element[i].click();
            break;
        }
    }
}


export const setText = async (element: Promise<WebdriverIO.Element>, text: string) => {
    await (await element).setValue(text);
}

//dropdown values
export const selectVisibleText = async (element: Promise<WebdriverIO.Element>, text: string) => {
    await (await element).selectByVisibleText(text);
}

// to click any button
export const click = async (element: Promise<WebdriverIO.Element>) => {
    await (await element).click();
}