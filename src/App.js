// src/components/App.js
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Switch, Route } from "react-router-dom";

import routes from "./routes";

import "~/styles/main.css";

class App extends Component {
  componentDidMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change", location);
    });
    console.log("App componentDidMount", this.props);
  }

  componentWillUnmount() {
    this.unlisten();
  }

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
      </Switch>
    );
  }
}

export default withRouter(App);
