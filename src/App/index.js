import React from 'react'
import { connect } from 'react-redux'

import Header from './Header';
import NewEntry from './NewEntry';
import ContactList from './ContactList';

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
    id : state.id
  });


export default connect(mapStateToProps)(App);