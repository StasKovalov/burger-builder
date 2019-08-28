import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingridients: null,
            totalPrice: null
        }
    }

    componentWillMount () {
        const qeury = new URLSearchParams(this.props.location.search);
        const ingridients = {};
        let price = 0;
        for (const iterator of qeury.entries()) {
            if(iterator[0] === 'price') {
                price = iterator[1]
            } else {
                ingridients[iterator[0]] = +iterator[1];
            }
        }
        this.setState({ingridients, totalPrice: price });
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }


    checkoutContinueHandler = () => {
        this.props.history.push('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                checkoutContinue = {this.checkoutContinueHandler}
                checkoutCancel = {this.checkoutCancelHandler}
                ingridients = {this.state.ingridients}/>
                <Route exact 
                       path={`${this.props.match.path}/contact-data`} 
                       render = {() => (<ContactData  price = {this.state.totalPrice}
                                                      ingridients = {this.state.ingridients}/>)}/>
            </div>
        )
    }
}

export default  Checkout;