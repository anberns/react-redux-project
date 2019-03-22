import React, { Component }from 'react';
import { connect } from 'react-redux';
import fetchStudents from '../actions/fetchStudents'

class StudentsPage extends Component {
  componentDidMount() {
    this.props.fetchStudents()
  }
  render() {
    return(
     <div>
       <p>hi</p>
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