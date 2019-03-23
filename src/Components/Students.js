import React, { Component } from 'react';
import Student from './Student';

export default class Students extends Component {
  render() {
    const studentsArr = Object.values(this.props.students)[0]
    const studentList = studentsArr.map(student => {
      return (
        <div>
          <Student
            id={student.id}
            key={student.id}
            name={student.name}
            stage={student.stage}
            deleteStudent={this.props.deleteStudent} 
          />
        </div>
      )
    })
    return (
    <ul>
      {studentList}
    </ul>
    )
  }
}