import {makeAutoObservable} from "mobx";
import exp from "constants";
import {OpenedPage} from "./input-editor-store";


const MAX_ITEMS_TO_SHOW = 5;


class StringContainer {
    strings: Array<string> = []

    constructor() {
        makeAutoObservable(this);
    }

    add(value: string) {
        this.strings.push(value)
    }

    removeAll() {
        this.strings = [];
    }

    get length(): number {
        return this.strings.length;
    }
}

class GeneratorStore {
    firstNames = new StringContainer()
    patronymics = new StringContainer()
    sureNames = new StringContainer()

    result: Array<string> = []


    constructor() {
        makeAutoObservable(this);
    }


    generate() {
        function randomElement<T>(array: Array<T>): T {
            return array[randomInteger(0, array.length - 1)]
        }

        function randomInteger(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        let minLength = Math.min(
            this.firstNames.length,
            this.sureNames.length,
            this.patronymics.length,
            MAX_ITEMS_TO_SHOW
        );
        let output = [];

        for (let i = 0; i < minLength; i++) {
            let fullName = `${randomElement(this.firstNames.strings)} ${randomElement(this.patronymics.strings)} ${randomElement(this.sureNames.strings)}`
            output.push(fullName);
        }
        this.result = output
    }

    getStringContainerForPage(page: OpenedPage) {
        switch (page) {
            case OpenedPage.FirstNames:
                return this.firstNames;
            case OpenedPage.SureNames:
                return this.sureNames;
            case OpenedPage.Patronymics:
                return this.patronymics;
            default:
                throw new Error("Unknown page");
        }
    }
}

export {StringContainer}
export default new GeneratorStore();