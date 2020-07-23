import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingScreen from "./screens/landing/landing_screen";
import Navbar from "./components/navbar/navbar_cmp";
import AuthScreen from "./screens/auth/auth_screen";
import MentorspacesScreen from "./screens/groups/MentorspacesScreen";
import MentorspaceScreen from "./screens/group/MentorspaceScreen";
import ProfileScreen from "./screens/profile/profile_screen";
import BlogScreen from "./screens/blog/BlogScreen";
import Blogdetail from "./screens/blog/blogdetails/blogdetail";
import NotFound from "./screens/notfound/NotFound";

import Footer from "./components/footer/footer";

import AuthRequire from "./HOC/authRequire";
import UnauthRequire from "./HOC/unauthRequire";
import SideNav from "./components/sidenav/sidenav_cmp";

class FiorApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="row">
            <SideNav />
            <Switch>
              <Route exact path="/" component={LandingScreen} />
              <Route
                exact
                path="/login"
                component={UnauthRequire(AuthScreen)}
              />
              <Route
                exact
                path="/mentorspaces"
                component={AuthRequire(MentorspacesScreen)}
              />
              <Route
                exact
                path="/mentorspaces/:mentorspaceId"
                component={AuthRequire(MentorspaceScreen)}
              />
              <Route exact path="/blogs" component={BlogScreen} />
              <Route exact path="/view_blogs" component={Blogdetail} />
              <Route
                exact
                path="/profile"
                component={AuthRequire(ProfileScreen)}
              />
              {/* <Route exact path="/blogs" component={UnAuthRequire(BlogScreen)} /> */}
              {/* <Route
              exact
              path="/view_blogs"
              component={AuthRequire(Blogdetail)}
            /> */}
              <Route exact path="*" component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default FiorApp;
