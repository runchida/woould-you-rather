import { connect } from 'react-redux'

const UnansweredQ = (props) => {
    console.log(props)
    return (
        <p>{`${props.authedUser.user.name}`}</p>

    );
}

export default UnansweredQ;