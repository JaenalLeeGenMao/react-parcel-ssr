// Dead simple component for the hello world (hi mom!)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import qs from 'querystring';
import Api from '../../api'
import './HelloWorld.scss'

import { getExampleData } from '~/store/actions/example';

// import Meta from '~/components/Meta';

class HelloWorld extends Component {
  state = {
    data: null
  }
  // static fetchData = async (dispatch, param, query) => {
  //   return await dispatch(getExampleData({ isSSR: true }));
  // };

  componentDidMount() {
    this.updateData()
  }

  componentDidUpdate(prevProps, prevState) {
    const prevParams = qs.parse(prevProps.location.search.replace(/\?/g, ''));
    const params = qs.parse(this.props.location.search.replace(/\?/g, ''));
    console.log(params)
    if (prevParams.v !== params.v) {
      this.updateData()
    }
  }

  updateData = async () => {
    if (this.props.location) {
      const params = qs.parse(this.props.location.search.replace(/\?/g, ''));
      let result
      try {
        if (!params.v) {
          console.log(await Api.getAllPeoples())
          result = await Api.getAllPeoples()
        } else {
          if (params.v == 'films') result = await Api.getAllStarships()
          if (params.v == 'planets') result = await Api.getAllPlanets()
        }
        console.log(await Api.getAllPeoples())
        // console.log('wakakak', result)
        if (result) this.setState({ data: result })
      } catch (e) {
        console.log(e)
      }
    }
  }

  render() {
    // const { meta, data } = this.props.example;

    const { data } = this.state
    // console.log(this.state)
    return (
      <div class="container">
        {data &&
          data.length > 0 &&
          data.map((each, index) => (
            <section class="card-wrapper">
              {/* {JSON.stringify(each)} */}
              <h4>{each.name}</h4>
              <hr />
              <div>Eye color {each.eye_color}</div>
              <div>Birth year {each.birth_year}</div>
              {/* <Link class='btn-primary' to={`/people/${index}`}>see more</Link> */}
              <Link
              class='btn-primary'
              to={{
                pathname: '/people',
                state: {
                  url: each.url
                }
              }}>see more</Link>
            </section>
          )
        )}
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
