import React, { Component } from "react";
import { Card, Form, Button, Icon, Divider, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { registerWithEmailAndPassword } from "../../../store/actions/authActions";


class Register extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    passwordVerify: "",
    isMatching: true,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });

    if (e.target.id === "passwordVerify") this.setState({ isMatching: true });
  };

  handleSubmit = (e) => {
    const { email, username, password, passwordVerify } = this.state;

    e.preventDefault();
    if (password === passwordVerify)
      this.props.registerWithEmailAndPassword({ email, username, password });
    else this.setState({ isMatching: false });
  };

  render() {
    const { isMatching } = this.state;

    return (
      <div className='center'>
        <Card>
          <Card.Content>
            <Card.Description>
              <Button color='google plus' fluid>
                <Icon name='google' />
                Sign Up with Google
              </Button>
              <div className='v-spacer'></div>
              <Button color='linkedin' fluid>
                <Icon name='linkedin' />
                Sign Up with LinkedIn
              </Button>
              <div className='v-spacer'></div>
              <Divider horizontal>OR</Divider>
              {/* <Card.Meta>Enter your email and password to Register</Card.Meta> */}
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <Input
                    id='email'
                    type='email'
                    placeholder='Email'
                    required
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    id='username'
                    type='text'
                    placeholder='Username'
                    required
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    id='password'
                    type='password'
                    placeholder='Password'
                    error={!isMatching}
                    required
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Input
                    id='passwordVerify'
                    type='password'
                    placeholder='Verify Password'
                    error={!isMatching}
                    required
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  {!isMatching && (
                    <div className='error'>Passwords should match</div>
                  )}
                </Form.Field>
                <div className='end'>
                  <Button type='submit' fluid>
                    Register
                  </Button>
                </div>
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
    registerWithEmailAndPassword: (credentials) =>
      dispatch(registerWithEmailAndPassword(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
