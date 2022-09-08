import './Header.scss'
import inputEditorStore, {OpenedPage} from "../../../stores/input-editor-store";
import {observer} from "mobx-react";
import img from './Vector.svg'

export const HeaderMenuItem = (props: {
    children: any,
    page: OpenedPage,
    currentPage: OpenedPage,
    openPage: (page: OpenedPage) => void
}) => {
    function selectPage(openedPage: OpenedPage) {
        props.openPage(openedPage);
    }

    function getClassNameForMenuItem(openedPage: OpenedPage) {
        if (props.currentPage == openedPage)
            return "input-editor-header-menu-item selected";

        return "input-editor-header-menu-item";
    }

    return <div className={getClassNameForMenuItem(props.page)} onClick={() => selectPage(props.page)}>
        {props.children}
    </div>
}


export const Header = observer(({}: any) => {
    let currentPage = inputEditorStore.openedPage;
    let openPage = inputEditorStore.openPage.bind(inputEditorStore);

    return <div className="input-editor-header">
            <div className="input-editor-header-title">Конструктор</div>
            <div className="input-editor-header-close" onClick={() => inputEditorStore.closeInputEditor()}>
                <img src={img}/>
            </div>
            <div className="input-editor-header-menu">
                <HeaderMenuItem currentPage={currentPage}
                                openPage={openPage}
                                page={OpenedPage.FirstNames}>Имена</HeaderMenuItem>

                <HeaderMenuItem currentPage={currentPage}
                                openPage={openPage}
                                page={OpenedPage.SureNames}>Фамилии</HeaderMenuItem>

                <HeaderMenuItem currentPage={currentPage}
                                openPage={openPage}
                                page={OpenedPage.Patronymics}>Отчества</HeaderMenuItem>
            </div>
        </div>
});