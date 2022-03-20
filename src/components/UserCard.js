import React from 'react';
const avatarPath = window.location.origin + '/avatars/'

const UserCard = (props) => {
    return (
        <div>
            <img src={avatarPath + props.user.avatarURL} alt={`${props.user.name}'s avatar`}></img>
            <input type="radio" id={props.user.id} name="username" value={props.user.id}></input>
            <label htmlFor={props.user.id}>{props.user.name}</label>
        </div>
    )
}

export default UserCard