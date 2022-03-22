import { GET_AUTH, SET_AUTH } from "../actions/authedUser";

export default function authedUser(state = {user: ""}, action) {
    switch (action.type) {
        case GET_AUTH:
            return {
                ...state,
            }
        case SET_AUTH:
            return {
                ...state,
                ...(action.user)
            }
        default:
            return state
    }
}