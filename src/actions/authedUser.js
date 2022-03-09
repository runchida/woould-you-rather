export const SET_AUTH = 'SET_AUTH'

function setAuthUser (user) {
    return {
        type: SET_AUTH,
        user
    }
}