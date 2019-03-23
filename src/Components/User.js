import React, { Component } from 'react';
import './Student.css'

const User = (props) => (
  <div className="card student-card">
    <h3 className="card-header student-header">{props.user.name}</h3>
    <div className="card-body">
      <h6>{props.user.email}</h6>
    </div>
  </div>
) 

export default User;
