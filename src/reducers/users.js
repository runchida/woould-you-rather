import { RECEIVE_USERS, UPDATE_ANSWER } from "../actions/users";

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }

        case UPDATE_ANSWER:
            return {
                    ...state,
                    [action.answer.authedUser]: {
                      ...state[action.answer.authedUser],
                      answers: {
                        ...state[action.answer.authedUser].answers,
                        [action.answer.qid]: action.answer.answer
                      }
                    }
                  }

        default:
            return state
    }
}