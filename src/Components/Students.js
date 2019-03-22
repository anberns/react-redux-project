import React, { Component } from 'react';
import Student from './Student';

export default class Students extends Component {
  render() {
      const studentList = this.props.students.map(student => {
        return (
          <div>
            <Student
              id={student.id}
              key={student.id}
              name={student.name}
              stage={student.stage}
              phonemes={student.phonemes}
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