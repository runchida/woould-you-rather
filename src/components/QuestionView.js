import { connect } from 'react-redux'
const avatarPath = window.location.origin + '/avatars/'

const QuestionView = (props) => {
    console.log('Question overview', props)
    if (props.question) {
        if (props.answered) {
            return (
                <div>
                    <p>Would you rather?</p>
                    <img className="user-avatar" src={avatarPath + props.author.avatarURL} alt={`${props.author.name}'s avatar`}></img>
                    <p>Asked by {props.author.name}</p>
                    <div className='horizontal-options'>
                        <button>{props.question.optionOne.text}</button>
                        <p> OR </p>
                        <button>{props.question.optionTwo.text}</button>
                    </div>
                    {/* {props.answered} */}
                </div>
            );
        }
    } else {
        return <p>404! No question found!</p>
    }
}

function mapStateToProps({ authedUser, questions, users }, { questionID }) {
    const question = questions[questionID];
    const answered = authedUser.answers.hasOwnProperty(questionID)
    const author = { name: users[question.author].name, avatarURL: users[question.author].avatarURL }
    return { question, answered, author }
}

export default connect(mapStateToProps)(QuestionView);