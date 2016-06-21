import ReactDOM from 'react-dom';
import React from 'react';

import { Router, Route, browserHistory } from 'react-router';
import { connect, Provider } from 'react-redux';


import store from './store';

import HomePage from './pages/Home';
import Error404 from './pages/Error404';

store.incrementCounter();

const HomePageConnected = connect((store) => ({
  counter: store.counter,
  status: store.status
}), store.mapStoreToProps)(HomePage);

// ROUTES
const routes =
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={HomePageConnected}/>
        <Route path="*" component={Error404}/>
      </Router>
    </Provider>;

// Render
ReactDOM.render(routes, document.getElementById('main'));
