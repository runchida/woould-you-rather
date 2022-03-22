import { connect } from 'react-redux'
import Questions from './Questions';

const Home = (props) => {
    console.log(props)
    return (
        <div>
            <p>{`Hello, ${props.authedUser.user.name}`}</p>
            <Questions status='Unanswered' questions={props.unansweredQ}></Questions>
        </div>
    );
}

function getUnansweredQustions(questions, user) {
    let unansweredQ = []
    let answeredQ = []
    console.log(user.id)
    questions.map((question) => {
        // if(question[1].optionOne.votes.includes(user)) {
        //     answeredQ.push({...question[1], answer: question[1].optionOne.text})
        // } else if(question[1].optionTwo.votes.includes(user)) {
        //     answeredQ.push({...question[1], answer: question[1].optionOne.text})
        // } else {
        //     unansweredQ.push(question[1])
        // }

        if (user.answers.hasOwnProperty(question[0])) {
            answeredQ.push(question[1])
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
        [answeredQ, unansweredQ] = getUnansweredQustions(sortedQuestions, authedUser)
    }
    
    return { authedUser, answeredQ, unansweredQ }
}

export default connect(mapStateToProps)(Home);