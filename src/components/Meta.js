import React, { Component } from 'react';

import { Helmet } from 'react-helmet';

class Header extends Component {
  render() {
    const {
        title,
        description,
        url,
        styles,
        scripts,
        app,
        children,
        imageUrl,
        keywords = '',
        twitter_card_type = 'summary',
        appLinkUrl = '',
        type = 'website'
      } = this.props,
      logoLandscapeBlue =
        'https://mola01.koicdn.com/assets-global/images/mola-blue.svg',
      metaTitle = title
        ? `LFCTV - ${title}`
        : 'LFCTV - Broadcaster Resmi Liga Inggris 2019-2022';
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#0f4a73" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          data-react-helmet="true"
          content={
            keywords
              ? keywords
              : `LFCTV, Liverpool, Liverpool TV, ${description}`
          }
        />
        <meta
          name="description"
          data-react-helmet="true"
          content={`LFCTV Online ${description}`}
        />
        <title data-react-helmet="true">{metaTitle}</title>
        <meta name="msapplication-TileImage" content={logoLandscapeBlue} />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index,follow" />
        <meta
          name="google-site-verification"
          content="iOSX2B9Y9Mx0cY0ihBPzKY3IyCijmlPx1mMNu0kHz6Q"
        />
        <meta property="og:site_name" content="molatv" />
        <meta
          property="og:title"
          content={metaTitle}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={description}
          data-react-helmet="true"
        />
        <meta property="og:image" content={imageUrl} data-react-helmet="true" />
        <meta property="og:url" content={url} data-react-helmet="true" />
        <meta property="og:video" content={url} data-react-helmet="true" />
        <meta property="og:type" content={type} data-react-helmet="true" />

        <meta
          property="twitter:text:title"
          content={title}
          data-react-helmet="true"
        />
        <meta
          name="twitter:description"
          content={description}
          data-react-helmet="true"
        />
        <meta
          name="twitter:image:src"
          content={imageUrl}
          data-react-helmet="true"
        />
        <meta
          name="twitter:card"
          content={twitter_card_type}
          data-react-helmet="true"
        />

        <meta name="referrer" content="origin" />
        <meta name="referrer" content="origin-when-cross-origin" />
      </Helmet>
    );
  }
}

export default Header;
