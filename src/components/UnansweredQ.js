import { connect } from 'react-redux'

const UnansweredQ = (props) => {
    console.log(props)
    return (
        <p>{`${props.authedUser.user.name}`}</p>

    );
}

function categorizeQuestions(questions, user) {
    let unansweredQ = []
    questions.map((question) => {
        if (!user.answers.hasOwnProperty(question[0])) {
            unansweredQ.push({ ...question[1], answer: user.answers[question[0]] })
        }
    })
    return unansweredQ
}

function sortRecentQFirst(questions) {
    const questionArray = Object.entries(questions)
    const sortedQuestions = questionArray.sort((a, b) => b[1].timestamp - a[1].timestamp)
    return sortedQuestions
}

function mapStateToProps({ authedUser, questions }) {
    const sortedQuestions = sortRecentQFirst(questions)
    let unansweredQ
    console.log(authedUser)
    if (authedUser) {
        unansweredQ = categorizeQuestions(sortedQuestions, authedUser)
    }

    return { authedUser, unansweredQ }
}

export default connect(mapStateToProps)(UnansweredQ);