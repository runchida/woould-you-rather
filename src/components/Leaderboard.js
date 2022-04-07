import { connect } from 'react-redux'
const avatarPath = window.location.origin + '/avatars/'

const Leaderboard = (props) => {
    console.log(props)
    return (
        <div>
            {
                props.sortedScore.map((entry) => {
                    const user = entry.user
                    const score = entry.score
                    return (
                        <div className='leaderEntry' >
                            <img className="user-avatar" src={avatarPath + user.avatarURL} alt={`${user.name}'s avatar`}></img>
                            <p>{user.name}</p>
                            <p>{score}</p>
                        </div>
                    )
                })
            }
        </div >
    )
}

// sum of questions asked and answers
function getScore(user) {
    const numAns = (Object.keys(user.answers)).length
    const numQuestion = (Object.keys(user.questions)).length
    return numAns + numQuestion
}

function mapStateToProps({ users }) {
    const scoreArray = Object.entries(users).map((entry) => {
        const user = entry[1]
        return { user, score: getScore(user) }
    })

    console.log(scoreArray)
    const sortedScore = scoreArray.sort((a, b) => { return b.score - a.score })

    return { sortedScore }
}

export default connect(mapStateToProps)(Leaderboard)