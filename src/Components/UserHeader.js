import React from 'react';
import './User.css'

const UserHeader = (props) => (
    <h3 className="card-header user-header">{props.username}</h3>
) 

export default UserHeader;