import { SET_TOKEN } from "../actions";
import initialState from "../initialState";

export default function getInitInfo(state = initialState.id, action) {

    switch (action.type)
    {
        case SET_TOKEN:
            return action.id
        default:
            return state;
    }
}
