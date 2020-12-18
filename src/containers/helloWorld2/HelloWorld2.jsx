import React, { Component } from 'react';
import { get } from 'axios'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Go from './codeSplitAssets/NyanCat';
import './codeSplitAssets/NyanCat.css';

class Nyan extends Component {
  state = {
    data: null
  }
  async componentDidMount() {
    // Go();
    const { url } = this.props.location.state
    if (url) {
      this.setState({
        data: await get(url) || null
      })
    }
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default Nyan;
