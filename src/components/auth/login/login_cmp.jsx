import React, { Component } from "react";
import { Card, Form, Button, Icon, Divider } from "semantic-ui-react";
import { connect } from "react-redux";

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
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          required
          placeholder="Email"
          className="username"
          id="email"
          onChange={this.handleChange}
        />
        <input
          type="password"
          required
          placeholder="Password"
          className="password"
          id="password"
          onChange={this.handleChange}
        />
        <button type="submit" className="signin_btn secondary_btn">
          Sign In
        </button>
        <div>{this.props.auth.authError}</div>
      </form>
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
