// Dead simple component for the hello world (hi mom!)

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Hello World!</title>
        </Helmet>
        <h1 className="hello-world">Hello world!</h1>
        <p style={{ textAlign: 'center' }}>
          This is an ordinary react component.
          <br />
          <Link to="/codeSplit">Click here</Link> to see a code-split component.
        </p>
      </div>
    );
  }
}

export default HelloWorld;
