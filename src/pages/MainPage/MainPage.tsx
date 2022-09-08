import React from 'react'
import './MainPage.scss'
import imageSrc from './image.png'
import {OpenGeneratorButton} from "../../components/OpenGeneratorButton/OpenGeneratorButton";


export const MainPage = function (props: any) {
    return <div className="main-page">
        <div style={{"paddingBottom": "63px", "paddingLeft": "30px", "paddingRight": "30px"}} className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id tempor eros augue tortor pellentesque
            egestas ac
            viverra.
        </div>
        <img src={imageSrc} style={{"width": "max-content"}} alt="Car on a mountain"/>
        <div style={{
            "marginTop": "62px",
            "alignContent": "center",
            "display": "flex",
            "justifyContent": "center",
            "paddingBottom": "50px"
        }}>
            <OpenGeneratorButton/>
        </div>
    </div>
}