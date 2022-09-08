import inputEditorStore, {OpenedPage} from "../../../stores/input-editor-store";
import {StringContainer} from "../../../stores/generator-store";
import './Page.scss'
import {observer} from "mobx-react";
import {Input} from "./Input/Input";

export const Page = observer((props: {
    page: OpenedPage,
    stringContainer: StringContainer
}) => {
    function onSubmit(value: string){
        props.stringContainer.add(value);
        inputEditorStore.closeAddInput();
    }


    return <div className="input-editor-page">
        <ul className="list">
            {props.stringContainer.strings.map(str => <li className="list-element">{str}</li>)}
        </ul>
        {inputEditorStore.isAddInputOpened ? <Input submit={onSubmit} className="input-editor-page-add-input"/> : null}
        <button className="input-editor-page-add-button" onClick={() => inputEditorStore.toggleAddInput()}>Добавить</button>
    </div>
});