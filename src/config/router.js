import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar'
import ProductScreenContainer from '../containers/ProductScreenContainer';
import CheckoutScreenContainer from '../containers/CheckoutScreenContainer';

export default () => (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <ProductScreenContainer />
          </Route>
          <Route path="/checkout">
            <CheckoutScreenContainer />
          </Route>
          <Route path="*">
            <ProductScreenContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
);
