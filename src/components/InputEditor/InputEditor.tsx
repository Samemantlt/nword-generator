import './InputEditor.scss'
import inputEditorStore, {OpenedPage} from "../../stores/input-editor-store";
import generatorStore from "../../stores/generator-store";
import {observer} from "mobx-react";
import {Header} from "./Header/Header";
import {Page} from "./Page/Page";


export const InputEditor = observer(({}: any) => {
    let currentPage = inputEditorStore.openedPage;
    let openPage = inputEditorStore.openPage.bind(inputEditorStore);

    return <div>
        <div className="input-editor-blur"/>
        <div className="input-editor">
            <Header/>
            <Page page={currentPage} stringContainer={generatorStore.getStringContainerForPage(currentPage)}/>
        </div>
    </div>
});