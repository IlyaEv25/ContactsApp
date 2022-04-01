import initialState from "../initialState";
import { ADD_ENTRY } from "../actions";

export default function addEntry(state = initialState.addEntry, action)
{
    if (action.type == ADD_ENTRY)
        return !state;
    else
        return state;
}