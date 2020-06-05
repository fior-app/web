import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
import {
  Button, Form, Icon, Input, Divider, Message,
}
from 'semantic-ui-react';
import { REACT_APP_GOOGLE_CLIENT_ID } from '../../../config/config';
import { signInEmail, signInGoogle } from '../../../store/actions/authActions';
