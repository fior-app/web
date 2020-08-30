import React, { Component } from 'react';
import {
  Image, Button, Grid, Tab, Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import Register from '../../components/auth/register/register_cmp';
import Login from '../../components/auth/login/login_cmp';

const panes = [
  { menuItem: 'Login', render: () => <Tab.Pane><Login /></Tab.Pane> },
  { menuItem: 'Register', render: () => <Tab.Pane><Register /></Tab.Pane> },
];

class AuthScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginComponent: true,
    };
  }

  // Keep to update ui
  changeComponent = (e) => {
    if (e.target.id === 'login') {
      this.setState({
        loginComponent: true,
      });
    } else {
      this.setState({
        loginComponent: false,
      });
    }
  };

    this.state = {
      loginComponent: true,
    };
  }

  changeComponent = (e) => (e.target.id === 'login'
    ? this.setState({
      loginComponent: true,
    })
    : this.setState({
      loginComponent: false,
    }));

  render() {
    const { loginComponent } = this.state;

    if (this.props.currentUser) return <Redirect to="/" />;

    return (
      <fragment>
        <Container>
          <Grid>
            <Grid.Column width={10}>
              <Image src="https://cohenwoodworking.com/wp-content/uploads/2016/09/image-placeholder-500x500.jpg" />
            </Grid.Column>
            <Grid.Column width={6}>
              <Tab panes={panes} />
            </Grid.Column>
          </Grid>
        </Container>
      </fragment>
    );

    return (
      <div className="container">
        {/* Background Vectors */}
        {/* <div className="vectors">
            <Image src="../../assets/vectors/cross.svg" className="cross" />
            <Image
              src="../../assets/vectors/double_circle.svg"
              className="double_circle"
            />
            <Image
              src="../../assets/vectors/single_sqr.svg"
              className="single_sqr"
            />
            <Image
              src="../../assets/vectors/double_circle.svg"
              className="double_circle_small"
            />
            <Image
              src="../../assets/vectors/cross.svg"
              className="cross_small"
            />
            <Image
              src="../../assets/vectors/overlap_sqr.svg"
              className="overlap_sqr"
            />
            <Image
              src="../../assets/vectors/double_square.svg"
              className="double_square"
            />
          </div> */}
        {/* End of Background Vectors */}

        {/* Login and Register Forms */}
        <div className="login-forms row">
          {/* <Image
            src="../../assets/vectors/signin_bg.svg"
            className="signin_bg"
          /> */}
          {/* Tabs */}
          {/* <Image
            src="../../assets/vectors/form_tab_right.svg"
            className="form_tab_right form_tab_left"
          /> */}

          {/* Enf of Tabs */}
          {loginComponent ? <Login /> : <Register />}
        </div>
        {/* End of Login and Register Forms */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(AuthScreen);
