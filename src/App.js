import React, { Component } from "react";
import Login from "./Components/Login/login";
import Userpage from "./Components/Userpage/userpage";
import Authentication from "./Components/Authentication/authentication";
import Newgame from "./Components/Newgame/newgame";
import styles from "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from "react-router";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Authentication>
            <Route path="/" exact render={() => <Redirect to="/userpage" />} />
            <Route path="/userpage" component={Userpage} />
            <Route path="/newgame" component={Newgame} />
          </Authentication>
          <Route exact path="/login" component={Login} />
        </div>
      </BrowserRouter>
    );
  }
}
