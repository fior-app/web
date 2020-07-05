import React, { Component } from "react";
import { Card, Form, Button, Icon, Divider } from "semantic-ui-react";

class Register extends Component {
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
              <Form>
                <Form.Field>
                  <input placeholder='Email' />
                </Form.Field>
                <Form.Field>
                  <input placeholder='Username' />
                </Form.Field>
                <Form.Field>
                  <input placeholder='Password' />
                </Form.Field>
                <Form.Field>
                  <input placeholder='Verify Password' />
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

export default Register;
