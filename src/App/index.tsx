import React from 'react'
import { connect } from 'react-redux'

import Header from './Header';
import NewEntry from './NewEntry';
import ContactList from './ContactList';

import {State} from '../state';



const App = ({id} : {id: number}) => {

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

const mapStateToProps = (state : State) => ({
    id : state.id
  });


export default connect(mapStateToProps)(App);