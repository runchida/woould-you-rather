import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_ANSWER = 'ADD_ANSWER'

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

export function handleNewAnswer(authedUser, qid, answer) {
    const answerObj = {authedUser, qid, answer}
    return (dispatch) => {
        return _saveQuestionAnswer(answerObj)
            .then(() => dispatch(addAnswer(answerObj)))
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

function addAnswer(answer) {
    return {
        type: ADD_ANSWER,
        answer
    }
}