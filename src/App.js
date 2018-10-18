import React, { Component } from "react";
import Login from "./Components/Login/login";
import Userpage from "./Components/Userpage/userpage";
import Authentication from "./Components/Authentication/authentication";
import Newgame from "./Components/Newgame/newgame";
import styles from "./App.css";
import { Router, Route } from "react-router-dom";
import { Redirect } from "react-router";
import Header from "./Components/Header/header";
import history from "./history";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className={styles.App}>
          <Header history={history} />
          <Authentication>
            <Route path="/" exact render={() => <Redirect to="/userpage" />} />
            <Route path="/userpage" component={Userpage} />
            <Route path="/newgame" component={Newgame} />
          </Authentication>
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}
