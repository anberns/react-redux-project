import React, { Component } from 'react';
import importedClasses from './ChoiceSelector.css';
import phonemeClasses from '../Components/Phoneme.css';
import Phoneme from '../Components/Phoneme';
import update from 'immutability-helper';
import Aux from './Aux';
import { connect } from 'react-redux';
import fetchPhonemes from '../actions/fetchPhonemes'

class ChoiceSelector extends Component {
  render() {
    return (
      <p>Placeholder</p>
    )
  }
}

const mapStateToProps = state => ({ phonemes: state.phonemes})
const mapDispatchToProps = dispatch => {
  return {
    fetchPhonemes: () => {
      dispatch(fetchPhonemes())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChoiceSelector);