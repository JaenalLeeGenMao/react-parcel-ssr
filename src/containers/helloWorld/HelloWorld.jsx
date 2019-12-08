// Dead simple component for the hello world (hi mom!)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import qs from 'querystring';

import { getExampleData } from '~/store/actions/example';

import Meta from '~/components/Meta';

class HelloWorld extends Component {
  static fetchData = async (dispatch, param, query) => {
    return await dispatch(getExampleData({ isSSR: true }));
  };

  componentDidMount() {
    const { meta, data } = this.props.example;
    if (meta.status === 'loading') {
      this.props.getExampleData({});
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const prevParams = qs.parse(prevProps.location.search.replace(/\?/g, ''));
    const params = qs.parse(this.props.location.search.replace(/\?/g, ''));

    if (prevParams.v !== params.v) this.props.getExampleData({});
  }

  render() {
    const { meta, data } = this.props.example;
    return (
      <div>
        <Meta {...data} />
        <h1 className="hello-world">Hello world!</h1>
        <p style={{ textAlign: 'center' }}>
          This is an ordinary react component.
          <br />
          <Link to="/example">Click here</Link> to see a code-split component.
        </p>
      </div>
    );
  }
}

const mapProps = [
  state => ({
    example: state.example
  }),
  {
    getExampleData
  }
];

export default connect(...mapProps)(withRouter(HelloWorld));
