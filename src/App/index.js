import React from 'react'
import { connect } from 'react-redux'
import './index.scss'
import Textfield from '../components/Textfield';
import Button from '../components/Button';
import Header from './Header';
import ContactList from './ContactList';
import { UPDATE_SEARCH_LIST,  ADD_ELEMENT } from '../actions';




const FNewEntry = ({addEntry, add}) => {
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

const NewEntry = connect((state) => ({addEntry : state.addEntry}), dispatchToProps)(FNewEntry);

const App = ({id}) => {

    if (id != -1)
        return (
            <div className = "app">
                <Header />
                <NewEntry/>
                <ContactList />
            </div>
        )
    else
        return (null);
};

const mapStateToProps = (state) => ({
    id : state.id,
    addEntry: state.addEntry
  });


export default connect(mapStateToProps)(App);