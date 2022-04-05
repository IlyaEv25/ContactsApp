import initialState from "../state";
import { ADD_ENTRY } from "../actions";

import {AnyAction} from 'redux'

export default function addEntry(state: boolean = initialState.addEntry, action : AnyAction): boolean
{
    if (action.type == ADD_ENTRY)
        return !state;
    else
        return state;
}