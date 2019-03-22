import React, { Component }from 'react';
import { connect } from 'react-redux';
import fetchStudents from '../actions/fetchStudents'
import Students from '../Components/Students'
import StudentInput from '../Components/Students'

class StudentsPage extends Component {
  componentDidMount() {
    this.props.fetchStudents()
  }
  render() {
    return(
      <div >
        <Students 
          students={this.props.students} 
          />
        <hr></hr>
        <StudentInput />
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
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(StudentsPage);