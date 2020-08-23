import React, { Component } from 'react';

import * as utils from '../util/utils';

const UnauthRequire = (ComposedComponent) => {
  class Unauthentication extends Component {
    // eslint-disable-next-line camelcase
    UNSAFE_componentWillMount() {
      if (utils.getWithExpiry('token')) {
        this.props.history.push('/');
      }
    }

    render() {
      // eslint-disable-next-line react/jsx-props-no-spreading
      return <ComposedComponent {...this.props} />;
    }
  }

  return Unauthentication;
};

export default UnauthRequire;
