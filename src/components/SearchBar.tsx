//import './SearchBar.scss'
import {useEffect} from 'react'
import {MDCTextField} from '@material/textfield';

type SearchProps = {
    onSearch: React.ChangeEventHandler<HTMLInputElement>

}

export default function SearchBar({onSearch} : SearchProps) : JSX.Element
{
    useEffect(() => {
        var text: Element = document.querySelector(".searchbar");
        if (text)
            new MDCTextField(text);
        console.log(document)
    })
    
    return(
            <label className="mdc-text-field mdc-text-field--outlined searchbar">
                <span className="mdc-notched-outline">
                    <span className="mdc-notched-outline__leading"></span>
                    <span className="mdc-notched-outline__notch">
                    <span className="mdc-floating-label" id="my-label-id">Search</span>
                    </span>
                    <span className="mdc-notched-outline__trailing"></span>
                </span>
                <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" onChange={onSearch}></input>
            </label>
    )
}