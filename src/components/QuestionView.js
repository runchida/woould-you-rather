import { connect } from 'react-redux'
import { updateAuthedUser } from '../actions/authedUser'
import { handleNewAnswer } from '../actions/questions'
import { updateUserAnswer } from '../actions/users'
import LoginForm from './LoginForm';

const avatarPath = window.location.origin + '/avatars/'

const QuestionView = (props) => {

    const onSubmit = (event) => {
        console.log(event.target.value)
        const answer = event.target.value
        props.dispatch(handleNewAnswer(props.user, props.question.id, answer))
        props.dispatch(updateUserAnswer(props.user, props.question.id, answer))
        props.dispatch(updateAuthedUser(props.question.id, answer))
    }

    // check if user is signed in and the question exists 
    if (props.user && props.question) {
        return (
            <div>
                <p>Would you rather?</p>
                <img className="user-avatar" src={avatarPath + props.author.avatarURL} alt={`${props.author.name}'s avatar`}></img>
                <p>Asked by {props.author.name}</p>
                {props.answered ?
                    <div className='horizontal-options'>
                        <div className={props.optionOneSelected ? "answeredFromUser" : ""}>
                            <p>{`${props.voteResult[0]} Vote(s)`}</p>
                            <p>{`${props.voteResult[2]}% ${props.question.optionOne.text}`}</p>
                        </div>
                        <p> OR </p>
                        <div className={!props.optionOneSelected ? "answeredFromUser" : ""}>
                            <p>{`${props.voteResult[1]} Vote(s)`}</p>
                            <p >{`${100 - props.voteResult[2]}% ${props.question.optionTwo.text}`}</p>
                        </div>
                    </div>
                    :
                    <div className='horizontal-options'>
                        <button onClick={(e) => onSubmit(e)} value="optionOne">{props.question.optionOne.text}</button>
                        <p> OR </p>
                        <button onClick={(e) => onSubmit(e)} value="optionTwo">{props.question.optionTwo.text}</button>
                    </div>
                }
            </div>
        );
    } else if (props.user) {
        return <p>404! No question found!</p>
    } else {
        const toRedirect = window.location.pathname.split('/questions/')[1]
        return (
            <LoginForm toRedirect={`/questions/${toRedirect}`}></LoginForm>
        )
    }
}

// calculate percentage of answers and also give the number of votes back
function calculatePercentage(question) {
    const voteOne = question.optionOne.votes.length
    const voteTwo = question.optionTwo.votes.length
    const totalVote = voteOne + voteTwo
    const percentOne = (voteOne / totalVote) * 100
    console.log(percentOne)
    return [voteOne, voteTwo, percentOne]
}

function mapStateToProps({ authedUser, questions, users }) {

    const questionID = window.location.pathname.split('/questions/')[1]
    const question = questions[questionID];
    const user = authedUser.id
    if (question) {
        let answered
        let author = {}
        let voteResult = [];
        let optionOneSelected = false

        if (authedUser.answers && users[question.author]) {
            answered = authedUser.answers.hasOwnProperty(questionID)
            author = { name: users[question.author].name, avatarURL: users[question.author].avatarURL }
            if (answered) {
                voteResult = calculatePercentage(question)
                optionOneSelected = authedUser.answers[questionID] === "optionOne"
            }
        }

        return { question, answered, author, voteResult, optionOneSelected, user }
    }
    else {
        return { questionID, user }
    }
}

export default connect(mapStateToProps)(QuestionView);
