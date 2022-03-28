import { connect } from 'react-redux'
import Questions from './Questions';

const Home = (props) => {
    console.log(props)
    return (
        <div>
            <p>{`Hello, ${props.authedUser.name}`}</p>
            <Questions status='Unanswered' questions={props.unansweredQ}></Questions>
            <Questions status='Answered' questions={props.answeredQ}></Questions>
        </div>
    );
}

function categorizeQuestions(questions, user) {
    let unansweredQ = []
    let answeredQ = []
    questions.map((question) => {
        if (user.answers.hasOwnProperty(question[0])) {
            answeredQ.push({...question[1]})
        } else {
            unansweredQ.push({ ...question[1], answer: user.answers[question[0]] })
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
    const sortedQuestions = sortRecentQFirst(questions)
    let answeredQ, unansweredQ
    console.log(authedUser)
    if (authedUser) {
        [answeredQ, unansweredQ] = categorizeQuestions(sortedQuestions, authedUser)
    }
    
    return { authedUser, answeredQ, unansweredQ }
}

export default connect(mapStateToProps)(Home);