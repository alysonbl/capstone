import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'reaact-redux';
import { createStore, applyMiddleware} from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers';

const createStonreWithMiddleware = applyMiddleware(window.devToolsExtension ? window.devToolsExtenstion() : f => f)(createStore);

//import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
 

import history from './history';

import Layout from './components/layout';

import dashboard from './components/dashboard';



function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
     <BrowserRouter>
        <Switch>
          <Layout>
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
