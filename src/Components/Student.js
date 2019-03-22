import React, { Component } from 'react';

export default class Student extends Component {

  render() {
    
    return (
        <div >
          <h1>{this.props.name}</h1>
          <h2>{this.props.stage}</h2>
        </div>
    )
  }
}