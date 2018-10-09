import React from "react";
import { Redirect } from "react-router";

export default class Authentication extends React.Component {
  render() {
    var token = JSON.parse(localStorage.getItem("token"));
    if (!token || token.expires < new Date().getTime()) {
      return <Redirect to="/login" />;
    } else {
      return this.props.children;
    }
  }
}
