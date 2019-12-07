// Middleware for the server-rendering
import dotenv from 'dotenv';
dotenv.config();

import { printDrainHydrateMarks } from 'react-imported-component';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { isTablet } from 'react-device-detect';

import { setRuntimeVariable } from '~/store/actions/runtime';

import configureStore from '../src/store/configureStore';

import App from '../src/App';
import generateHtml from './generateHtml';

export default (req, res) => {
  const userAgent = req.get('User-Agent');

  let isMobile =
    /iPhone|Android|PlayBook|Kindle Fire|PalmSource|Palm|IEMobile|BB10/i.test(
      userAgent
    ) && !isTablet;

  // Generate the server-rendered HTML using the appropriate router
  const context = {};
  const store = configureStore(context);

  store.dispatch(setRuntimeVariable({ name: 'isMobile', value: isMobile }));

  const router = (
    <Provider store={store}>
      <StaticRouter location={req.originalUrl} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const markup = ReactDOM.renderToString(router);

  const preloadedState = store.getState();

  // If react-router is redirecting, do it on the server side
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // Format the HTML using the template and send the result
    const html = generateHtml(
      markup + printDrainHydrateMarks(),
      preloadedState
    );
    res.send(html);
  }
};
