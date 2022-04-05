import { SET_TOKEN, SET_LIST } from "../actions";
import {Contact} from "../state"

var server: string = "http://localhost:3000/";

type User = {
    id: number, 
    name: string,
    password: string,
    data: string
}

export const getUsers = async (): Promise<Array<User>> => {
    var users = await fetch(server + "users").then(data => data.json());
    return users;
}

export const getContacts = async (userid: number): Promise<Array<Contact>> => {
    var userData = await fetch(server + "db/" + userid).then(data => data.json());
    return userData.contacts;
}

