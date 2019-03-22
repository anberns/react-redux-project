import React, { Component }from 'react';
import { connect } from 'react-redux';
import fetchStudents from '../actions/fetchStudents'
import Students from '../Components/Students'
import StudentInput from '../Components/StudentInput'
import { addStudent } from '../actions/addStudent';
import { deleteStudent } from '../actions/deleteStudent';
import '../Components/Student.css'

class StudentsPage extends Component {
  componentDidMount() {
    this.props.fetchStudents()
  }
  render() {
    return(
      <div className="centered-div">
        <Students 
          students={this.props.students} 
          deleteStudent={this.props.deleteStudent}
          />
        <hr></hr>
        <StudentInput 
          addStudent={this.props.addStudent}
        />
        <p> </p>
      </div> 
    )
  }
}

// choose part of store / state to use in component
const mapStateToProps = state => ({ students: state.students })
const mapDispatchToProps = dispatch => {
  return {
    fetchStudents: () => {
      dispatch(fetchStudents())
    },
    addStudent: (student) => {
      dispatch(addStudent(student))
    },
    deleteStudent: (id) => {
      dispatch(deleteStudent(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage);