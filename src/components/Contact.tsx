import React from 'react';
import Button from './Button';
import Textfield from './Textfield';
import { connect } from 'react-redux'
import {Dispatch}from 'redux'
import {State} from '../state';
import {EDIT_ELEMENT, EDIT_ENTRY, UPDATE_SEARCH_LIST} from "../actions"

export type ContactT = {
  id: number,
  name: string,
  data: string
}

type ContactProps = {
  contact : ContactT,
  delete_el: React.MouseEventHandler<HTMLButtonElement>,
  edit_el: (id: number) => React.MouseEventHandler<HTMLButtonElement>,
  editIndex: number,
  edit: (id: number) => React.FormEventHandler<HTMLFormElement>
}

const Contact = ({contact, delete_el, edit_el, editIndex, edit} : ContactProps) : JSX.Element | null => {
  if (editIndex != contact.id)
    return (
    <li className="mdc-list-item Item" tabIndex={0}>
      <span className="mdc-list-item__ripple"></span>
        <div className="mdc-list-item__text Text">
          <span className="mdc-list-item__primary-text">{contact.name}</span>
          <span className="mdc-list-item__secondary-text"> {contact.data}</span>
        </div>
        <Button text = "Edit" text_id = "eButton" onClick = {edit_el(contact.id)}/>
        <Button text = "Delete" text_id = "dButton" onClick = {delete_el}/>
    </li>
    )
  else
    return (
      <div className="mdc-list-item EditItem" tabIndex={0}>
            <form onSubmit = {edit(contact.id)} className = "preform">
                <div className='e_form'>
                    <div className="mdc-list-item__ripple"></div>
                    <div className="edit_n"><Textfield Text = "ContactName" text_id ="contact_n"/></div>
                    <div className="mdc-list-item__secondary-text edit_d"><Textfield Text = "ContactData" text_id ="contact_d"/></div>
                </div>
                <div className = "editB">
                    <Button text = "Edit" text_id = "addButton"/>
                </div>
            </form>
        </div>
    )
};

const mapStateToProps = (state: State) => ({
  editIndex: state.editIndex
})

const mapDispatchToProps = (dispatch: Dispatch) : {
  edit : (id: number) => React.FormEventHandler<HTMLFormElement>
  edit_el : (id: number) => React.MouseEventHandler<HTMLButtonElement>
} => ({
  edit: (id : number) => (e) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
        '0': { value: string };
        '1': { value: string };
      };
    var contact_name = target[0].value;
    var contact_data = target[1].value;

    dispatch({type : EDIT_ELEMENT, id: id, element : {id: id, name: contact_name, data: contact_data}});
    dispatch({type: UPDATE_SEARCH_LIST});
    dispatch({type: EDIT_ENTRY, id : -1})

    console.log(contact_name, contact_data);
  },
  edit_el: (id:number) => () => {
    dispatch({type: EDIT_ENTRY, id : id})
    dispatch({type: UPDATE_SEARCH_LIST})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact);