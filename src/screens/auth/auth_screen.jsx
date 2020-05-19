import React, { Component } from "react";
import { Image } from "semantic-ui-react";

import "./auth.css";
import Register from "../../components/auth/register/register_cmp";
import Login from "../../components/auth/login/login_cmp";

class AuthScreen extends Component {
  state = {
    loginComponent: true,
  };

  render() {
    const { loginComponent } = this.state;

    return (
      <React.Fragment>
        <div className='container'>
          <div className='row j-around'>
            <div className='placeholder'>
              <Image src='../../assets/img/auth.svg' size='massive' />
            </div>
            <div className='items-right'>
              <div className='row menu'>
                <div className='menu-item'>
                  <div
                    id='login'
                    className={this.getActiveStyle(1)}
                    onClick={this.changeComponent}
                  >
                    Login
                  </div>
                </div>
                <div className='menu-item'>
                  <div
                    id='register'
                    className={this.getActiveStyle(0)}
                    onClick={this.changeComponent}
                  >
                    Register
                  </div>
                </div>
              </div>
              {loginComponent ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  changeComponent = (e) => {
    e.target.id === "login"
      ? this.setState({
          loginComponent: true,
        })
      : this.setState({
          loginComponent: false,
        });
  };

  getActiveStyle = (p) => {
    return this.state.loginComponent && p
      ? "selected"
      : !this.state.loginComponent && !p
      ? "selected"
      : "";
  };
}

export default AuthScreen;
