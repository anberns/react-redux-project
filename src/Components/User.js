import React from 'react';
import './Student.css'

const User = (props) => (
  <div className="card student-card">
    <h3 className="card-header student-header">{props.name}</h3>
    <div className="card-body">
      <h6>{props.email}</h6>
    </div>
  </div>

)

export default User;
