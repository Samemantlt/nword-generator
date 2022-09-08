import './OpenGeneratorButton.scss'
import inputEditorStore from "../../stores/input-editor-store";


export function OpenGeneratorButton({style}: any){
    return <button className="generator-button" style={style} onClick={() => inputEditorStore.openInputEditor()}>
        Открыть генератор
    </button>
}