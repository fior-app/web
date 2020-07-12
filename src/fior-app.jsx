import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import LandingScreen from "./screens/landing/landing_screen";
import Navbar from "./components/navbar/navbar_cmp";
import AuthScreen from "./screens/auth/auth_screen";
import GroupsScreen from "./screens/groups/GroupsScreen";
import GroupScreen from "./screens/group/GroupScreen";
import ProfileScreen from "./screens/profile/profile_screen";
import BlogScreen from "./screens/blog/BlogScreen";
import Blogdetail from "./screens/blog/blogdetail";

import { userMe } from "./store/actions/authActions";
import Footer from "./components/footer/footer";

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
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/blogs" component={BlogScreen} />
            <Route path="/view_blogs" component={Blogdetail} />
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
