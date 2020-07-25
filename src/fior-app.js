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
import { userMeInitial } from "./store/actions/authActions";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import PricingScreen from "./screens/pricing/pricing_screen";

class FiorApp extends Component {
  componentDidMount() {
    this.props.userMeInitial();
  }

  render() {
    return this.props.initialSignIn ? (
      this.renderFullLoading()
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
              <Route exact path='/pricing' component={PricingScreen} />
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

  renderFullLoading = () => {
    return (
      <div className='row center'>
        <div className='full-loading'>
          <Image src='assets/svg/loading-full.svg' size='small' />
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  initialSignIn: state.auth.initialSignIn,
});

const mapDispatchToProps = (dispatch) => {
  return {
    userMeInitial: () => dispatch(userMeInitial()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiorApp);
