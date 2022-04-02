import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import './App.scss'
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';
import Textfield from './components/Textfield';
import Button from './components/Button';
import { UPDATE_SEARCH_LIST, CHANGE_SEARCH_WORD, DEL_ELEMENT, ADD_ENTRY, ADD_ELEMENT } from './actions';

import {MDCTopAppBar} from '@material/top-app-bar';

const Menu = ({on}) => {
    if (on)
        return (
            <div className="mdc-menu mdc-menu-surface">
                <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical" tabIndex="-1">
                    <li className="mdc-list-item" role="menuitem">
                        <span className="mdc-list-item__ripple"></span>
                        <span className="mdc-list-item__text">A Menu Item</span>
                    </li>
                    <li className="mdc-list-item" role="menuitem">
                        <span className="mdc-list-item__ripple"></span>
                        <span className="mdc-list-item__text">Another Menu Item</span>
                    </li>
                </ul>
            </div>
        )
    else
        return null;
}

const Header = ({onClick, onSearch}) => (
        <div className="mdc-top-app-bar Header">
            <div className="mdc-top-app-bar__row">
                <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <SearchBar onSearch = {onSearch} />
                </section>
                <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
                {/* <button className="material-icons mdc-top-app-bar__action-item mdc-icon-button add" aria-label="Share" onClick = {onClick}>Add</button> */}
                <Button text = "Add" text_id = "addButton" onClick = {onClick}/>
                {/* <Menu on = {menuOn}/> */}
                </section>
            </div>
        </div>
    )


const SearchBar = ({onSearch}) => {
    
    return <Textfield Text = "Searchbar" text_id = "searchbar" onChange = {onSearch}/>
}

const NewEntry = ({addEntry, add}) => {
    if (addEntry)
    {
        return (
        <li className="mdc-list-item newentry" tabIndex="0">
            <form onSubmit = {add}>
                <span className="mdc-list-item__ripple"></span>
                <span className="mdc-list-item__primary-text"><Textfield Text = "ContactName" text_id ="contact_n"/></span>
                <span className="mdc-list-item__secondary-text"><Textfield Text = "ContactData" text_id ="contact_d"/></span>
                {/* <Button text = "D" text_id = "dButton" onClick = {delete_el}/> */}
                <Button text = "Add" text_id = "addButton"/>
            </form>
        </li>
        
        )
    }
    else
        return null;
}


const Contact = ({contact, delete_el}) => (
    <li className="mdc-list-item" tabIndex="0">
    <span className="mdc-list-item__ripple"></span>
    <span className="mdc-list-item__text">
      <span className="mdc-list-item__primary-text">{contact.name}</span>
      <span className="mdc-list-item__secondary-text"> {contact.data}</span>
    </span>
    <Button text = "D" text_id = "dButton" onClick = {delete_el}/>
  </li>
);


const App = ({contacts, id, addEntry, dispatch, search, add}) => {

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

    console.log(addEntry);

    if (id != -1)
        return (
            <div className = "app">
                <Header onClick = {() => dispatch({type: ADD_ENTRY})} onSearch = {search}/>
                <div className = "list">
                    <ul className="mdc-list--two-line--dense">
                        <NewEntry addEntry = {addEntry} add = {add}/>
                        {contacts.map((contact) => <Contact contact = {contact} key = {contact.id} delete_el = {() => {
                            dispatch({type: DEL_ELEMENT, id : contact.id})
                            dispatch({type: UPDATE_SEARCH_LIST})
                        }}/>)}
                    </ul>
                </div>
            </div>
        )
    else
        return (null);
};

const mapStateToProps = (state) => ({
    contacts: state.ListData.showList,
    id : state.id,
    addEntry: state.addEntry
  });

const dispatchToSearch = (dispatch) => ({
    search : (e) => {
        dispatch({type: CHANGE_SEARCH_WORD, searchWord : e.target.value})
        dispatch({type: UPDATE_SEARCH_LIST})
        console.log(e.target.value)
    },
    add: (e) => {
        e.preventDefault();
        var contact_name = e.target[0].value;
        var contact_data = e.target[1].value;

        dispatch({type : ADD_ELEMENT, name : contact_name, data: contact_data});
        dispatch({type: UPDATE_SEARCH_LIST});

        console.log(contact_name, contact_data);
    },
    dispatch
})

export default connect(mapStateToProps, dispatchToSearch)(App);