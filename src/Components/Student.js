import React, { Component } from 'react';
import Phoneme from '../Phonemes/Phoneme'

export default class Student extends Component {

  render() {
    const phonemeList = this.props.phonemes.map(phoneme => {
      return (
        <Phoneme
          key={phoneme.id}
          characters={phoneme.characters}
        />
      )
    })
    return (
        <div >
          <h1>{this.props.name}</h1>
          <h2>{this.props.stage}</h2>
          <ul>{phonemeList}</ul>
        </div>
    )
  }
}