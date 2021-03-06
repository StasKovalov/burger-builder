import React, {Fragment} from 'react';
import './OrderSummary.js';
import Button from '../../UI/Button/Button';

const orderSummary = props => {
    const ingridientSummary = Object.keys(props.ingridients)
        .map(ingKey => (
            <li key={ingKey}>
                <span style={{textTransform: "uppercase"}}>{ingKey}:</span>{props.ingridients[ingKey]}
            </li>
        ))
    return (
        <Fragment>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingridients:</p>
            <ul>
                {ingridientSummary}
            </ul>
            <p><strong>Total price: {props.price}$</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked = {props.cancel} btnType = 'danger'>CANCEL</Button>
            <Button clicked = {props.continue} btnType = 'success'>CONTINUE</Button>
        </Fragment>
    )
}

export default orderSummary;