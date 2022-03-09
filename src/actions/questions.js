import { _getQuestions } from "../utils/_DATA";

export function getQuestionsFromDB() {
    return (dispatch) => {
        return _getQuestions()
            .then( (questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}