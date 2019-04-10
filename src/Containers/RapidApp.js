import React, { Component } from 'react'
import { connect } from 'react-redux';

class RapidApp extends Component {

  state = {
    // phoneme cards that display beg, mid, end phonemes respectively
    phonemes: [
      { content: "", vowel: false },
      { content: "", vowel: true },
      { content: "", vowel: false }
    ],
    // chosen phonemes for beg, mid, end respectively
    phonemeLists: [
        { list: this.props.chosenBeg },
        { list: this.props.chosenMid  },
        { list: this.props.chosenEnd }
    ],
    // current index of displayed phoneme from phonemeLists
    soundPositions: [
        { position: 0 },
        { position: 0 },
        { position: 0 }
    ],
    eToggle: false // v-e card displayed
  }
  componentDidMount() {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        Hi
      </div>
    )
  }
}

const mapStateToProps = state => ({
  phonemes: state.phonemes.phonemes,
  chosenBeg: state.phonemes.chosenBeg,
  chosenMid: state.phonemes.chosenMid,
  chosenEnd: state.phonemes.chosenEnd 
})

export default connect(mapStateToProps)(RapidApp);