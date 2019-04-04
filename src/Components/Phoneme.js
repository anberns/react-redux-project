import React from 'react';
import './Phoneme.css';
import './Phonemes.css';

const phoneme = (props) => {

    return (
        <button className={props.classes} id={props.id} value={props.characters} >{props.characters} </button>
    );
}

export default phoneme;