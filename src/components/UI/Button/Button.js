import React from 'react';
import './Button.css';

const button = props => (
    <button disabled = {props.disabled}
            onClick = {props.clicked} 
            className = {['button', props.btnType].join(' ')}>
        {props.children}
    </button>
)

export default button;