import React, { Component } from 'react';
import importedClasses from './ChoiceSelector.css';
import phonemeClasses from '../Components/Phoneme.css';
import Phoneme from '../Components/Phoneme';
import update from 'immutability-helper';
import Aux from './Aux';
import { connect } from 'react-redux';
import fetchPhonemes from '../actions/fetchPhonemes'
import Phonemes from '../Components/Phonemes'

class ChoiceSelector extends Component {
  
  render() {
    return (
      <Phonemes
      />
    )
  }
}


export default ChoiceSelector;