export const GET_AUTH = 'GET_AUTH'
export const SET_AUTH = 'SET_AUTH'
export const INIT_AUTH = 'INIT_AUTH'

export function setAuthUser (user) {
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