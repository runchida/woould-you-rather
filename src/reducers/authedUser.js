import { SET_AUTH } from "../actions/authedUser";

export default function questions(state = {}, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state
    }
}