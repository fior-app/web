import React, { Component } from "react";

import * as utils from "../util/utils";

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!utils.getWithExpiry("token")) {
        this.props.history.push("/login");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  return Authentication;
}
