import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingScreen from "./screens/landing/landing_screen";
import Navbar from "./components/navbar/navbar_cmp";
import AuthScreen from "./screens/auth/auth_screen";
import MentorspacesScreen from "./screens/groups/MentorspacesScreen";
import MentorspaceScreen from "./screens/group/MentorspaceScreen";
import ProfileScreen from "./screens/profile/profile_screen";
import BlogScreen from "./screens/blog/BlogScreen";
import NotFound from "./screens/notfound/NotFound";

import Footer from "./components/footer/footer";

import AuthRequire from "./HOC/authRequire";
import UnauthRequire from "./HOC/unauthRequire";
import SideNav from "./components/sidenav/sidenav_cmp";
import { userMe } from "./store/actions/authActions";
import { connect } from "react-redux";

class FiorApp extends Component {
  componentDidMount() {
    this.props.userMe();
  }

  render() {
    return this.props.signingIn ? (
      <h4>Loading</h4>
    ) : (
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
                path='/mentorspaces'
                component={AuthRequire(MentorspacesScreen)}
              />
              <Route
                exact
                path='/mentorspaces/:mentorspaceId'
                component={AuthRequire(MentorspaceScreen)}
              />
              <Route exact path='/orgs' component={LandingScreen} />
              <Route exact path='/question-forum' component={LandingScreen} />
              <Route exact path='/blog' component={BlogScreen} />
              <Route exact path='/users' component={LandingScreen} />
              <Route exact path='/notifications' component={LandingScreen} />
              <Route exact path='/settings' component={LandingScreen} />
              <Route exact path='/pricing' component={LandingScreen} />
              <Route exact path='/about' component={LandingScreen} />
              <Route exact path='/profile' component={ProfileScreen} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  signingIn: state.auth.authState.signingIn,
});

const mapDispatchToProps = (dispatch) => {
  return {
    userMe: () => dispatch(userMe()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiorApp);
