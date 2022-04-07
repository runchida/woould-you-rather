import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { resetAuthedUser } from '../actions/authedUser';
import React from 'react'

const NavBar = (props) => {
    console.log(props)
    const navigate = useNavigate()
    const logout = () => {
        props.dispatch(resetAuthedUser())
        navigate("login")
    }

    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/add">New Question</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default connect(null)(NavBar);
