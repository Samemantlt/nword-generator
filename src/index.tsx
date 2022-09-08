import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {MainPage} from "./pages/MainPage/MainPage";
import {TopMenu} from "./components/TopMenu/TopMenu";
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import {MainPageItem} from "./components/TopMenu/Items/MainPageItem/MainPageItem";
import {ResultPageItem} from "./components/TopMenu/Items/ResultPageItem/ResultPageItem";
import {ResultPage} from "./pages/ResultPage/ResultPage";
import {InputEditor} from "./components/InputEditor/InputEditor";
import {observer} from "mobx-react";
import inputEditorStore from "./stores/input-editor-store";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const App = observer(() => {
    return <BrowserRouter>
        <TopMenu/>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/result" element={<ResultPage/>}/>
        </Routes>
        {inputEditorStore.isInputEditorOpened ? <InputEditor/> : null}
    </BrowserRouter>
});

// <React.StrictMode>
root.render(
    <App/>
);