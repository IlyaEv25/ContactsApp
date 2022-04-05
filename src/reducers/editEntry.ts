import initialState from "../state";
import { EDIT_ENTRY } from "../actions";

import {AnyAction} from 'redux'

export default function editEntry(state: number = initialState.editIndex, action : AnyAction): number
{
    if (action.type == EDIT_ENTRY)
        return action.id;
    else
        return state;
}