import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import { signInLinkedIn } from '../../store/actions/authActions';

class LinkedInCallbackScreen extends Component {
  componentDidMount() {
    const code = new URLSearchParams(this.props.history.location.search).get('code');

    if (!code) {
      this.props.history.replace('/');
    } else {
      const requestUri = 'http://localhost:3000/auth/linkedin/callback';
      this.props.signInLinkedIn(code, requestUri);
    }
  }

  render() {
    if (this.props.currentUser) return <Redirect to="/" />;

    return (
      <div>
        <div>Redirecting</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signInLinkedIn: (code, requestUri) => dispatch(signInLinkedIn(code, requestUri)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LinkedInCallbackScreen);
