import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar'
import ProductScreenContainer from '../containers/ProductScreenContainer';
import CheckoutScreen from '../screens/Checkout';

export default () => (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <ProductScreenContainer />
          </Route>
          <Route path="/checkout">
            <CheckoutScreen />
          </Route>
          <Route path="*">
            <ProductScreenContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
);
