import { _getUsers } from "../utils/_DATA";

export function getUsersFromDB() {
    return (dispatch) => {
        return _getUsers()
            .then( (users) => {
                dispatch(receiveUsers(users))
            })
    }
}

export function updateUserAnswer(authedUser, qid, answer) {
    const answerObj = { authedUser, qid, answer }
    return (dispatch) => {
        return dispatch(updateAnswer(answerObj))
    }
}

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_ANSWER = 'UPDATE_ANSWER'

function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

function updateAnswer(answer) {
    return {
        type: UPDATE_ANSWER,
        answer
    }
}