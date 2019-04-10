import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
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
          this.props.removePhonemeChoices([e.target.id], "beg")
          e.target.className = "choice";
        } else {
          this.props.addPhonemeChoices([e.target.id], "beg")
          e.target.className = "chosenBeg";
        }
        break;
      case "mid":
        if (this.props.chosenMid.includes(e.target.id)) {
          this.props.removePhonemeChoices([e.target.id], "mid")
          e.target.className = "choice";
        } else {
          this.props.addPhonemeChoices([e.target.id], "mid")
          e.target.className = "chosenMid";
        }
        break;
      case "end":
        if (this.props.chosenEnd.includes(e.target.id)) {
          this.props.removePhonemeChoices([e.target.id], "end")
          e.target.className = "choice";
        } else {
          this.props.addPhonemeChoices([e.target.id], "end")
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
        let pids = Object.values(this.props.phonemes).filter((el) => el.classification === "beg")
        let ids = pids.map((el) => el.id.toString());
        if (this.state.chosenAll.includes(e.target.id)) {
          for (const i of ids) {
            document.getElementById(i).className = "choice"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll.filter((el) => el !== e.target.id)],
          })
          this.props.removePhonemeChoices(ids, "beg")
        } else {
          for (const i of ids) {
            document.getElementById(i).className = "chosenBeg"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll, e.target.id],
          })
          this.props.addPhonemeChoices(ids, "beg")
        }
        break;
      case "allM":
        pids = Object.values(this.props.phonemes).filter((el) => el.classification === "mid")
        ids = pids.map((el) => el.id.toString());
        if (this.state.chosenAll.includes(e.target.id)) {
          for (const i of ids) {
            document.getElementById(i).className = "choice"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll.filter((el) => el !== e.target.id)],
          })
          this.props.removePhonemeChoices(ids, "mid")
        } else {
          for (const i of ids) {
            document.getElementById(i).className = "chosenMid"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll, e.target.id],
          })
          this.props.addPhonemeChoices(ids, "mid")
        }
        break;
      case "allE":
        pids = Object.values(this.props.phonemes).filter((el) => el.classification === "end")
        ids = pids.map((el) => el.id.toString());
        if (this.state.chosenAll.includes(e.target.id)) {
          for (const i of ids) {
            document.getElementById(i).className = "choice"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll.filter((el) => el !== e.target.id)],
          })
          this.props.removePhonemeChoices(ids, "end")
        } else {
          for (const i of ids) {
            document.getElementById(i).className = "chosenEnd"
          }
          this.setState({
            chosenAll: [...this.state.chosenAll, e.target.id],
          })
          this.props.addPhonemeChoices(ids, "end")
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
    const phonemesArr = this.props.phonemes
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
          <NavLink 
            to={"/rapid_app"}
            exact
            >
              <button className="ownButton">Start</button>
              </NavLink>
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
  phonemes: state.phonemes.phonemes,
  chosenBeg: state.phonemes.chosenBeg,
  chosenMid: state.phonemes.chosenMid,
  chosenEnd: state.phonemes.chosenEnd 
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