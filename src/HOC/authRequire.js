import React, { Component } from 'react';

import * as utils from '../util/utils';

const AuthRequire = (ComposedComponent) => {
  class Authentication extends Component {
    // eslint-disable-next-line camelcase
    UNSAFE_componentWillMount() {
      if (!utils.getWithExpiry('token')) {
        this.props.history.push('/login');
      }
    }

    render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ComposedComponent {...this.props} />;
    }
  }

  return Authentication;
};

export default AuthRequire;
