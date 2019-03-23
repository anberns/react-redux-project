import React from 'react';
import './User.css'
import UserHeader from './UserHeader'

const User = (props) => (
  <div className="card user-card">
   <UserHeader username={props.user.name} />
    <div className="card-body">
      <h6>{props.user.email}</h6>
    </div>
  </div>
) 

export default User;
