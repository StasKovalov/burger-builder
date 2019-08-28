import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className='checkout-summary'>
            <h1>We hope it tastes well!</h1>
            <div style={{margin: 'auto'}}>
                <Burger ingridients = {props.ingridients}/>
                <Button 
                    btnType = 'danger'
                    clicked = {props.checkoutCancel}>
                    CANCEL</Button>
                <Button 
                    btnType = 'success'
                    clicked = {props.checkoutContinue}>
                    CONTINUE</Button>
            </div>
        </div>
    )
}


export default checkoutSummary;