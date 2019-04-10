import React, { Component } from 'react'
import { connect } from 'react-redux';
import Phoneme from '../Components/Phoneme'
import '../Components/Phonemes.css';

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
  loadInitialPhonemes= () => {
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

  // updates clicked phoneme card with next value from list
  updateSound = (soundIndex) => {
    const phonemes = [...this.state.phonemes];
    const positions = [...this.state.soundPositions];
    const phonemeLists = [...this.state.phonemeLists];
    const maxIndex = phonemeLists[soundIndex].list.length -1;
    if (positions[soundIndex].position < maxIndex) {
        positions[soundIndex].position++;
        phonemes[soundIndex].content = phonemeLists[soundIndex].list[positions[soundIndex].position];
        this.setState({phonemes: phonemes});
        this.setState({soundPositions: positions});
    }
  }

  // call setup functions
  startExchange = () => {
    this.loadPhonemes();
    this.shufflePhonemes();
    this.loadInitialSounds();
  }

  // handles v-e toggle button click by adding / subtracting "e" card to end
  eHandler = () => {
    const toggle = this.state.eToggle;
    const phonemes = [...this.state.phonemes];
    if (!toggle) {
        phonemes.push({ content: "e" });
    }
    else {
        phonemes.pop();
    }
    this.setState({phonemes: phonemes});
    this.setState({eToggle: !toggle});
  }

  render() {
    return (
      <React.fragment>
        <div className="selectorDivCenter">
            {this.state.phonemes.map((phoneme, index) => {
                return <Phoneme
                content={phoneme.content}
                className="Phoneme"
                vowel={phoneme.vowel}
                click={() => this.updateSound(index)}
                />
            })}
          </div>
      </React.fragment>
    )
  }
}

const mapStateToProps = state => ({
  chosenBeg: state.phonemes.chosenBeg,
  chosenMid: state.phonemes.chosenMid,
  chosenEnd: state.phonemes.chosenEnd 
})

export default connect(mapStateToProps)(RapidApp);