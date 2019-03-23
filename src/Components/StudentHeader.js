import React from 'react';
import './Student.css'

const StudentHeader = (props) => (
    <h3 className="card-header student-header">{props.username}</h3>
) 

export default StudentHeader;