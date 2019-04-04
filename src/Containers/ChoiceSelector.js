import React, { Component } from 'react';
import importedClasses from './ChoiceSelector.css';
import phonemeClasses from '../Components/Phoneme.css';
import Phoneme from '../Components/Phoneme';
import update from 'immutability-helper';
import Aux from './Aux';
import { connect } from 'react-redux';
import fetchPhonemes from '../actions/fetchPhonemes'
import loadChosenPhonemes from '../actions/loadChosenPhonemes'
import Phonemes from '../Components/Phonemes'

class ChoiceSelector extends Component {
  componentDidMount() {
    this.props.fetchPhonemes();
  }
  render() {
    return (
      <Phonemes
        phonemes={this.props.phonemes} 
      />
    )
  }
}

const mapStateToProps = state => ({ phonemes: state.phonemes})
const mapDispatchToProps = dispatch => {
  return {
    fetchPhonemes: () => {
      dispatch(fetchPhonemes())
    },
    loadChosenPhonemes: (chosen) => {
      dispatch(loadChosenPhonemes(chosen))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChoiceSelector);