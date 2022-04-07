import React, { useState } from 'react'
import { connect } from 'react-redux'
import Questions from './Questions';
import LoginForm from './LoginForm';

const Home = (props) => {
    const [showUnanswered, setShow] = useState(true)

    if (props.authedUser) {
        return (
            <div>
                <p>{`Hello, ${props.authedUser.name}`}</p>
                <div className="questionTypeSelect">
                    <button onClick={() => setShow(true)}>Unanswered</button>
                    <button onClick={() => setShow(false)}>Answered</button>
                </div>
                {showUnanswered ?
                    <Questions status='Unanswered' questions={props.unansweredQ}></Questions> :
                    <Questions status='Answered' questions={props.answeredQ}></Questions>
                }
            </div>
        );
    }
    else {
        return (
            <div>
                <p>Please log in first</p>
                <LoginForm toRedirect="/"></LoginForm>
            </div>
        )
    }
}

function categorizeQuestions(questions, user) {
    console.log("categorizing")
    let unansweredQ = []
    let answeredQ = []
    questions.map((question) => {
        if (user.answers.hasOwnProperty(question[0])) {
            answeredQ.push({ ...question[1], answer: user.answers[question[0]] })
        } else {
            unansweredQ.push({ ...question[1] })
        }
    })
    return [answeredQ, unansweredQ]
}

function sortRecentQFirst(questions) {
    const questionArray = Object.entries(questions)
    const sortedQuestions = questionArray.sort((a, b) => b[1].timestamp - a[1].timestamp)
    return sortedQuestions
}

function mapStateToProps({ authedUser, questions }) {
    if (Object.entries(authedUser).length !== 0) {
        console.log(authedUser)
        const sortedQuestions = sortRecentQFirst(questions)
        let answeredQ, unansweredQ
        console.log(authedUser)
        if (authedUser) {
            [answeredQ, unansweredQ] = categorizeQuestions(sortedQuestions, authedUser)
        }
        return { authedUser, answeredQ, unansweredQ }
    }
    else return authedUser
}

export default connect(mapStateToProps)(Home);