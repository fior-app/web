import React, { Component } from "react";
import Login from "./auth/login/login_cmp";

class MainScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className='page-wrap'>
          <Login />
        </div>

        <div className='center site-footer'>Fior dev server</div>
      </React.Fragment>
    );
  }
}

export default MainScreen;
