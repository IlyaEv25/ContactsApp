import './Button.scss'
import {useEffect} from 'react'
import {MDCRipple} from '@material/ripple';

export default function Button({text, text_id, onClick}) {

    useEffect(() => {
        var fabRipple = document.querySelector('.' + 'text_id');
        if (fabRipple)
        {
            fabRipple = new MDCRipple(fabRipple);
        }
    })


    return (
        <button className={"mdc-fab mdc-fab--extended" + " " + text_id} onClick = {onClick}>
            <div className="mdc-fab__ripple"></div>
            <span className="mdc-fab__label">{text}</span>
        </button>
    )
}