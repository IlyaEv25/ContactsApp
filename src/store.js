
import { createStore } from 'redux'
import { getContacts, getUsers } from './api/db_api';
import { SET_TOKEN, SET_LIST } from './actions';

const reducer = (state = {"contacts" : []}, action) => {

    switch (action.type)
    {
        case SET_LIST:
            return {
                ...state,
                "contacts": action.list
            }
        case SET_TOKEN:
            return {
                ...state,
                "id": action.id
            }
        case "NAME":
            return {
                ...state,
                "name": action.name
            };
        case "DATE":
            return {
                ...state,
                "date": action.date
            };
        case "NUMBER":
            return {
                ...state,
                "number": action.number
            };
        default:
            return state;
    }
}


export const store = createStore(
  reducer
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

