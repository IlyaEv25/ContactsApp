import React, {useEffect} from 'react'
import { connect } from "react-redux"
import Button from "../components/Button"
import SearchBar from '../components/SearchBar'; 
import { UPDATE_SEARCH_LIST, CHANGE_SEARCH_WORD, ADD_ENTRY } from '../actions';
import {MDCTopAppBar} from '@material/top-app-bar';

//import './Header.scss'

const Header = ({add, search}) => {

    useEffect(() => {
        var topAppBarElement = document.querySelector('.mdc-top-app-bar');
        if (topAppBarElement)
            var topAppBar = new MDCTopAppBar(topAppBarElement);
    })

    return (
        <div className="mdc-top-app-bar Header">
            <div className="mdc-top-app-bar__row">
                <SearchBar onSearch = {search}/>
                {/* <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                </section> */}
                <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar" style = {{"margin-top": "1.9%"}}>
                    <Button text = "Add" text_id = "addButton" onClick = {add}/>
                </section>
            </div>
        </div>
)}

const dispatchToProps = (dispatch) => ({
    search : (e) => {
        dispatch({type: CHANGE_SEARCH_WORD, searchWord : e.target.value})
        dispatch({type: UPDATE_SEARCH_LIST})
        console.log(e.target.value)
    },
    add: () => dispatch({type: ADD_ENTRY})
})

export default connect(null, dispatchToProps)(Header);