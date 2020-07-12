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
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='email'
            required
            placeholder='Email'
            className='username'
            id='email'
            onChange={this.handleChange}
          />
          <input
            type='password'
            required
            placeholder='Password'
            className='password'
            id='password'
            onChange={this.handleChange}
          />
          <button type='submit' className='signin_btn secondary_btn'>
            Login
          </button>
          <div>{this.props.auth.authError}</div>
        </form>
        <div className='v-spacer-2' />
        <button className='google_signin_btn google_signin'>
          <Image
            src='../../assets/icons/flat-color-icons_google.svg'
            className='google_icon'
          />
          <p>Login with Google</p>
        </button>
        <button className='linkedin_signin_btn linkedin_signin'>
          <Image
            src='../../assets/icons/linkedin.svg'
            className='linkedin_icon'
          />
          <p>Login with LinkedIn</p>
        </button>
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
