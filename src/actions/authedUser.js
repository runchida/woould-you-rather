export const GET_AUTH = 'GET_AUTH'
export const SET_AUTH = 'SET_AUTH'
export const UPDATE_AUTH = 'UPDATE_AUTH'

export function setAuthedUser (user) {
    return {
        type: SET_AUTH,
        user
    }
}

export function getAuthedUser() {
    return {
        type: GET_AUTH,
    }
}

export function updateAuthedUser(qid, answer) {
    return {
        type: UPDATE_AUTH,
        qid, 
        answer
    }
}