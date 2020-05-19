import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className='row'>
          <h1 className='logo'>Fior</h1>
          <div className='spacer'></div>
          <Link to='/'>
            <div className='nav-item'>Home</div>
          </Link>
          <Link to='/login'>
            <div className='nav-item'>Login</div>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
