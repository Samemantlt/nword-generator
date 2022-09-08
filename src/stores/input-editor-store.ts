import {makeAutoObservable} from "mobx";

enum OpenedPage {
    FirstNames,
    SureNames,
    Patronymics
}

class InputEditorStore {
    isInputEditorOpened = false
    isAddInputOpened = false
    openedPage: OpenedPage = OpenedPage.FirstNames;


    constructor() {
        makeAutoObservable(this);
    }


    openInputEditor() {
        this.isInputEditorOpened = true;
    }

    closeInputEditor() {
        this.isInputEditorOpened = false;
    }

    toggleAddInput() {
        this.isAddInputOpened = !this.isAddInputOpened;
    }

    closeAddInput() {
        this.isAddInputOpened = false;
    }


    openPage(page: OpenedPage) {
        this.openedPage = page;
        console.log(page);
    }
}

export {OpenedPage};
export default new InputEditorStore();