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

          {/* Background Vectors */}
          <div className='vectors'>
            <Image src='../../assets/vectors/cross.svg' className='cross' />
            <Image src='../../assets/vectors/double_circle.svg' className='double_circle' />
            <Image src='../../assets/vectors/single_sqr.svg' className='single_sqr' />
            <Image src='../../assets/vectors/double_circle.svg' className='double_circle_small' />
            <Image src='../../assets/vectors/cross.svg' className='cross_small' />
            <Image src='../../assets/vectors/overlap_sqr.svg' className='overlap_sqr' />
            <Image src='../../assets/vectors/double_square.svg' className='double_square' />
          </div>
          {/* End of Background Vectors */}

          {/* Login and Register Forms */}
          <div className='login-forms row'>
            <Image src='../../assets/vectors/signin_bg.svg' className='signin_bg register_bg' />

            {/* Tabs */}
            <Image src='../../assets/vectors/form_tab_right.svg' className='form_tab_right form_tab_left' />
            <p className='signin_text'>Sign In</p>
            <p className='register_text'>Register</p>
            {/* Enf of Tabs */}

            {/* Form Fields */}

            {/* Signin form fields */}
            {/* <form> */}
            {/* <input type="text" name="username" className="username" placeholder="Username" /> */}
            {/* <input type="password" name="password" className="password" placeholder="Password" /> */}
            {/* </form> */}

            {/* Register form fields */}
            <form>
              <div className='register_name_row row'>
                <input type="text" name="firstname" className="firstname" placeholder="First Name" />
                <input type="text" name="lastname" className="lastname" placeholder="Last Name" />
              </div>
              <input type="text" name="email" className="email" placeholder="Email" />
              <input type="password" name="password_register" className="password_register" placeholder="Password" />
              <div className='allow_tnc row'>
                <input type="checkbox" name="tnc_checkbox" className='tnc_checkbox' checked="checked" />
                <span className='checkmark'></span>
                <label htmlFor="TnC" className='tnc_label'>Agree to Terms and Conditions</label>
              </div>
            </form>
            {/* End of Form Fields */}

            {/* Secondary Btn */}
            {/* Sign In button */}
            {/* <button className='signin_btn secondary_btn'>Sign In</button> */}

            {/* Register button */}
            <button className='register_btn secondary_btn'>Register</button>

            {/* End of Secondary Btn */}

            {/* Only for signin tab */}
            {/* <p className='or_divider'>OR</p> */}

            {/* Google sign in LinkedIn sign in btns */}
            <button className='google_signin_btn google_signin google_register'><Image src='../../assets/icons/flat-color-icons_google.svg' className='google_icon' /><p>SignIn with Google</p></button>
            <button className='linkedin_signin_btn linkedin_signin linkedin_register'><Image src='../../assets/icons/linkedin.svg' className='linkedin_icon' /><p>SignIn with LinkedIn</p></button>

            {/* Add .google_register and .linkedin_register classes when toggling to register tab */}
            
            {/* End of Google sign in LinkedIn sign in btns */}

          </div>
          {/* End of Login and Register Forms */}

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
