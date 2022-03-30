import React  from "react";
import { connect } from 'react-redux'


const Contact = ({name}) => (
    <div>{name}</div>
);


const App = ({contacts, id}) => {
    if (id != undefined)
        return (
            <div>
                {contacts.map((contact) => <Contact name = {contact.name} key = {contact.id}/>)}
            </div>
        )
    else
        return (null);
};

const mapStateToProps = (state) => ({
    "contacts": state.contacts,
    "id" : state.id
  });

export default connect(mapStateToProps)(App);