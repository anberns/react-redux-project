import React, { Component } from 'react';
import Phoneme from './Phoneme';

export default class Phonemes extends Component {
  render() {
    const phonemesArr = Object.values(this.props.phonemes)[0]
    const begList = phonemesArr.filter(phoneme => phoneme.classification === "beg")
    const midList = phonemesArr.filter(phoneme => phoneme.classification === "mid")
    const endList = phonemesArr.filter(phoneme => phoneme.classification === "end")
    const phonemeList = phonemesArr.map(phoneme => {
      return (
        <div>
          <Phoneme
            id={phoneme.id}
            key={phoneme.id}
            characters={phoneme.characters}
            classification={phoneme.classification}
          />
        </div>
      )
    })
    return (
    <ul>
      {phonemeList}
    </ul>
    )
  }
}