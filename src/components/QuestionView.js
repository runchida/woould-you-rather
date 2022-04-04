import { connect } from 'react-redux'
const avatarPath = window.location.origin + '/avatars/'

const QuestionView = (props) => {
    console.log('Question overview', props)
    if (props.question) {
            return (
                <div>
                    <p>Would you rather?</p>
                    <img className="user-avatar" src={avatarPath + props.author.avatarURL} alt={`${props.author.name}'s avatar`}></img>
                    <p>Asked by {props.author.name}</p>
                    {props.answered ?
                        <div className='horizontal-options'>
                            <p className={props.optionOneSelected ? "answeredFromUser" : ""}>{`${props.percentOne}% ${props.question.optionOne.text}`}</p>
                            <p> OR </p>
                            <p className={!props.optionOneSelected ? "answeredFromUser" : ""}>{`${100 - props.percentOne}% ${props.question.optionTwo.text}`}</p>
                        </div>
                        :
                        <div className='horizontal-options'>
                            <button>{props.question.optionOne.text}</button>
                            <p> OR </p>
                            <button>{props.question.optionTwo.text}</button>
                        </div>
                    }
                </div>
            );
    } else {
        return <p>404! No question found!</p>
    }
}

// calculate percentage of answers
function calculatePercentage(question) {
    const totalVote = question.optionOne.votes.length + question.optionTwo.votes.length
    const percentOne = (question.optionOne.votes.length / totalVote) * 100
    console.log(percentOne)
    return percentOne
}

function mapStateToProps({ authedUser, questions, users }, { questionID }) {
    const question = questions[questionID];
    let answered
    let author = {}
    let percentOne = 0;
    let optionOneSelected

    if (authedUser.answers && users[question.author]) {
        answered = authedUser.answers.hasOwnProperty(questionID)
        author = { name: users[question.author].name, avatarURL: users[question.author].avatarURL }
        if(answered) {
            percentOne = calculatePercentage(question)
            optionOneSelected = authedUser.answers[questionID] === "optionOne"
        }
    }

    return { question, answered, author, percentOne, optionOneSelected }
}

export default connect(mapStateToProps)(QuestionView);