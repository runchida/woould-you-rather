import { connect } from 'react-redux'
import React, { Component } from 'react';
import UserCard from './UserCard';
import { setAuthedUser } from '../actions/authedUser';

class LoginForm extends React.Component {
    
    login = (event) => {
        event.preventDefault()
        const authedUserID = Object.entries(event.target).map((input) => {
            if (input[1].checked === true) return input[1].value
        }).filter((input) => input)[0]
        this.props.dispatch(setAuthedUser(this.props.users[authedUserID]))
        return authedUserID
    }

    render() {
        return (
            <form onSubmit={this.login} onChange={this.onSelect}>
                {
                    Object.entries(this.props.users).map((user) => {
                        return (<UserCard key={user[1].id} user={user[1]}></UserCard>)
                    })
                }
                <button>Login</button>
            </form>

        );
    }

}



function mapStateToProps({ authedUser, users },) {
    return { authedUser, users }
}

export default connect(mapStateToProps)(LoginForm);