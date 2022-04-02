
import { createStore, combineReducers } from 'redux'
import { getContacts, getUsers } from './api/db_api';
import { SET_TOKEN, SET_LIST } from './actions';
import getInitInfo from './reducers/getInitInfo';
import listOps from './reducers/listOps';
import initialState from './initialState';
import addEntry from './reducers/addEntry';

const reducer = combineReducers({
    id: getInitInfo,
    ListData: listOps,
    addEntry: addEntry
})


export const store = createStore(
  reducer,
  initialState
);

export const getTokenID = async (username, password) => {
    var users = await getUsers();
    var user = users.find((x) => x.name == username);

    if (user && user["password"] == password)
    {
        store.dispatch({type: SET_TOKEN, id : user["id"]});
        return user["id"];
    }
    else
    {
        console.log("Wrong data!");
        return -1;
    }    
} 

export const getStoreContacts = async (userid) => {
    var contactList = await getContacts(userid);
    console.log(contactList);
    store.dispatch({type: SET_LIST, list: contactList});
}

