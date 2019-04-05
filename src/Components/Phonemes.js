import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import addPhonemeChoices from '../actions/addPhonemeChoices'
import Phoneme from './Phoneme';
import './Phonemes.css';

class Phonemes extends Component {
  state = {
    chosenAll: []
  }

  phonemeClickHandler = (e) => {
    e.preventDefault();
    switch(e.target.name) {
      case "beg":
        if (this.props.chosenBeg.includes(e.target.id)) {
          this.addChosenPhonemes([e.target.id], "beg")
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

  selectAllClickHandler = (e) => {
    e.preventDefault();
    switch(e.target.id) {
      case "allB":
        let pids = Object.values(this.props.phonemes)[0].filter((el) => el.classification === "beg")
        let ids = pids.map((el) => el.id.toString());
        if (this.state.chosenAll.includes(e.target.id)) {
          for (const i of ids) {
            document.getElementById(i).className = "choice"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll.filter((el) => el !== e.target.id)],
            chosenBeg: []
          })
        } else {
          for (const i of ids) {
            document.getElementById(i).className = "chosenBeg"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll, e.target.id],
            chosenBeg: [...this.state.chosenBeg, ...ids]
          })
        }
        break;
      case "allM":
        pids = Object.values(this.props.phonemes)[0].filter((el) => el.classification === "mid")
        ids = pids.map((el) => el.id.toString());
        if (this.state.chosenAll.includes(e.target.id)) {
          for (const i of ids) {
            document.getElementById(i).className = "choice"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll.filter((el) => el !== e.target.id)],
            chosenMid: []
          })
        } else {
          for (const i of ids) {
            document.getElementById(i).className = "chosenMid"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll, e.target.id],
            chosenMid: [...this.state.chosenMid, ...ids]
          })
        }
        break;
      case "allE":
        pids = Object.values(this.props.phonemes)[0].filter((el) => el.classification === "end")
        ids = pids.map((el) => el.id.toString());
        if (this.state.chosenAll.includes(e.target.id)) {
          for (const i of ids) {
            document.getElementById(i).className = "choice"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll.filter((el) => el !== e.target.id)],
            chosenEnd: []
          })
        } else {
          for (const i of ids) {
            document.getElementById(i).className = "chosenEnd"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll, e.target.id],
            chosenEnd: [...this.state.chosenEnd, ...ids]
          })
        }
        break; 
      default:
        break;
    }      
  }

  startClickHandler(e) {
    e.preventDefault()
    
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
            click={(event) => this.selectAllClickHandler(event)}
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
            click={(event) => this.selectAllClickHandler(event)}
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
            click={(event) => this.selectAllClickHandler(event)}
          />
        </div>
        <div className="choiceDiv">
          {endList}
        </div>
        <div className="selectorDivCenter">
            <button onClick={(event) => this.startClickHandler(event)} className="ownButton">Start</button>
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

const mapStateToProps = state => ({
  chosenBeg: state.chosenBeg,
  chosenMid: state.chosendMid,
  chosenEnd: state.chosenEnd 
})
const mapDispatchToProps = dispatch => {
  return {
    loadPhonemeChoices: (chosen, stage) => {
      dispatch(addPhonemeChoices(chosen, stage))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Phonemes);