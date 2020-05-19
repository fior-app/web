import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingScreen from "./screens/landing/landing_screen";
import Navbar from "./components/navbar/navbar_cmp";
import AuthScreen from "./screens/auth/auth_screen";

class FiorApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingScreen} />
            <Route path="/login" component={AuthScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default FiorApp;
