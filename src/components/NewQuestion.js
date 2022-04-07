import { connect } from 'react-redux'
import { handleNewQuestion } from '../actions/questions'
import { useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm';

const NewQuestion = (props) => {
    console.log(props)
    const navigate = useNavigate()
    const onSubmit = (event) => {
        event.preventDefault()
        const optionOneText = event.target[0].value
        const optionTwoText = event.target[1].value
        props.dispatch(handleNewQuestion(optionOneText, optionTwoText, props.id))
        navigate("/")
    }

    if (props.id) {
        return (
            <div>
                <p>Would you rather...</p>
                <form onSubmit={(e) => onSubmit(e)}>
                    <label htmlFor="optionOne">This:</label>
                    <input type="text" id="one" name="optionOne"></input>
                    <label htmlFor="optionTwo">Or That:</label>
                    <input type="text" id="two" name="optionTwo"></input>
                    <button type="submit">Ask away</button>
                </form>
            </div>
        )
    }
    else {
        return (
            <div>
                <p>Please log in first</p>
                <LoginForm toRedirect="/add"></LoginForm>
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return authedUser
}

export default connect(mapStateToProps)(NewQuestion)