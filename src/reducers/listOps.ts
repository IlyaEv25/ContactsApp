import {DEL_ELEMENT, ADD_ELEMENT, EDIT_ELEMENT, SET_LIST, CHANGE_SEARCH_WORD, UPDATE_SEARCH_LIST} from "../actions";
import initialState, {ListData} from "../state";
import { AnyAction } from "redux";


export default function listOps(state: ListData = initialState.ListData, action: AnyAction): ListData {

    switch (action.type)
    {
        case CHANGE_SEARCH_WORD:
            return {
                ...state,
                searchWord: action.searchWord
            }

        case UPDATE_SEARCH_LIST:
            var list = state.contacts;
            var searchWord = state.searchWord;
            return {
                ...state,
                searchList: list.filter(contact => contact.name.indexOf(searchWord) == 0)
            }

        case SET_LIST:
            return {
                ...state,
                contacts: action.list,
                searchList: action.list
            }

        case DEL_ELEMENT:
            return {
                ...state,
                contacts:state.contacts.filter((v) => v.id != action.id),
            }

        case ADD_ELEMENT:
            return {
                ...state,
                contacts: [...state.contacts, {
                    id : state.contacts.length,
                    name: action.name,
                    data: action.data
                }]
            }

        case EDIT_ELEMENT:
            return {
                ...state,
                contacts: state.contacts.map((x) => {
                    if (x.id == action.id)
                        return action.element;
                    else
                        return x;
                })
            }

        default:
            return state;

    }
}
