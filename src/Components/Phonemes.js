import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchPhonemes from '../actions/fetchPhonemes'
import addPhonemeChoices from '../actions/addPhonemeChoices'
import removePhonemeChoices from '../actions/removePhonemeChoices'
import Phoneme from './Phoneme';
import './Phonemes.css';

class Phonemes extends Component {
  state = {
    chosenAll: []
  }
  componentDidMount() {
    this.props.fetchPhonemes();
  }

  phonemeClickHandler = (e) => {
    e.preventDefault();
    switch(e.target.name) {
      case "beg":
        if (this.props.chosenBeg.includes(e.target.id)) {
          this.removeChosenPhonemes([e.target.id], "beg")
          e.target.className = "choice";
        } else {
          this.addChosenPhonemes([e.target.id], "beg")
          e.target.className = "chosenBeg";
        }
        break;
      case "mid":
        if (this.props.chosenMid.includes(e.target.id)) {
          this.removeChosenPhonemes([e.target.id], "mid")
          e.target.className = "choice";
        } else {
          this.addChosenPhonemes([e.target.id], "mid")
          e.target.className = "chosenMid";
        }
        break;
      case "end":
        if (this.props.chosenEnd.includes(e.target.id)) {
          this.removeChosenPhonemes([e.target.id], "end")
          e.target.className = "choice";
        } else {
          this.addChosenPhonemes([e.target.id], "end")
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
    console.log("start")
    
  }

  render() {
    console.log(this.props.phonemes)
    const phonemesArr = Object.values(this.props.phonemes)[0]
    console.log(phonemesArr)
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
  phonemes: state.phonemes,
  chosenBeg: state.chosenBeg,
  chosenMid: state.chosendMid,
  chosenEnd: state.chosenEnd 
})
const mapDispatchToProps = dispatch => {
  return {
    fetchPhonemes: () => {
      dispatch(fetchPhonemes())
    },
    addPhonemeChoices: (chosen, stage) => {
      dispatch(addPhonemeChoices(chosen, stage))
    },
    removePhonemeChoices: (chosen, stage) => {
      dispatch(removePhonemeChoices(chosen, stage))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Phonemes);