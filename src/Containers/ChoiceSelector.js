import React, { Component } from 'react';
import importedClasses from './ChoiceSelector.css';
import phonemeClasses from '../../components/Phoneme/Phoneme.css';
import Phoneme from '../../components/Phoneme/Phoneme.js';
import update from 'immutability-helper';
import Aux from '../../hoc/Aux/Aux';

class ChoiceSelector extends Component {
    state = {
        // all phoneme choices
        choices: [
             { id: "1", content: "b" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "2", content: "c" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "3", content: "ch" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "4", content: "d" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "5", content: "f" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "6", content: "g" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "7", content: "h" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "8", content: "j" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "9", content: "k" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "10", content: "l" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "11", content: "m" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "12", content: "n" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "13", content: "p" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "14", content: "qu" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "15", content: "r" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "16", content: "s" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "17", content: "sh" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "18", content: "t" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "19", content: "th" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "20", content: "v" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "21", content: "w" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "22", content: "wh" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "23", content: "y" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "24", content: "z" , clicked: false, type: "beg", currentClass: phonemeClasses.choice}, 
             { id: "25", content: "a" , clicked: false, type: "mid", currentClass: phonemeClasses.choice}, 
             { id: "26", content: "e" , clicked: false, type: "mid", currentClass: phonemeClasses.choice}, 
             { id: "27", content: "i" , clicked: false, type: "mid", currentClass: phonemeClasses.choice}, 
             { id: "28", content: "o" , clicked: false, type: "mid", currentClass: phonemeClasses.choice}, 
             { id: "29", content: "u" , clicked: false, type: "mid", currentClass: phonemeClasses.choice}, 
             { id: "30", content: "ai" , clicked: false, type: "mid", currentClass: phonemeClasses.choice}, 
             { id: "31", content: "ea" , clicked: false, type: "mid", currentClass: phonemeClasses.choice}, 
             { id: "32", content: "ee" , clicked: false, type: "mid", currentClass: phonemeClasses.choice}, 
             { id: "33", content: "oa" , clicked: false, type: "mid", currentClass: phonemeClasses.choice}, 
             { id: "34", content: "oo" , clicked: false, type: "mid", currentClass: phonemeClasses.choice}, 
             { id: "35", content: "b" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "36", content: "ck" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "37", content: "d" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "38", content: "ff" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "39", content: "g" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "40", content: "ll" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "41", content: "m" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "42", content: "n" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "43", content: "p" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "44", content: "ss" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "45", content: "t" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "46", content: "w" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "47", content: "x" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
             { id: "48", content: "zz" , clicked: false, type: "end", currentClass: phonemeClasses.choice}, 
         ],
        // phoneme cards that display beg, mid, end phonemes respectively
        phonemes: [
            { content: "", vowel: false },
            { content: "", vowel: true },
            { content: "", vowel: false }
        ],
        // chosen phonemes for beg, mid, end respectively
        phonemeLists: [
            { list: [] },
            { list: [] },
            { list: [] }
        ],
        // current index of displayed phoneme from phonemeLists
        soundPositions: [
            { position: 0 },
            { position: 0 },
            { position: 0 }
        ],
        started: false,
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
    
    // adds phonemes with .clicked = true to appropriate list based on id
    loadPhonemes = () => {
        const phonemes = [...this.state.choices];
        const lists = [...this.state.phonemeLists];

        for (let i = 0; i < phonemes.length; i++) {
            if (phonemes[i].clicked) {
                if (phonemes[i].type === "beg") {
                    lists[0].list.push(phonemes[i].content);
                } else if (phonemes[i].type === "mid") {
                    lists[1].list.push(phonemes[i].content);
                } else if (phonemes[i].type === "end") {
                    lists[2].list.push(phonemes[i].content);
                }
            }
        }
        this.setState({phonemeLists: lists});
    }

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


    // sets started flag, calls initial load functions
    startExchange = () => {
        this.setState({started: true});
        this.loadPhonemes();
        this.shufflePhonemes();
        this.loadInitialSounds();
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

    // changes phoneme class to chosen, .clicked to true for clicked card in
    // setup
    chooseSound = (event) => {
        const id = event.target.id;
        const phonemes = [...this.state.choices];
        let newState;
        let index = phonemes.findIndex((phoneme) => {return phoneme.id === id});
        if (index > -1) {
            if (phonemes[index].clicked === false) {
                if (phonemes[index].type === 'beg') {
                    newState = update(this.state.choices[index], {
                        clicked: {$set: true},
                        currentClass: {$set: phonemeClasses.chosenBeg}
                    });
                } else if (phonemes[index].type === 'mid') {
                    newState = update(this.state.choices[index], {
                        clicked: {$set: true},
                        currentClass: {$set: phonemeClasses.chosenMid}
                    });
                } else {
                    newState = update(this.state.choices[index], {
                        clicked: {$set: true},
                        currentClass: {$set: phonemeClasses.chosenEnd}
                    }); 
                }
            } else {
                newState = update(this.state.choices[index], {
                    clicked: {$set: false},
                    currentClass: {$set: phonemeClasses.choice}
                });
            }
        }        
        phonemes[index] = newState;
        this.setState({choices: phonemes});
    }

    chooseAll(event) {
        const phonemes = [...this.state.choices];
        let newState;

        for (let i = 0; i < phonemes.length; i++) {
            if (event.target.id === "allBeg") {
                if (phonemes[i].type === "beg") {
                    if (phonemes[i].clicked === false) {
                        newState = update(this.state.choices[i], {
                            clicked: {$set: true},
                            currentClass: {$set: phonemeClasses.chosenBeg},
                        });
                    } else if (phonemes[i].clicked === true) {
                        newState = update(this.state.choices[i], {
                            clicked: {$set: false},
                            currentClass: {$set: phonemeClasses.choice},
                        });
                    }
                    phonemes[i] = newState;
                    this.setState({choices: phonemes});
                }
            } else if (event.target.id === "allMid") {
                if (phonemes[i].type === "mid") {
                    if (phonemes[i].clicked === false) {
                        newState = update(this.state.choices[i], {
                            clicked: {$set: true},
                            currentClass: {$set: phonemeClasses.chosenMid},
                        });
                    } else if (phonemes[i].clicked === true) {
                        newState = update(this.state.choices[i], {
                            clicked: {$set: false},
                            currentClass: {$set: phonemeClasses.choice},
                        });
                    }
                    phonemes[i] = newState;
                    this.setState({choices: phonemes});
                }
             } else if (event.target.id === "allEnd") {
                if (phonemes[i].type === "end") {
                    if (phonemes[i].clicked === false) {
                        newState = update(this.state.choices[i], {
                            clicked: {$set: true},
                            currentClass: {$set: phonemeClasses.chosenEnd},
                        });
                    } else if (phonemes[i].clicked === true) {
                        newState = update(this.state.choices[i], {
                            clicked: {$set: false},
                            currentClass: {$set: phonemeClasses.choice},
                        });
                    }
                    phonemes[i] = newState;
                    this.setState({choices: phonemes});
                }
             }
        }
    }

    // need way to choose all in category without flipping back and forth on
    // individual tiles
    // need to randomize selections
    // endings handler/ button, checks for magic e, remove each other


  render() {

      let startButton = null;
      let choices = null;
      let phonemes = null;
      let eButton = null;
      let choiceClass = phonemeClasses.choice;
      
      if (!this.state.started) {
            
          const choicesCopy = [...this.state.choices];
          let begSounds = [];
          let midSounds = []; 
          let endSounds = [];

          // copy beginning sounds
          for (let i = 0; i < choicesCopy.length; i++) {
              if (choicesCopy[i].type === "beg") {
                begSounds.push(choicesCopy[i]);
            } else if (choicesCopy[i].type === "mid") {
                midSounds.push(choicesCopy[i]);
            } else if (choicesCopy[i].type === "end") {
                endSounds.push(choicesCopy[i]);
            }
          }

          choices = (
            <Aux>
                <br></br>
                <br></br>
                <div className={importedClasses.selectorDivCenter}>
                    <Phoneme
                        content="Select All Beginning Sounds"
                        className={phonemeClasses.allBeg}
                        id="allBeg"
                        click={(event) => this.chooseAll(event)}
                    />
                </div>
                <div className={importedClasses.selectorDivCenter}>
                    {begSounds.map((choice, index) => {
                        return <Phoneme
                        className={choice.currentClass}
                        content={choice.content}
                        value={choice.content}
                        id={choice.id}
                        click={(event) => this.chooseSound(event)}
                        />
                    })}
                </div>
                <br></br>
                <br></br>
                <div className={importedClasses.selectorDivCenter}>
                    <Phoneme
                        content="Select All Middle Sounds"
                        className={phonemeClasses.allMid}
                        id="allMid"
                        click={(event) => this.chooseAll(event)}
                    />
                </div>
                <div className={importedClasses.selectorDivCenter}>
                    {midSounds.map((choice, index) => {
                        return <Phoneme
                        className={choice.currentClass}
                        content={choice.content}
                        value={choice.content}
                        id={choice.id}
                        click={(event) => this.chooseSound(event)}
                        />
                    })}
                </div>
                <br></br>
                <br></br>
                <div className={importedClasses.selectorDivCenter}>
                    <Phoneme
                        content="Select All Ending Sounds"
                        className={phonemeClasses.allEnd}
                        id="allEnd"
                        click={(event) => this.chooseAll(event)}
                    />
                </div>
                <div className={importedClasses.selectorDivCenter}>
                    {endSounds.map((choice, index) => {
                        return <Phoneme
                        className={choice.currentClass}
                        content={choice.content}
                        value={choice.content}
                        id={choice.id}
                        click={(event) => this.chooseSound(event)}
                        />
                    })}
                </div>
            </Aux>
        );

          startButton = (
          <div className={importedClasses.selectorDivCenter}>
            <button onClick={this.startExchange} className={importedClasses.ownButton}>Start</button>
          </div>
        );
      }

      if (this.state.started) {
          phonemes = (
          <div className={importedClasses.selectorDivCenter}>
            {this.state.phonemes.map((phoneme, index) => {
                return <Phoneme
                content={phoneme.content}
                className={phonemeClasses.Phoneme}
                vowel={phoneme.vowel}
                click={() => this.updateSound(index)}
                />
            })}
          </div>
        );
        eButton = (
            <div className={importedClasses.selectorDivCenter}>
                <button onClick={this.eHandler} className={importedClasses.ownButton}>v-e</button>
            </div>
      );
        
      }
    return (
        <Aux>
            <div >
                {choices}
            </div>
            <br></br><br></br>
            <div>
                {startButton}
            </div>
            <div>
                {phonemes}
            </div>
            <div>
                {eButton}
            </div>
      </Aux>
    );
  }
}

export default ChoiceSelector;