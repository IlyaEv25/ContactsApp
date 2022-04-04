
//import "./NewEntry.scss"
import React from 'react'
import { connect } from 'react-redux'
import Textfield from '../components/Textfield';
import Button from '../components/Button';

import { UPDATE_SEARCH_LIST,  ADD_ELEMENT } from '../actions';

const NewEntry = ({addEntry, add}) => {
    if (addEntry)
    {
        return (
        <div className="mdc-list-item newentry" tabIndex="0">
            <form onSubmit = {add} className = "preform">
                <div className='form'>
                    <div className="mdc-list-item__ripple"></div>
                    <div className="c_n"><Textfield Text = "ContactName" text_id ="contact_n"/></div>
                    <div className="mdc-list-item__secondary-text c_d"><Textfield Text = "ContactData" text_id ="contact_d"/></div>
                </div>
                <div className = "addB">
                    <Button text = "Add" text_id = "addButton"/>
                </div>
            </form>
        </div>
        
        )
    }
    else
        return null;
}

const dispatchToProps = (dispatch) => ({
    add: (e) => {
        e.preventDefault();
        var contact_name = e.target[0].value;
        var contact_data = e.target[1].value;

        dispatch({type : ADD_ELEMENT, name : contact_name, data: contact_data});
        dispatch({type: UPDATE_SEARCH_LIST});

        console.log(contact_name, contact_data);
    }
})

export default connect((state) => ({addEntry : state.addEntry}), dispatchToProps)(NewEntry);