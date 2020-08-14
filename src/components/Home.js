import React, { Component } from "react";
import axios from "axios";
import Registration from "./auth/Registration";
import Login from "./auth/Login";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSuccessfullAuth = this.handleSuccessfullAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfullAuth = data => {
    // TODO update parent component
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  };

  handleLogoutClick = () => {
    axios
      .delete("https://rails-auth-proj.herokuapp.com/logout", {
        withCredentials: true
      })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  };
  render() {
    return (
      <div>
        <h2>Home</h2>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <Registration handleSuccessfullAuth={this.handleSuccessfullAuth} />
        <Login handleSuccessfullAuth={this.handleSuccessfullAuth} />
      </div>
    );
  }
}

export default Home;
