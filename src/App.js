import React from 'react';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route } from 'react-router-dom';
import Orders from './containers/Checkout/Orders/Orders';


const App = () => (
  <Layout>
    <Route path='/' exact component={BurgerBuilder} />
    <Route path='/checkout' component={Checkout} />
    <Route path='/orders' component={Orders} />
  </Layout>
)

export default App;
