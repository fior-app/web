import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingScreen from "./screens/landing/landing_screen";
import Navbar from "./components/navbar/navbar_cmp";
import AuthScreen from "./screens/auth/auth_screen";
import GroupsScreen from "./screens/groups/GroupsScreen";
import GroupScreen from "./screens/group/GroupScreen";
import ProfileScreen from "./screens/profile/profile_screen";
import BlogScreen from "./screens/blog/BlogScreen";
import Blogdetail from "./screens/blog/Blogdetail";

import Footer from "./components/footer/footer";

import AuthRequire from "./HOC/authRequire";
import UnauthRequire from "./HOC/unauthRequire";

class FiorApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingScreen} />
            <Route exact path="/login" component={UnauthRequire(AuthScreen)} />
            <Route exact path="/groups" component={AuthRequire(GroupsScreen)} />
            <Route exact path="/blogs" component={BlogScreen} />
            <Route
              exact
              path="/groups/:groupId"
              component={AuthRequire(GroupScreen)}
            />
            <Route
              exact
              path="/profile"
              component={AuthRequire(ProfileScreen)}
            />
            {/* <Route exact path="/blogs" component={UnAuthRequire(BlogScreen)} /> */}
            <Route
              exact
              path="/view_blogs"
              component={AuthRequire(Blogdetail)}
            />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default FiorApp;
