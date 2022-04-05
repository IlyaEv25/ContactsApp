import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';
import Contact from '../components/Contact'
import { UPDATE_SEARCH_LIST, DEL_ELEMENT} from '../actions';

import {State} from '../state';
import {Dispatch}from 'redux'

type ContactListProps = {
    contacts: Array<Contact>,
    delete_element : (id: number) => React.MouseEventHandler<HTMLButtonElement>
}

const ContactList = ({contacts, delete_element}: ContactListProps) => {
    useEffect(() => {
        var list: Element | null = document.querySelector('.mdc-list');
        if (list)
        {
            var Mlist : MDCList = new MDCList(list);
            Mlist.listElements.map((listItemEl) => new MDCRipple(listItemEl));
        }
    })

    return (
        <ul className="mdc-list--two-line--dense list">
            {contacts.map((contact) => <Contact contact = {contact} key = {contact.id} delete_el = {delete_element(contact.id)}/>)}
        </ul>
    )
}

const mapStateToProps = (state : State) => ({
    contacts : state.ListData.searchList
  });

const mapDispatchToProps = (dispatch : Dispatch) => ({
    delete_element: (id : number) => () => {
        dispatch({type: DEL_ELEMENT, id : id})
        dispatch({type: UPDATE_SEARCH_LIST})
    }
 })

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
