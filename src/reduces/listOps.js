import {DEL_ELEMENT, ADD_ELEMENT, EDIT_ELEMENT, SET_LIST, CHANGE_SEARCH_WORD, UPDATE_SEARCH_LIST} from "../actions";
import initialState from "../initialState";


export default function listOps(state = initialState.ListData, action) {

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
                showList: list.filter(contact => contact.name.indexOf(searchWord) == 0)
            }

        case SET_LIST:
            return {
                ...state,
                contacts: action.list,
                showList: action.list
            }

        case DEL_ELEMENT:
            return {
                ...state,
                contacts:state.contacts.filter((v) => v.id != action.id),
            }

        case ADD_ELEMENT:
            return {
                ...state,
                contacts: [...state.contacts, action.element]
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
