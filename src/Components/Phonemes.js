import React, { Component } from 'react';
import Phoneme from './Phoneme';

export default class Phonemes extends Component {
  render() {
    const phonemesArr = Object.values(this.props.phonemes)[0]
    const begList = createPhonemeList(phonemesArr, "beg")
    const midList = createPhonemeList(phonemesArr, "mid")
    const endList = createPhonemeList(phonemesArr, "end")
    return (
      <ul>
        {begList}
        {midList}
        {endList}
      </ul>
    )
  }
}

const createPhonemeList= ( arr, classification ) => {
  const list = arr.filter(phoneme => phoneme.classification === classification).map(phoneme => {
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
  return list;
}