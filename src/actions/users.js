import { _getUsers } from "../utils/_DATA";

export function getUsersFromDB() {
    return (dispatch) => {
        return _getUsers()
            .then( (users) => {
                dispatch(receiveUsers(users))
            })
    }
}

export const RECEIVE_USERS = 'RECEIVE_USERS'

function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}