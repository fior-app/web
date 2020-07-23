import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";

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
    const { emailAuth } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            {emailAuth.signingIn && emailAuth.signingIn ? "loading" : null}
          </div>
          <div>{emailAuth.error && emailAuth.error.data.message}</div>
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
          <button
            type="submit"
            className="signin_btn secondary_btn"
            disabled={emailAuth.signingIn && emailAuth.signingIn}
          >
            Login
          </button>
        </form>
        <div className="v-spacer-2" />
        <button className="google_signin_btn google_signin">
          <Image
            src="../../assets/icons/flat-color-icons_google.svg"
            className="google_icon"
          />
          <p>Login with Google</p>
        </button>
        <button className="linkedin_signin_btn linkedin_signin">
          <Image
            src="../../assets/icons/linkedin.svg"
            className="linkedin_icon"
          />
          <p>Login with LinkedIn</p>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  emailAuth: state.auth.emailAuth,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signInEmail: (credentials) => dispatch(signInEmail(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
