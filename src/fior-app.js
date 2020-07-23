import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingScreen from "./screens/landing/landing_screen";
import Navbar from "./components/navbar/navbar_cmp";
import AuthScreen from "./screens/auth/auth_screen";
import GroupsScreen from "./screens/groups/GroupsScreen";
import GroupScreen from "./screens/group/GroupScreen";
import ProfileScreen from "./screens/profile/profile_screen";
import BlogScreen from "./screens/blog/BlogScreen";
import Blogdetail from "./screens/blog/blogdetails/blogdetail";

import Footer from "./components/footer/footer";

import AuthRequire from "./HOC/authRequire";
import UnauthRequire from "./HOC/unauthRequire";
import SideNav from "./components/sidenav/sidenav_cmp";

class FiorApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <div className='row'>
            <SideNav />
            <Switch>
              <Route exact path='/' component={LandingScreen} />
              <Route
                exact
                path='/login'
                component={UnauthRequire(AuthScreen)}
              />
              <Route
                exact
                path='/mentorspace'
                component={AuthRequire(GroupsScreen)}
              />
              <Route exact path='/orgs' component={LandingScreen} />
              <Route exact path='/question-forum' component={LandingScreen} />
              <Route exact path='/blog' component={BlogScreen} />
              <Route exact path='/users' component={LandingScreen} />
              <Route exact path='/notifications' component={LandingScreen} />
              <Route exact path='/settings' component={LandingScreen} />
              <Route exact path='/pricing' component={LandingScreen} />
              <Route exact path='/about' component={LandingScreen} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default FiorApp;
