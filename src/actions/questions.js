import { _getQuestions, _saveQuestion } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'RECEIVE_QUESTION'

export function getQuestionsFromDB() {
    return (dispatch) => {
        return _getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}

export function handleNewQuestion(optionOneText, optionTwoText, author) {
    const question = {optionOneText, optionTwoText, author}
    return (dispatch) => {
        return _saveQuestion(question)
            .then((question) => dispatch(addQuestion(question)))
    }
}


function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}