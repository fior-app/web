import React, { Component } from "react";
import { Image } from "semantic-ui-react";
import { connect } from "react-redux";

import Register from "../../components/auth/register/register_cmp";
import Login from "../../components/auth/login/login_cmp";
import { Redirect } from "react-router-dom";

class AuthScreen extends Component {
  state = {
    loginComponent: true,
  };

  render() {
    const { loginComponent } = this.state;

    if (this.props.currentUser) return <Redirect to='/' />;

    return (
      <React.Fragment>
        {/* <div className='container'>
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
        </div> */}
        <div className='container'>
          <div className='vectors'>
            <Image src='../../assets/vectors/cross.svg' className='cross' />
            <Image src='../../assets/vectors/double_circle.svg' className='double_circle' />
            <Image src='../../assets/vectors/single_sqr.svg' className='single_sqr' />
            <Image src='../../assets/vectors/double_circle.svg' className='double_circle_small' />
            <Image src='../../assets/vectors/cross.svg' className='cross_small' />
            <Image src='../../assets/vectors/overlap_sqr.svg' className='overlap_sqr' />
            <Image src='../../assets/vectors/double_square.svg' className='double_square' />
          </div>
          <div className='login-forms row'>
            <Image src='../../assets/vectors/signin_bg.svg' className='signin_bg' />
            <Image src='../../assets/vectors/form_tab_right.svg' className='form_tab_right' />
            <p className='signin_text'>Sign In</p>
            <p className='register_text'>Register</p>
            <form>
              <input type="text" name="username" className="username" placeholder="Username" />
              <input type="password" name="password" className="password" placeholder="Password" />
            </form>
            <button className='btn_secondary'>Sign In</button>
            <p className='or_divider'>OR</p>
            <button className='google_signin_btn'><Image src='../../assets/icons/flat-color-icons_google.svg' className='google_icon' /><p>SignIn with Google</p></button>
            <button className='linkedin_signin_btn'><Image src='../../assets/icons/linkedin.svg' className='linkedin_icon' /><p>SignIn with LinkedIn</p></button>
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

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(AuthScreen);
