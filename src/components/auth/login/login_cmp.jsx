import React, { Component } from "react";
import { Card, Form, Button, Icon, Divider } from "semantic-ui-react";
import "./login.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  render() {
    return (
      <div className='center'>
        <Card>
          <Card.Content>
            <Card.Description>
              <Button color='google plus' fluid>
                <Icon name='google' />
                Sign in with Google
              </Button>
              <div className='v-spacer'></div>
              <Button color='linkedin' fluid>
                <Icon name='linkedin' />
                Sign in with LinkedIn
              </Button>
              <div className='v-spacer'></div>
              <Divider horizontal>OR</Divider>
              {/* <Card.Meta>Enter your email and password to login</Card.Meta> */}
              <Form>
                <Form.Field>
                  <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                  <input placeholder='Password' />
                </Form.Field>
                <div className='end'>
                  <Button type='submit' fluid>
                    Login
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

export default Login;
