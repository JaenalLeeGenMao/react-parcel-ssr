// src/components/Home.js
import React, { Component } from "react";
import { connect } from "react-redux";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

import _get from "lodash/get";
import _isEmpty from "lodash/isEmpty";

import { getHomeData } from "~/store/actions/home";

import Meta from "~/components/Meta";
import Header from "~/components/Header";
import NameForm from "~/components/NameForm";

import styles from "./Home.css";

class Home extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  static fetchData = async dispatch => {
    return dispatch(getHomeData());
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      name: cookies.get("name")
    };
  }

  componentDidMount() {
    console.log("Home componentDidMount");
    if (_isEmpty(this.props.home)) {
      this.props.getHomeData();
    }
  }

  handleNameChange = name => {
    const { cookies } = this.props;

    cookies.set("name", name, { path: "/" });
    this.setState({ name });
  };

  render() {
    const { name } = this.state,
      { home } = this.props;

    return (
      <main>
        <Meta
          title={home.data.attributes && home.data.attributes.title}
          description="jalan kok ssr tenang aja"
          imageUrl="https://playlistcuration.com/wp-content/uploads/formidable/6/Ambient-Encounters-600px.png"
        />
        <Header title={"Who are you ?"} />
        <NameForm name={name} onChange={this.handleNameChange} />
        {this.state.name && (
          <p className={styles.msg}>Hello {this.state.name}!</p>
        )}
      </main>
    );
  }
}

const mapProps = [
  state => ({
    home: state.home
  }),
  {
    getHomeData
  }
];

export default withCookies(connect(...mapProps)(Home));
