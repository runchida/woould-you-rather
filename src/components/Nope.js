import { connect } from 'react-redux'
import LoginForm from './LoginForm';

const Nope = (props) => {
    if (props.authedUser) {
        return (<p>404! Nothing for you here</p>)
    }
    else {
        alert('Please login first')
        return (<LoginForm></LoginForm>)
    }
}

export default connect(null)(Nope);