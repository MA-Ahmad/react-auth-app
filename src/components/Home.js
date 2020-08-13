import React, { Component } from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
  }

  handleSuccessfullAuth = data => {
    // TODO update parent component
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Registration handleSuccessfullAuth={this.handleSuccessfullAuth} />
        <Login handleSuccessfullAuth={this.handleSuccessfullAuth} />
      </div>
    );
  }
}

export default Home;
