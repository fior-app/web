import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import {
  Button, Form, Icon, Input, Divider, Message,
}
from 'semantic-ui-react';
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
      