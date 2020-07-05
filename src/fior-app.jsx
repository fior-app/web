import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import LandingScreen from "./screens/landing/landing_screen";
import Navbar from "./components/navbar/navbar_cmp";
import AuthScreen from "./screens/auth/auth_screen";
import GroupsScreen from "./screens/groups/GroupsScreen";
import GroupScreen from "./screens/groups/GroupScreen";

import { userMe } from "./store/actions/authActions";

class FiorApp extends Component {
  componentDidMount = () => {
    this.props.userMe();
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingScreen} />
            <Route path="/login" component={AuthScreen} />
            <Route exact path="/groups" component={GroupsScreen} />
            <Route exact path="/groups/:groupId" component={GroupScreen} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  userMe: () => dispatch(userMe()),
});

export default connect(null, mapDispatchToProps)(FiorApp);
