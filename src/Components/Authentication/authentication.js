import React from "react";
import { Redirect } from "react-router";

export default class Authentication extends React.Component {
  render() {
    const { pathname } = this.props.history.location;
    var token = JSON.parse(localStorage.getItem("token"));
    if (
      pathname !== "/login" &&
      (!token || token.expires < new Date().getTime())
    ) {
      localStorage.removeItem("currentUser");
      return <Redirect to="/login" />;
    } else {
      return this.props.children;
    }
  }
}
