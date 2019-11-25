// src/components/App.js
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import routes from "./routes";

import { setRuntimeVariable } from "~/store/actions/runtime";

import "~/styles/main.css";

class App extends Component {
  componentDidMount() {
    this.initApp();
    console.log("App componentDidMount", this.props);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
    this.unlisten();
  }

  initApp = () => {
    window.addEventListener("resize", this.updateWindowDimensions);

    this.unlisten = this.props.history.listen((location, action) => {
      /** tracker view pages implement disini */
      console.log("on route change", location);
    });
  };

  updateWindowDimensions = () => {
    const { isMobile } = this.props.runtime;

    if (!isMobile && window.innerWidth <= 875) {
      this.props.setRuntimeVariable({ name: "isMobile", value: true });
    }

    if (isMobile && window.innerWidth > 875) {
      this.props.setRuntimeVariable({ name: "isMobile", value: false });
    }
  };

  render() {
    return (
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        <Redirect to="/NotFound" />
      </Switch>
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
