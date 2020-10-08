import React from "react";
import { Image, Grid, Tab, Container } from "semantic-ui-react";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";

const panes = [
  {
    menuItem: "Login",
    render: () => (
      <Tab.Pane>
        <Login />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Register",
    render: () => (
      <Tab.Pane>
        <Register />
      </Tab.Pane>
    ),
  },
];

const AuthScreen = ({ currentUser }) => {
  if (currentUser) return <Redirect to="/" />;

  return (
    <Container>
      <Grid>
        <Grid.Column width={10}>
          {/* <Image src="https://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg" /> */}
          <img src="../../assets/img/authImage.jpg" width="600px" />
        </Grid.Column>
        <Grid.Column width={6}>
          <Tab panes={panes} />
        </Grid.Column>
      </Grid>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(AuthScreen);
