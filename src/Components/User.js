import React from 'react';
import './User.css'

const User = (props) => (
  <div className="card user-card">
    <h3 className="card-header user-header">{props.user.name}</h3>
    <div className="card-body">
      <h6>{props.user.email}</h6>
    </div>
  </div>
) 

export default User;
