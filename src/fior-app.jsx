import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import LandingScreen from "./screens/landing/landing_screen";
import Navbar from "./components/navbar/navbar_cmp";
import AuthScreen from "./screens/auth/auth_screen";
import ProfileScreen from "./screens/profile/profile_screen";
import { userMe } from "./store/actions/authActions";
import Footer from "./components/footer/footer";

class FiorApp extends Component {
  componentDidMount = () => {
    this.props.userMe();
  };

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingScreen} />
            <Route path='/login' component={AuthScreen} />
            <Route path='/profile' component={ProfileScreen} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  userMe: () => dispatch(userMe()),
});

export default connect(null, mapDispatchToProps)(FiorApp);
