import React from "react";
import serialize from "serialize-javascript";
import { string } from "prop-types";

export default function Html({ markup, preloadedState, helmet }) {
  const htmlAttrs = helmet.htmlAttributes.toComponent();
  const bodyAttrs = helmet.bodyAttributes.toComponent();
  return (
    <html {...htmlAttrs}>
      <head>
        {helmet.title.toComponent()}
        {helmet.meta.toComponent()}
        {helmet.link.toComponent()}
      </head>
      <body {...bodyAttrs}>
        <div id="main-app" dangerouslySetInnerHTML={{ __html: markup }}></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__=${serialize(preloadedState)}`
          }}
        />
      </body>
    </html>
  );
}

Html.propTypes = {
  markup: string.isRequired
};
