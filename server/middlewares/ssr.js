// src/server/middlewares/ssr.js
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { StaticRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { isTablet } from 'react-device-detect';

import { setRuntimeVariable } from '~/store/actions/runtime';

import matchRoute from './matchRoute';

import App from '~/App';
import routes from '~/routes';
import configureStore from '~/store/configureStore';

import tmpl from './tmpl';

import Html from '../../src/components/Html';

export default async (req, res, next) => {
  const userAgent = req.get('User-Agent');

  let isMobile =
    /iPhone|Android|PlayBook|Kindle Fire|PalmSource|Palm|IEMobile|BB10/i.test(
      userAgent
    ) && !isTablet;

  const { component, params } = matchRoute(req.path);
  if (!component) {
    return next();
  }

  const context = {};

  const store = configureStore();
  if (component.fetchData) {
    await component.fetchData(store.dispatch, params, req.query);
  }
  store.dispatch(setRuntimeVariable({ name: 'isMobile', value: isMobile }));
  const preloadedState = store.getState();

  const sheet = new ServerStyleSheet();
  const markup = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <CookiesProvider cookies={req.universalCookies}>
          <Router location={req.url} context={context}>
            <App />
          </Router>
        </CookiesProvider>
      </Provider>
    )
  );

  const helmet = Helmet.renderStatic();

  if (context.url) {
    return res.redirect(context.url);
  }

  const assets = tmpl({ markup, preloadedState, helmet });

  let html = '';
  try {
    html = ReactDOMServer.renderToStaticMarkup(
      <Html markup={markup} preloadedState={preloadedState} helmet={helmet} />
    );
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
  } catch (error) {
    console.error('ERROR: ', error);
  } finally {
    sheet.seal();
  }

  res.send(html.replace('</body>', `${assets}</body>`));
};
