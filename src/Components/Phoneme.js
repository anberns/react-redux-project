import React from 'react';
import './Phoneme.css';

const phoneme = (props) => {

    return (
        <button className="choice" id={props.id} value={props.characters} >{props.characters} </button>
    );
}

export default phoneme;