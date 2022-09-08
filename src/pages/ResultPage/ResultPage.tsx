import React from 'react'
import './ResultPage.scss'
import store from '../../stores/generator-store'
import {observer} from "mobx-react";


const ResultEmpty = () => {
    return <div className="empty-result-text-container">
        <div className="empty-result-text">
            Не хватает данных
        </div>
    </div>
}

const Result = ({result}: any) => {
    return <div>
        {result.map((p: any) => <div className="result-page-item">{p}</div>)}
    </div>
}

export const ResultPage = observer(({}: any) => {
    return <div className="result-page">
            {store.result.length == 0 ? <ResultEmpty/> : <Result result={store.result}/>}
        </div>
});