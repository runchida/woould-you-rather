import React from 'react';
const avatarPath = window.location.origin + '/avatars/'

const UserCard = (props) => {
    console.log(avatarPath)
    return (
        <div>
            <img src={avatarPath + props.user.avatarURL}></img>
            <input type="radio" id={props.user.id} name="username" value={props.user.id} ></input>
            <label for={props.user.id}>{props.user.name}</label>
        </div>
    )
}

export default UserCard