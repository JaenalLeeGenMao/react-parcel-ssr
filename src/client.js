// Entry point for the browser
// Start your React application and add the required containers
// Here we have <BrowserRouter /> for react-router
import { rehydrateMarks } from 'react-imported-component';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import importedComponents from './imported'; // eslint-disable-line

import App from './App';

import configureStore from '../src/store/configureStore';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

const element = document.getElementById('app');
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// In production, we want to hydrate instead of render
// because of the server-rendering
rehydrateMarks().then(() => {
  ReactDOM.hydrate(app, element);
});

// Hot reload is that easy with Parcel
if (module.hot) {
  module.hot.accept();
}
