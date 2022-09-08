import {NavLink} from "react-router-dom";
import React from 'react';
import store from '../../../../stores/generator-store'
import {observer} from "mobx-react";
import img from './restart.svg'
import './ResultPageItem.scss'

export const ResultPageItem = observer(() => {
    return <div className="menu-item">
        <NavLink to="/result" className={props => props.isActive ? "active" : undefined}>
            <span>Результат</span>
            <span className="menu-item-restart" onClick={event => store.generate()}>
                <img src={img}/>
            </span>
        </NavLink>
    </div>
});