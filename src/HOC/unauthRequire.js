import React, { Component } from 'react';

import * as utils from '../util/utils';

export default function (ComposedComponent) {
  class Unauthentication extends Component {
    componentWillMount() {
      if (utils.getWithExpiry('token')) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  return Unauthentication;
}
