import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import './App.scss'
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';
import Textfield from './components/Textfield';
import { UPDATE_SEARCH_LIST, CHANGE_SEARCH_WORD, DEL_ELEMENT } from './actions';

import {MDCTopAppBar} from '@material/top-app-bar';



const SearchBar = ({dispatch}) => {
    
    return <Textfield Text = "Searchbar" text_id = "searchbar" onChange = {(e) => {
        dispatch({type: CHANGE_SEARCH_WORD, searchWord : e.target.value})
        dispatch({type: UPDATE_SEARCH_LIST})
        console.log(e.target.value)
    }}/>
}


const Contact = ({name, delete_el}) => (
    <li className="mdc-list-item" tabIndex="0">
    <span className="mdc-list-item__ripple"></span>
    <span className="mdc-list-item__text">
      <span className="mdc-list-item__primary-text">{name}</span>
      <span className="mdc-list-item__secondary-text">Secondary text</span>
    </span>
    <button className="mdc-fab mdc-fab" onClick = {delete_el}>
        <div className="mdc-fab__ripple"></div>
        <span className="material-icons mdc-fab__icon">D</span>
    </button>
  </li>
);


const App = ({contacts, id, dispatch}) => {

    useEffect(() => {
        var list = document.querySelector('.mdc-list');
        if (list)
        {
            list = new MDCList(list);
            list = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
        }
        var topAppBarElement = document.querySelector('.mdc-top-app-bar');
        if (topAppBarElement)
            var topAppBar = new MDCTopAppBar(topAppBarElement);
    })

    if (id != -1)
        return (
            <div>
                <header className="mdc-top-app-bar bar">
                    <div className="mdc-top-app-bar__row">
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                        <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Close">close</button>
                        </section>
                        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                        <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button add" aria-label="Share">Add</button>
                        </section>
                    </div>
                </header>
                <SearchBar dispatch = {dispatch} />
                <ul className="mdc-list--two-line--dense contacts">
                    
                    {contacts.map((contact) => <Contact name = {contact.name} key = {contact.id} delete_el = {() => {
                        dispatch({type: DEL_ELEMENT, id : contact.id})
                        dispatch({type: UPDATE_SEARCH_LIST})
                    }}/>)}
                </ul>
            </div>
        )
    else
        return (null);
};

const mapStateToProps = (state) => ({
    contacts: state.ListData.showList,
    id : state.id
  });

export default connect(mapStateToProps)(App);