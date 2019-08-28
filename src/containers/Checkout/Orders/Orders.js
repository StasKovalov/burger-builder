import React, { Component, Fragment } from 'react'
import Order from '../../../components/Order/Order';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            loading: true
        }
    }

    componentDidMount() {
        axios.get('orders.json')
            .then(res => {
                let fetchedArray = [];
                for (const key in res.data) {
                    fetchedArray.push({
                        ...res.data[key],
                        id: key
                    })
                }
                this.setState({orders: fetchedArray, loading: false})
            })


    }

    render() {
        console.log(this.state.orders);
        let orders = this.state.orders.map(order => <Order key = {order.id}
                                                           price = {+order.price}
                                                           ingridients = {order.ingridients}/>)

        if (this.state.loading) {
            orders = <Spinner/>
        }
        return (
            <Fragment>
                {orders}
            </Fragment>
        )
    }
}


export default Orders;