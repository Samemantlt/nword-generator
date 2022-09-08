import './TopMenu.scss'
import React, {useRef} from "react";
import {MainPageItem} from "./Items/MainPageItem/MainPageItem";
import {ResultPageItem} from "./Items/ResultPageItem/ResultPageItem";

export function TopMenu() {
    return <div className="top-menu">
        <MainPageItem/>
        <ResultPageItem/>
    </div>
}