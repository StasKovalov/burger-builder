import React from 'react';
import './Order.css';

const order = props => {
    let ingridients = [];
        for (const key in props.ingridients) {
            ingridients.push(<span key = {key} 
                                   className = 'ingridient'>{key}: {props.ingridients[key]}</span>)
        }
    return (
        <div className='order'>
            <p>Ingridients: {ingridients}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )

}

export default order;