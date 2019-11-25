// src/components/NotFound.js
import React, { Component, Fragment } from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class NotFound extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  clearName = () => {
    const { cookies } = this.props;
    cookies.remove("name");
  };
  render() {
    const { cookies } = this.props;
    const name = cookies.get("name");
    return (
      <div>
        <p>Hi {name}</p>
        <p>Are you lost?</p>
      </div>
    );
  }
}

export default withCookies(NotFound);
