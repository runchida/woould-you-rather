import { connect } from 'react-redux'
import QuestionCard from './QuestionCard';

const Questions = (props) => {
    console.log(props)
    return (
        <div className='questions'>
            <p>{`${props.status} Questions`}</p>
            {
                props.questions.map((question) => {
                    return <QuestionCard key={question.id} question={question}></QuestionCard>
                })
            }
        </div>

    );
}
function categorizeQuestions(questions, user) {
    let unansweredQ = []
    let answeredQ = []
    questions.map((question) => {
        if (user.answers.hasOwnProperty(question[0])) {
            answeredQ.push({ ...question[1] })
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

function mapStateToProps({ authedUser }, { questions, status }) {
    // const sortedQuestions = sortRecentQFirst(questions)
    // let answeredQ, unansweredQ, processedQ
    // console.log(authedUser)
    // if (authedUser) {
    //     [answeredQ, unansweredQ] = categorizeQuestions(sortedQuestions, authedUser)
    //     if (status === 'answered')
    //         processedQ = [...answeredQ]
    //     else {
    //         processedQ = [...unansweredQ]
    //     }
    // }

    return { authedUser, questions, status }
}

export default connect(mapStateToProps)(Questions);