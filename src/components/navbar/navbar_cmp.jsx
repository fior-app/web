import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import "./navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <div className='row navbar v-align'>
          <NavLink to='/'>
            <div className='logo'>
              <Image src='../../assets/logo/logo.png' />
            </div>
          </NavLink>
          {user ? (
            <NavLink to="/logout">
              <div className="nav-item">
                Logout<span> ({user.name.split(" ")[0]})</span>
              </div>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <div className="nav-item">Login</div>
            </NavLink>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
});

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
