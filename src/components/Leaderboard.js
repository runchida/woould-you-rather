import { connect } from 'react-redux'
import LoginForm from './LoginForm';
const avatarPath = window.location.origin + '/avatars/'

const Leaderboard = (props) => {
    console.log(props)
    if (Object.entries(props.authedUser).length !== 0) {
        console.log(props.authedUser)
        return (
            <div>
                <div className='horizontal-options'>
                    <p>User</p>
                    <p>Questions answered</p>
                    <p>Answers given</p>
                    <p>Score</p>
                </div>
                {
                    props.sortedScore.map((entry) => {
                        const user = entry.user
                        const score = entry.score
                        return (
                            <div key={`${user.name}`} className='horizontal-options' >
                                <div>
                                    <img className="user-avatar" src={avatarPath + user.avatarURL} alt={`${user.name}'s avatar`}></img>
                                    <p>{user.name}</p>
                                </div>
                                <p>{entry.question}</p>
                                <p>{entry.answers}</p>
                                <p>{score}</p>
                            </div>
                        )
                    })
                }
            </div >
        )
    }
    else {
        return (
            <div>
                <p>Please log in first</p>
                <LoginForm toRedirect="/leaderboard"></LoginForm>
            </div>)
    }
}

// sum of questions asked and answers
function getScore(user) {
    const numAns = (Object.keys(user.answers)).length
    const numQuestion = (Object.keys(user.questions)).length
    return [numQuestion, numAns, numAns + numQuestion]
}

function mapStateToProps({ users, authedUser }) {
    const scoreArray = Object.entries(users).map((entry) => {
        const user = entry[1]
        const scoreInfo = getScore(user)
        return { user, question: scoreInfo[0], answers: scoreInfo[1], score: scoreInfo[2] }
    })

    console.log(scoreArray)
    const sortedScore = scoreArray.sort((a, b) => { return b.score - a.score })

    return { sortedScore, authedUser }
}

export default connect(mapStateToProps)(Leaderboard)