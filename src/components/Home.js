import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questions from './Questions';

class Home extends Component {
    state = { showUnanswered: true }

    render() {
        return (
            <div>
                <p>{`Hello, ${this.props.authedUser.name}`}</p>
                <div className="questionTypeSelect">
                    <button onClick={() => this.setState({showUnanswered: true})}>Unanswered</button>
                    <button onClick={() => this.setState({showUnanswered: false})}>Answered</button>
                </div>
                {this.state.showUnanswered ?
                    <Questions status='Unanswered' questions={this.props.unansweredQ}></Questions> :
                    <Questions status='Answered' questions={this.props.answeredQ}></Questions>
                }
            </div>
        );
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
    console.log(authedUser)
    const sortedQuestions = sortRecentQFirst(questions)
    let answeredQ, unansweredQ
    console.log(authedUser)
    if (authedUser) {
        [answeredQ, unansweredQ] = categorizeQuestions(sortedQuestions, authedUser)
    }

    return { authedUser, answeredQ, unansweredQ }
}

export default connect(mapStateToProps)(Home);