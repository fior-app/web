import React, { Component } from "react";
import { Card, Form, Button } from "semantic-ui-react";

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
            <Card.Header>Login</Card.Header>
            <Card.Meta>Enter your email and password to login</Card.Meta>
            <Card.Description>
              <Form>
                <Form.Field>
                  <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                  <input placeholder='Password' />
                </Form.Field>
                <div className='end'>
                  <Button type='submit'>Login</Button>
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
