// Middleware for the server-rendering

import { printDrainHydrateMarks } from 'react-imported-component';
import React from 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../src/App';
import generateHtml from './generateHtml';

export default (req, res) => {
  // Generate the server-rendered HTML using the appropriate router
  const context = {};
  const router = <StaticRouter location={req.originalUrl} context={context}><App /></StaticRouter>;
  const markup = ReactDOM.renderToString(router);

  // IMPORTANT: redux implementation comming soong
  // const pathSplit = req.path.split('/')
  // const firstPath = pathSplit.length > 1 ? pathSplit[1] : ''
  // if(firstPath === 'articles') console.log('this is articles page')
  // store.dispatch(runtime({}))
  // req.path === home

  // If react-router is redirecting, do it on the server side
  if (context.url) {
    res.redirect(301, context.url);
  } else {
    // Format the HTML using the template and send the result
    const html = generateHtml(markup + printDrainHydrateMarks());
    res.send(html);
  }
};
