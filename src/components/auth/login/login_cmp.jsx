import React, { Component } from "react";
import { Card, Form, Button, Icon, Divider } from "semantic-ui-react";
import { connect } from "react-redux";

import "./login.css";
import { signInEmail } from "../../../store/actions/authActions";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signInEmail(this.state);
  };

  render() {
    return (
      <div className="center">
        <Card>
          <Card.Content>
            <Card.Description>
              <Button color="google plus" fluid>
                <Icon name="google" />
                Sign in with Google
              </Button>
              <div className="v-spacer"></div>
              <Button color="linkedin" fluid>
                <Icon name="linkedin" />
                Sign in with LinkedIn
              </Button>
              <div className="v-spacer"></div>
              <Divider horizontal>OR</Divider>
              {/* <Card.Meta>Enter your email and password to login</Card.Meta> */}
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    id="email"
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <div className="end">
                  <Button type="submit" fluid>
                    Login
                  </Button>
                </div>
                <div>{this.props.auth.authError}</div>
              </Form>
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signInEmail: (credentials) => dispatch(signInEmail(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
