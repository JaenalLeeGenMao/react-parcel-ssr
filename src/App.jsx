// Main component of our application.
// We setup react-helmet, which let us nicely manage our <head />
// It's a nice library you should use!

import React, { Component } from 'react';
import importedComponent from 'react-imported-component';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';

import { setRuntimeVariable } from '~/store/actions/runtime';

import HelloWorld from './HelloWorld';

const HelloWorld2 = importedComponent(() => import('./HelloWorld2'));

// export default function App() {
//   return (
//     <div>
//       <Helmet defaultTitle="Hello World!">
//         <meta charSet="utf-8" />
//       </Helmet>
//       <Switch>
//         <Route exact path="/" component={HelloWorld} />
//         <Route exact path="/codeSplit" component={HelloWorld2} />
//         <Redirect to="/" />
//       </Switch>
//     </div>
//   );
// }

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
          <Route exact path="/" component={HelloWorld} />
          <Route exact path="/codeSplit" component={HelloWorld2} />
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
