//import './Textfield.scss'
import {useEffect} from 'react'
import {MDCTextField} from '@material/textfield';

type TextfieldProps = {
    Text: string,
    text_id: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function Textfield({Text, text_id, onChange} : TextfieldProps) : JSX.Element
{
    useEffect(() => {
        var text: Element = document.querySelector("." + text_id);
        if (text)
            new MDCTextField(text);
    })
    
    return(
            <label className={"mdc-text-field mdc-text-field--filled" + " " + text_id}>
                <span className="mdc-text-field__ripple"></span>
                <input type="text" className="mdc-text-field__input" aria-labelledby="text-label" name="text" onChange = {onChange}/>
                <span className="mdc-floating-label" id="text-label">{Text}</span>
                <span className="mdc-line-ripple"></span>
            </label>
    )
}