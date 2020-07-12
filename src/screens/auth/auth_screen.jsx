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
        <div className='container'>
          {/* Background Vectors */}
          <div className='vectors'>
            <Image src='../../assets/vectors/cross.svg' className='cross' />
            <Image
              src='../../assets/vectors/double_circle.svg'
              className='double_circle'
            />
            <Image
              src='../../assets/vectors/single_sqr.svg'
              className='single_sqr'
            />
            <Image
              src='../../assets/vectors/double_circle.svg'
              className='double_circle_small'
            />
            <Image
              src='../../assets/vectors/cross.svg'
              className='cross_small'
            />
            <Image
              src='../../assets/vectors/overlap_sqr.svg'
              className='overlap_sqr'
            />
            <Image
              src='../../assets/vectors/double_square.svg'
              className='double_square'
            />
          </div>
          {/* End of Background Vectors */}

          {/* Login and Register Forms */}
          <div className='login-forms row'>
            <Image
              src='../../assets/vectors/signin_bg.svg'
              className='signin_bg'
            />
            {/* Tabs */}
            <Image
              src='../../assets/vectors/form_tab_right.svg'
              className='form_tab_right form_tab_left'
            />
            <p
              className='signin_text'
              onClick={this.changeComponent}
              id='login'
            >
              Login
            </p>
            <p
              className='register_text'
              onClick={this.changeComponent}
              id='register'
            >
              Register
            </p>
            {/* Enf of Tabs */}
            {loginComponent ? <Login /> : <Register />}
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
}

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(AuthScreen);
