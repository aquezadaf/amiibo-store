import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar'
import ProductScreenContainer from '../containers/ProductScreenContainer';

export default () => (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <ProductScreenContainer />
          </Route>
          <Route path="/checkout">
            <ProductScreenContainer />
          </Route>
          <Route path="*">
            <ProductScreenContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
);
