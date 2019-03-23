import React, { Component } from 'react';
import './Student.css'

export default class User extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }
  render() {
    return (
      <div className="centered-div">
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
      </div>
    )
  }
}