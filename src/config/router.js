import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import App from '../App';

export default () => (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>

        <hr />

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
