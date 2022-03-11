import { connect } from 'react-redux'

const LoginForm = (props) => {
    console.log(props)
    return (
        <form>
            <input type="text" placeholder="Enter your username"></input>
            <button>Login</button>
        </form>
    );
}


function mapStateToProps({ authedUser }) {
    return {authedUser}
  }

export default connect(mapStateToProps)(LoginForm);