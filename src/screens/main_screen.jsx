import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingScreen from "./landing/landing_screen";
import Navbar from "../components/navbar/navbar_cmp";
import AuthScreen from "./auth/auth_screen";

class MainScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={LandingScreen} />
            <Route path='/login' component={AuthScreen} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default MainScreen;
