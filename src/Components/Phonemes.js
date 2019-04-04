import React, { Component } from 'react';
import Phoneme from './Phoneme';
import './Phonemes.css';

export default class Phonemes extends Component {
  state = {
    chosenAll: ["allB", "allM", "allE"],
    chosenBeg: [],
    chosenMid: [],
    chosenEnd: []
  }
  componentDidUpdate() {
    console.log(this.state)
  }
  phonemeClickHandler = (e) => {
    e.preventDefault();
    switch(e.target.name) {
      case "beg":
        if (this.state.chosenBeg.includes(e.target.id)) {
          this.setState({
            chosenBeg: [...this.state.chosenBeg.filter((el) => el !== e.target.id)]
          })
          e.target.className = "choice";
        } else {
          this.setState({
            chosenBeg: [...this.state.chosenBeg, e.target.id]
          })
          e.target.className = "chosenBeg";
        }
        break;
      case "mid":
        if (this.state.chosenMid.includes(e.target.id)) {
          this.setState({
            chosenMid: [...this.state.chosenMid.filter((el) => el !== e.target.id)]
          })
          e.target.className = "choice";
        } else {
          this.setState({
            chosenMid: [...this.state.chosenMid, e.target.id]
          })
          e.target.className = "chosenMid";
        }
        break;
      case "end":
        if (this.state.chosenEnd.includes(e.target.id)) {
          this.setState({
            chosenEnd: [...this.state.chosenEnd.filter((el) => el !== e.target.id)]
          })
          e.target.className = "choice";
        } else {
          this.setState({
            chosenEnd: [...this.state.chosenEnd, e.target.id]
          })
          e.target.className = "chosenEnd";
        }
        break;
      default:
        break;
    }      
  }

  render() {
    const phonemesArr = Object.values(this.props.phonemes)[0]
    const begList = createPhonemeList(phonemesArr, "beg", (event) => this.phonemeClickHandler(event))
    const midList = createPhonemeList(phonemesArr, "mid", (event) => this.phonemeClickHandler(event))
    const endList = createPhonemeList(phonemesArr, "end", (event) => this.phonemeClickHandler(event))

   
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



const createPhonemeList= ( arr, classification, click ) => {
  const list = arr.filter(phoneme => phoneme.classification === classification).map(phoneme => {
    return (
        <Phoneme
          classes="choice"
          id={phoneme.id}
          key={phoneme.id}
          characters={phoneme.characters}
          classification={phoneme.classification}
          click={click}
        />
    )
  })
  return list;
}