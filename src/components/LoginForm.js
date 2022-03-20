import { connect } from 'react-redux'
import UserCard from './userCard';

const LoginForm = (props) => {
    console.log(props.users)
    return (
        <form>
            {
                Object.entries(props.users).map((user) => {
                    console.log("user", user)
                    return (<UserCard user={user[1]} ></UserCard>)
                })
            }
            <button>Login</button>
        </form>

    );
}


function mapStateToProps({ authedUser, users }) {
    return { authedUser, users }
}

export default connect(mapStateToProps)(LoginForm);