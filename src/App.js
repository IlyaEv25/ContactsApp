import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import './App.scss'
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';
import Textfield from './components/Textfield';
import { UPDATE_SEARCH_LIST, CHANGE_SEARCH_WORD, DEL_ELEMENT } from './actions';

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
    })

    if (id != -1)
        return (
            <div>
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