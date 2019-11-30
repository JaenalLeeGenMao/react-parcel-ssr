// src/client.js
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router } from 'react-router-dom';

import App from '~/App';
import configureStore from './store/configureStore';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

const app = (
  <Provider store={store}>
    <CookiesProvider>
      <Router>
        <App />
      </Router>
    </CookiesProvider>
  </Provider>
);

const element = document.getElementById('main-app');

if (
  process.env.NODE_ENV === 'production' ||
  process.env.REACT_APP_ENV === 'production'
) {
  ReactDOM.hydrate(app, element);
} else {
  ReactDOM.render(app, element);
}

if (module.hot) {
  module.hot.dispose(function() {
    console.log('module.hot.dispose');
    // module is about to be replaced
  });

  module.hot.accept(function() {
    // module or one of its dependencies was just updated
    console.log('module.hot.accept');
  });
}
