import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Image, Button } from "semantic-ui-react";
import "./navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className='row navbar v-align'>
          <NavLink to='/'>
            <div className='logo'>
              <Image src='../../assets/logo/logo.png' />
            </div>
          </NavLink>
          <div className='spacer'></div>
          <NavLink to='#'>
            <div className='nav-item'>Pricing Plan</div>
          </NavLink>
          <NavLink to='#'>
            <div className='nav-item'>About Us</div>
          </NavLink>
          <NavLink to='/login'>
            <Button color='green' className='nav-item btn-login'>
              Login
            </Button>
          </NavLink>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
