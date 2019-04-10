import React, { Component } from 'react'

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
        { list: [...this.state.chosenBeg] },
        { list: [...this.state.chosenMid]  },
        { list: [...this.state.chosenEnd] }
    ],
    // current index of displayed phoneme from phonemeLists
    soundPositions: [
        { position: 0 },
        { position: 0 },
        { position: 0 }
    ],
    eToggle: false // v-e card displayed
  }

  render() {
  
    return (
      />
    )
  }
}

export default RapidApp;