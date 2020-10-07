import React, { Component } from 'react';
import {
  Button, Divider, Form, Icon,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { registerWithEmailAndPassword } from '../../../store/actions/authActions';
import { REACT_APP_GOOGLE_CLIENT_ID } from '../../../config/config';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      passwordVerify: '',
      isMatching: true,
      isTnc: false,
      tncDisabled: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });

    if (e.target.id === 'passwordVerify') this.setState({ isMatching: true });
  };

  handleSubmit = (e) => {
    const {
      email, firstname, lastname, password, passwordVerify, isTnc,
    } = this.state;

    e.preventDefault();
    this.setState({
      isMatching: true,
      tncDisabled: false,
    });

    if (password !== passwordVerify) {
      this.setState({ isMatching: false });
      return;
    }

    if (!isTnc) {
      this.setState({ tncDisabled: true });
      return;
    }

    this.props.registerWithEmailAndPassword({
      email,
      name: `${firstname} ${lastname}`,
      password,
    });
  };

  toggleTnc = () => this.setState((prevState) => ({ isTnc: !prevState.isTnc }));

  render() {
    const { isMatching, isTnc, tncDisabled } = this.state;
    const { auth } = this.props;

    return (
      <div className="auth_container">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Form.Input
              type="text"
              required
              placeholder="First Name"
              id="firstname"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              type="text"
              required
              placeholder="Last Name"
              id="lastname"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              type="email"
              required
              placeholder="Email"
              id="email"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              type="password"
              required
              placeholder="Password"
              id="password"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              type="password"
              required
              placeholder="Confirm Password"
              id="passwordVerify"
              onChange={this.handleChange}
              error={!isMatching && 'Passwords should match'}
            />
          </Form.Field>
          <Form.Field>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Form.Checkbox
                id="tnc"
                label="I agree to the Terms and Conditions"
                error={tncDisabled && 'You must agree to the terms and conditions'}
                onChange={this.toggleTnc}
                checked={isTnc}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Button
                type="submit"
                disabled={auth.isRegistering}
                loading={auth.isRegistering}
                color="teal"
              >
                Register
              </Button>
            </div>
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
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  registerWithEmailAndPassword: (credentials) => dispatch(
    registerWithEmailAndPassword(credentials),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
