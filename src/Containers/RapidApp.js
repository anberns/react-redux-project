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
    // chosen phonemes for beg, mid, end respectively from redux store
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

  // copies first phoneme from each list to each phoneme box
  loadInitialSounds = () => {
    const phonemes = [...this.state.phonemes];
    phonemes[0].content = this.state.phonemeLists[0].list[0];
    phonemes[1].content = this.state.phonemeLists[1].list[0];
    phonemes[2].content = this.state.phonemeLists[2].list[0];
    this.setState({phonemes: phonemes}); 
  }

  // shuffle loads phoneme lists
  shufflePhonemes = () => {
    const phonemeLists = [...this.state.phonemeLists];
    for (let index = 0; index < phonemeLists.length; index++) {
        for (let i = phonemeLists[index].list.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = phonemeLists[index].list[i];
            phonemeLists[index].list[i] = phonemeLists[index].list[j];
            phonemeLists[index].list[j] = temp;
        }
    }
    this.setState({phonemeLists: phonemeLists});
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
  chosenBeg: state.phonemes.chosenBeg,
  chosenMid: state.phonemes.chosenMid,
  chosenEnd: state.phonemes.chosenEnd 
})

export default connect(mapStateToProps)(RapidApp);