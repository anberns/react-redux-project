import React from 'react';
import './Phoneme.css';
import './Phonemes.css';

const phoneme = (props) => {

    return (
        <button name={props.classification} className={props.classes} id={props.id} value={props.characters} onClick={props.click} >{props.characters} </button>
    );
}

export default phoneme;