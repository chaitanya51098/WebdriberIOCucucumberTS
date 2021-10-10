import { ChainablePromiseElement,ChainablePromiseArray,ElementArray} from "webdriverio";

export const selectRadioButton = async (elements: ChainablePromiseArray<ElementArray>, value: string) => {
    for (let i = 0; i < await elements.length; i++) {
        const ele = await elements[i].getAttribute('value');
        if (ele === value) {
            await elements[i].click();
            break;
        }
    }
}


export const setText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    await element.setValue(text);
}

//dropdown values
export const selectVisibleText = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>, text: string) => {
    await element.selectByVisibleText(text);
}

// to click any button
export const click = async (element: ChainablePromiseElement<Promise<WebdriverIO.Element>>) => {
    await element.click();
}