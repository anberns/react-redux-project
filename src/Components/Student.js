import React, { Component } from 'react';
import './Student.css'

export default class Student extends Component {
  
  handleOnClickDelete() {
    this.props.deleteStudent(this.props.id)
  }

  render() {
    
    return (
        <div className="card student-card">
          <h3 className="card-header student-header">{this.props.name}</h3>
          <div className="card-body">
            <h6>{this.props.stage}</h6>
            <a href="#" className="btn btn-primary delete-button" onClick={() => this.handleOnClickDelete()}>Delete</a>
          </div>
        </div>
    )
  }
}
