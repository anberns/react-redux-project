import React, { Component }from 'react';
import { connect } from 'react-redux';
import fetchStudents from '../actions/fetchStudents'
import Students from '../Components/Students'

class StudentsPage extends Component {
  componentDidMount() {
    this.props.fetchStudents()
  }
  render() {
    console.log(this.props.students)
    return(
      <div >
        <Students 
          students={this.props.students} 
          />
        <hr></hr>
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