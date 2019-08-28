import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = props => (
    <div className='build-controls'>
        <p>Current Price: <strong>{props.price}$</strong></p>
        {controls.map(control => <BuildControl  key={control.label}
                                                label={control.label}
                                                added={() => props.addIng(control.type)}
                                                removed={() => props.removeIng(control.type)}
                                                disabled = {props.disabledInfo[control.type]} />)}
    <button disabled = {!props.purchasable} 
            className = 'order-button'
            onClick = {props.ordered}>ORDER NOW</button>
    </div>
  
);


export default buildControls;