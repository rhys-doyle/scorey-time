import React, { Component } from "react";
import Login from "./Components/Login/login";
import Home from "./Components/Home/home";
import Authentication from "./Components/Authentication/authentication";
import styles from "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Route exact path="/login" component={Login} />
          <Authentication>
            <Route exact path="/" component={Home} />
          </Authentication>
        </div>
      </BrowserRouter>
    );
  }
}
