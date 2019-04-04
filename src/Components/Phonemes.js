import React, { Component } from 'react';
import Phoneme from './Phoneme';
import './Phonemes.css';

export default class Phonemes extends Component {
  render() {
    const phonemesArr = Object.values(this.props.phonemes)[0]
    const begList = createPhonemeList(phonemesArr, "beg")
    const midList = createPhonemeList(phonemesArr, "mid")
    const endList = createPhonemeList(phonemesArr, "end")
    return (
      <React.Fragment>
        <div className="selectorDivCenter">
          <Phoneme
            classes="allBeg"
            id="allB"
            characters="Select All Beginning Sounds" 
          />
        </div>
        <div className="choiceDiv">
          {begList}
        </div>
        <div className="selectorDivCenter">
          <Phoneme
            classes="allMid"
            id="allM"
            characters="Select All Middle Sounds" 
          />
        </div>
        <div className="choiceDiv">
          {midList}
        </div>
        <div className="selectorDivCenter">
          <Phoneme
            classes="allEnd"
            id="allE"
            characters="Select All Ending Sounds" 
          />
        </div>
        <div className="choiceDiv">
          {endList}
        </div>
      </React.Fragment>
    )
  }
}

const createPhonemeList= ( arr, classification ) => {
  const list = arr.filter(phoneme => phoneme.classification === classification).map(phoneme => {
    return (
        <Phoneme
          classes="choice"
          id={phoneme.id}
          key={phoneme.id}
          characters={phoneme.characters}
          classification={phoneme.classification}
        />
    )
  })
  return list;
}