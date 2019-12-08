import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import qs from 'querystring';

import Meta from '~/components/Meta';

import { getExampleData } from '~/store/actions/example';

import Go from './codeSplitAssets/NyanCat';
import './codeSplitAssets/NyanCat.css';

class Nyan extends Component {
  static fetchData = async (dispatch, param, query) => {
    return await dispatch(getExampleData({ isSSR: true }));
  };

  componentDidMount() {
    const { meta, data } = this.props.example;
    if (meta.status === 'loading') {
      this.props.getExampleData({});
    }

    Go();
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
        <h1 className="hello-world">Hello world 2!</h1>
        <p style={{ textAlign: 'center' }}>
          This is a code-split component.
          <br />
          <Link to="/">Click here</Link> to see an ordinary component.
        </p>
        <div className="wrapper">
          <div className="rainbow">
            <span />
          </div>
          <div className="nyan-cat">
            <div className="feet" />
            <div className="tail">
              <span />
            </div>
            <div className="body" />
            <div className="head" />
          </div>
          <div className="stars" />
        </div>
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

export default connect(...mapProps)(withRouter(Nyan));
