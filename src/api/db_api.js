import { SET_TOKEN, SET_LIST } from "../actions";

var server = "http://localhost:3000/";

export const getUsers = async () => {
    var users = await fetch(server + "users").then(data => data.json());
    return users;
}

export const getContacts = async (userid) => {
    var userData = await fetch(server + "db/" + userid).then(data => data.json());
    return userData.contacts;
}

