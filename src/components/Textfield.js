import './Login.scss'
import {useEffect} from 'react'
import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

export default function Textfield({Text, text_id, onChange})
{
    useEffect(() => {
        var text = document.querySelector("." + text_id);
        if (text)
            text = new MDCTextField(text);
        console.log(document)
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