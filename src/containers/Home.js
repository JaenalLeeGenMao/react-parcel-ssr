// src/components/Home.js
import React, { Component } from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

import _get from "lodash/get";

import Meta from "~/components/Meta";
import Header from "~/components/Header";
import NameForm from "~/components/NameForm";

import styles from "./Home.css";

class Home extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      name: cookies.get("name"),
      playlists: {}
    };
  }

  componentDidMount() {
    fetch("https://mola.tv/api/v2/videos/playlists/home-new")
      .then(res => res.json())
      .then(data => {
        const playlists = _get(data, "data", []);
        if (playlists.length > 0) {
          console.log(playlists[0]);
          this.setState({
            playlists: playlists[0]
          });
        }
      });
    console.log("Home componentDidMount");
  }

  handleNameChange = name => {
    const { cookies } = this.props;

    cookies.set("name", name, { path: "/" });
    this.setState({ name });
  };

  render() {
    const { name, playlists } = this.state;

    return (
      <main>
        {/* {playlists.id && ( */}
        <Meta
          description="jalan kok ssr tenang aja"
          imageUrl="https://playlistcuration.com/wp-content/uploads/formidable/6/Ambient-Encounters-600px.png"
        />
        {/* )} */}
        <Header title={"Who are you ?"} />
        <NameForm name={name} onChange={this.handleNameChange} />
        {this.state.name && (
          <p className={styles.msg}>Hello {this.state.name}!</p>
        )}
      </main>
    );
  }
}

export default withCookies(Home);
