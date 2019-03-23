import React, { Component } from 'react';
import User from '../Components/User'
import '../Components/Student.css'
import { connect } from 'react-redux';
import fetchUser from '../actions/fetchUser'

class UserPage extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    return (
      <div className="centered-div">
        <User data={this.props.user}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({ user: state.user})
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id = 1) => {
      dispatch(fetchUser(id))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserPage);