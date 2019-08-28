import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';
import withErrorHandler from '../WithErrorHandler/WithErrorHandler';


const INGRIDIENT_PRICES = {
    bacon: 0.5,
    salad: 0.4,
    meat: 1.3,
    cheese: 0.6
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ingridients: null,
            totalPrice: 0,
            purchasable: false,
            purchasing: false,
            loading: false,
            error: false
        };
    }

    componentDidMount() {
        axios.get('ingridients.json')
            .then(response => this.setState({ ingridients: response.data }))
            .catch(error => this.setState({error: error}))
    }

    updatePurchaseState(updIngridients) {
        const sum = Object.values(updIngridients).reduce((sum, el) => sum + el, 0);
        this.setState(prevState => ({ ...prevState, purchasable: sum > 0 }));
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updCount = oldCount + 1;
        const updIngridients = { ...this.state.ingridients };
        updIngridients[type] = updCount;

        const priceAdd = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAdd;
        this.setState(prevState => ({ ...prevState, ingridients: updIngridients, totalPrice: newPrice }));
        this.updatePurchaseState(updIngridients);
    }

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        if (oldCount === 0) {
            return;
        }
        const updCount = oldCount - 1;
        const updIngridients = { ...this.state.ingridients };
        updIngridients[type] = updCount;

        const priceDeduction = INGRIDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState(prevState => ({ ...prevState, ingridients: updIngridients, totalPrice: newPrice }));
        this.updatePurchaseState(updIngridients);
    }

    purchaseHandler = _ => {
        this.setState({ purchasing: true });
    }

    canclePurchaseHandler = _ => {
        this.setState({ purchasing: false });
    }

    continuePurchaseHandler = _ => {
        const queryParams = [];
        for (const key in this.state.ingridients) {
            queryParams.push(encodeURI(key) + '=' + encodeURI(this.state.ingridients[key]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: `?${queryString}`
        });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingridients
        };
        for (const key in disabledInfo) {
            if (disabledInfo.hasOwnProperty(key)) {
                disabledInfo[key] = disabledInfo[key] <= 0;
            }
        }
        let orderSummary = null;
        let burger = this.state.error ? <p style={{textAlign: 'center', fontWeight: 'bold', color: 'red'}}>Ingridients can't be loaded...</p> : <Spinner />;
        if (this.state.ingridients) {
            burger = (
                <Fragment>
                    <Burger ingridients={this.state.ingridients} />
                    <BuildControls addIng={this.addIngridientHandler}
                        removeIng={this.removeIngridientHandler}
                        disabledInfo={disabledInfo}
                        purchasable={this.state.purchasable}
                        price={Math.abs(this.state.totalPrice.toFixed(2))}
                        ordered={this.purchaseHandler}
                    />
                </Fragment>
            )
                orderSummary = (
                    <OrderSummary 
                        price={this.state.totalPrice.toFixed(2)}
                        cancel={this.canclePurchaseHandler}
                        continue={this.continuePurchaseHandler}
                        ingridients={this.state.ingridients} />
                )
        }
        
        if (this.state.loading) {
            orderSummary = <Spinner/>;
        }
        return (
            <Fragment>
                <Modal cancleOrder={this.canclePurchaseHandler} show={this.state.purchasing}>
                    {orderSummary}
                </Modal>
                     {burger}
            </Fragment>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);