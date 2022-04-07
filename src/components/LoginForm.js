import { connect } from 'react-redux'
import React, { Component } from 'react';
import UserCard from './UserCard';
import { setAuthedUser } from '../actions/authedUser';
import { useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
    const navigate = useNavigate()
    const login = (event) => {
        event.preventDefault()
        const authedUserID = Object.entries(event.target).map((input) => {
            if (input[1].checked === true) return input[1].value
        }).filter((input) => input)[0]
        props.dispatch(setAuthedUser(props.users[authedUserID]))
        navigate("/")
    }
    
        return (
            <form onSubmit={(e) => login(e)}>
                {
                    Object.entries(props.users).map((user) => {
                        return (<UserCard key={user[1].id} user={user[1]}></UserCard>)
                    })
                }
                <button type="submit">Login</button>
            </form>
        );
}

function mapStateToProps({ authedUser, users },) {
    return { authedUser, users }
}

export default connect(mapStateToProps)(LoginForm);