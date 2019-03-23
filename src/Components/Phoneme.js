import React from 'react';
import importedClasses from './Phoneme.css';

const phoneme = (props) => {

    return (
        <button className={props.className} id={props.id} value={props.content} onClick={props.click}>{props.content}</button>
    );
}

export default phoneme;