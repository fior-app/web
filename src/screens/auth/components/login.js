import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import {
  Button, Form, Icon, Input, Divider, Message,
} from 'semantic-ui-react';
import { REACT_APP_GOOGLE_CLIENT_ID } from '../../../config/config';
import { signInEmail, signInGoogle } from '../../../store/actions/authActions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signInEmail(this.state);
  };

  handleGSignFailure = (response) => {
    console.log('Google login failed', response);
  };

  handleGSignSuccess = (response) => {
    this.props.signInGoogle(response.tokenId);
  };

  render() {
    const { authState } = this.props;

    return (
      <div className="auth_container">
        <Form onSubmit={this.handleSubmit}>
          {authState.error && (
          <Message negative>
            <Message.Header>Oops...</Message.Header>
            <p>{authState.error.data.message}</p>
          </Message>
          )}
          <Form.Field>
            <Input
              type="email"
              required
              placeholder="Email"
              className="username"
              id="email"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Input
              type="password"
              required
              placeholder="Password"
              className="password"
              id="password"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Button
              type="submit"
              className="signin_btn secondary_btn"
              disabled={authState.signingIn}
              loading={authState.signingIn}
            >
              Login
            </Button>
          </Form.Field>
        </Form>
        <div className="v-spacer-2" />
        <Divider horizontal>Or</Divider>
        <div className="v-spacer-2" />
        <Form>
          <Form.Field>
            <GoogleLogin
              buttonText="Login with Google"
              clientId={REACT_APP_GOOGLE_CLIENT_ID}
              onFailure={this.handleGSignFailure}
              onSuccess={this.handleGSignSuccess}
              cookiePolicy="single_host_origin"
              render={(renderProps) => (
                <Button
                  color="google plus"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  fluid
                >
                  <Icon name="google" />
                  Sign in with Google
                </Button>
              )}
            />
          </Form.Field>
          <Form.Field>
            <a
              className="linkedin_signin_btn linkedin_signin"
              href="https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78imnw0jx3qczv&redirect_uri=http%3A%2F%2Flocalhost:3000%2Fauth%2Flinkedin%2Fcallback&state=fooobar&scope=r_liteprofile%20r_emailaddress"
            >
              <Button color="linkedin" fluid>
                <Icon name="linkedin" />
                Sign in with Linkedin
              </Button>
            </a>
          </Form.Field>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authState: state.auth.authState,
});

// Test before use
// const mapDispatchToProps = { signInEmail, signInGoogle };

const mapDispatchToProps = (dispatch) => ({
  signInEmail: (credentials) => dispatch(signInEmail(credentials)),
  signInGoogle: (idToken) => dispatch(signInGoogle(idToken)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
