import React, { Component } from "react";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import GoogleLogin from "react-google-login";

import { signInEmail, signInGoogle } from "../../../store/actions/authActions";

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
    const { authState } = this.props;

    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <div>
              {authState.signingIn && (
                <div className='auth-loading'>
                  <Image src='assets/svg/loading.svg' size='tiny' />
                </div>
              )}
            </div>
            <div>{authState.error && authState.error.data.message}</div>
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
            <button
              type='submit'
              className='signin_btn secondary_btn'
              disabled={authState.signingIn}
            >
              Login
            </button>
          </form>
          <div className='v-spacer-2' />
          <button className='google_signin_btn google_signin'>
            <GoogleLogin
              buttonText='Login with Google'
              clientId='1080745962632-ihr6ogh2a89dm4si0bm95q685obe0a8t.apps.googleusercontent.com'
              onFailure={this.handleGSignFailure}
              onSuccess={this.handleGSginSuccess}
            />
          </button>
          <button className='linkedin_signin_btn linkedin_signin'>
            <Image
              src='../../assets/icons/linkedin.svg'
              className='linkedin_icon'
            />
            <p>Login with LinkedIn</p>
          </button>
        </div>
      </div>
    );
  }

  handleGSignFailure = (response) => {};

  handleGSginSuccess = (response) => {
    this.props.signInGoogle(response.tokenId);
  };
}

const mapStateToProps = (state) => ({
  authState: state.auth.authState,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signInEmail: (credentials) => dispatch(signInEmail(credentials)),
    signInGoogle: (idToken) => dispatch(signInGoogle(idToken)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
