import React, { Component } from "react";
import { Image, Button } from "semantic-ui-react";

import "./auth.css";
import Register from "../../components/auth/register/register_cmp";
import Login from "../../components/auth/login/login_cmp";

class AuthScreen extends Component {
  state = {
    loginComponent: true,
  };

  changeComponent = (e) => {
    if (e.target.id === "login") {
      this.setState({
        loginComponent: true,
      });
    }
    if (e.target.id === "register") {
      this.setState({
        loginComponent: false,
      });
    }
  };

  render() {
    const { loginComponent } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row j-around">
            <div className="placeholder">
              <Image src="../../assets/img/auth.svg" size="massive" />
            </div>
            <div className="items-right">
              <div className="row menu">
                <div className="menu-item">
                  <Button id="login" onClick={this.changeComponent}>
                    Login
                  </Button>
                </div>
                <div className="menu-item">
                  <Button id="register" onClick={this.changeComponent}>
                    Register
                  </Button>
                </div>
              </div>
              {loginComponent ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AuthScreen;
