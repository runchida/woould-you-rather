import { GET_AUTH, RESET_AUTH, SET_AUTH, UPDATE_AUTH } from "../actions/authedUser";

export default function authedUser(state = {}, action) {
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
        case UPDATE_AUTH:
            return {
                ...state,
                answers: {
                    ...state.answers,
                    [action.qid]: action.answer
                }
            }
        case RESET_AUTH:
            return {}
        default:
            return state
    }
}