import React from 'react';
import importedClasses from './Phoneme.css';

const phoneme = (props) => {

    return (
        <button id={props.id} value={props.characters} >{props.characters} - {props.classification}</button>
    );
}

export default phoneme;