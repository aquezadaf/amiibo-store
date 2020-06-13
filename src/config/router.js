import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar'
import App from '../App';

export default () => (
    <BrowserRouter>
      <div>
        <NavigationBar />
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/cart">
            <App />
          </Route>
          <Route path="*">
            <App />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
);
