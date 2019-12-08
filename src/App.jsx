// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import React, { Component } from 'react';

import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import { setRuntimeVariable } from '~/store/actions/runtime';

import routes from './routes';

import './assets/style/global.scss';

class App extends Component {
  componentDidMount() {
    this.initApp();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    this.unlisten();
  }

  initApp = () => {
    window.addEventListener('resize', this.updateWindowDimensions);

    this.unlisten = this.props.history.listen((location, action) => {
      /** tracker view pages implement disini */
      console.log('on route change', location);
    });
  };

  updateWindowDimensions = () => {
    const { isMobile } = this.props.runtime;

    if (!isMobile && window.innerWidth <= 875) {
      this.props.setRuntimeVariable({ name: 'isMobile', value: true });
    }

    if (isMobile && window.innerWidth > 875) {
      this.props.setRuntimeVariable({ name: 'isMobile', value: false });
    }
  };

  render() {
    return (
      <div>
        <Helmet defaultTitle="Hello World!">
          <meta charSet="utf-8" />
        </Helmet>
        <Switch>
          {routes.map(({ exact = false, path, component }, routeIndex) => (
            <Route
              key={`${path} - ${routeIndex}`}
              exact={exact}
              path={path}
              component={component}
            />
          ))}
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

const mapProps = [
  state => ({
    runtime: state.runtime
  }),
  {
    setRuntimeVariable
  }
];

export default withRouter(connect(...mapProps)(App));
