import {Link, NavLink} from "react-router-dom";
import React from 'react';
import './MainPageItem.scss'

export function MainPageItem() {
    return <div className="menu-item">
        <NavLink to="/" className={props => props.isActive ? "active" : undefined}>Генератор</NavLink>
    </div>
}