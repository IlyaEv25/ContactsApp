import React, {useEffect} from 'react'
import { connect } from 'react-redux'
//import './ContactList.scss'
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';
import Contact from '../components/Contact'
import { UPDATE_SEARCH_LIST, DEL_ELEMENT} from '../actions';

type ContactListProps = {
    contacts: Array<Contact>,
    delete_element : React.MouseEventHandler<HTMLButtonElement>
}

const ContactList = ({contacts, delete_element}: ContactListProps) => {
    useEffect(() => {
        var list = document.querySelector('.mdc-list');
        if (list)
        {
            list = new MDCList(list);
            list = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
        }
    })

    return (
        <ul className="mdc-list--two-line--dense list">
            {contacts.map((contact) => <Contact contact = {contact} key = {contact.id} delete_el = {delete_element(contact.id)}/>)}
        </ul>
    )
}

const mapStateToProps = (state) => ({
    contacts: state.ListData.showList
  });

const mapDispatchToProps = (dispatch : Function) => ({
    delete_element: (id) => () => {
        dispatch({type: DEL_ELEMENT, id : id})
        dispatch({type: UPDATE_SEARCH_LIST})
    }
 })

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
