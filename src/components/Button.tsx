//import './Button.scss'
import {useEffect} from 'react'
import {MDCRipple} from '@material/ripple';

type ButtonProps = {
    text : string,
    text_id: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({text, text_id, onClick}: ButtonProps) : JSX.Element | null {

    useEffect(() => {
        var fabRipple: Element = document.querySelector('.' + text_id);
        if (fabRipple)
        {
            new MDCRipple(fabRipple);
        }
    })


    return (
        <button className={"mdc-fab mdc-fab--extended but" + " " + text_id} onClick = {onClick}>
            <div className="mdc-fab__ripple"></div>
            <span className="mdc-fab__label text">{text}</span>
        </button>
    )
}