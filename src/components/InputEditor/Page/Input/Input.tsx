import {CSSProperties, useState} from "react";
import './Input.scss'
import cross from './Cross.svg'

export const Input = (props:{
    submit: (value: string) => void,
    className?: string | undefined
}) => {
    let [value, setValue] = useState<string>("");

    return <div className={props.className ?? "default-add-input"}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
        <div className="submit-button" onClick={() => props.submit(value)}>
            <div>
                <img src={cross}/>
            </div>
        </div>
    </div>
}