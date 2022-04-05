import { SET_TOKEN } from "../actions";
import initialState from "../state";
import {AnyAction} from 'redux'

export default function getInitInfo(state: number = initialState.id, action: AnyAction): number {

    switch (action.type)
    {
        case SET_TOKEN:
            return action.id
        default:
            return state;
    }
}
