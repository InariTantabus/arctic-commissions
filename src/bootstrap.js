import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import {Router, Switch, Route } from 'react-router-dom';

import "./style/main.scss";

import history from './history';

import Store from './components/store';
import Contact from "./components/contact";
import Tos from "./components/tos";
import Examples from "./components/examples";


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <App>
          <Switch>
            <Route path='/' exact component={Store} />
            <Route path='/commissions' component={Store} />
            <Route path='/contact' component={Contact} />
            <Route path='/tos' component={Tos} />
            <Route path='/examples' component={Examples} />
          </Switch>
        </App>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
