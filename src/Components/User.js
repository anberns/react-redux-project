import React, { Component } from 'react';

export default class User extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.email}</h2>
      </div>
    )
  }
}