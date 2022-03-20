import { connect } from 'react-redux'

const Home = (props) => {
    console.log(props)
    return (
        <p>{`Hello: ${props.authedUser.name}`}</p>

    );
}


function mapStateToProps({ authedUser, questions }) {
    return { authedUser, questions }
}

export default connect(mapStateToProps)(Home);