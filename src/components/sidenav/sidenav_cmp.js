import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class SideNav extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='sidenav_container'>
          <NavLink to='/'>
            <img src='../../assets/logo/logo.svg' alt='Fior Logo' />
          </NavLink>

          <div className='sidenav_items'>
            <NavLink to='/'>
              <button className='btn-primary'>Home</button>
            </NavLink>
            <NavLink to='/mentorspace'>
              <button className='btn-primary'>Mentorspace</button>
            </NavLink>
            <NavLink to='/orgs'>
              <button className='btn-primary'>Organizations</button>
            </NavLink>
            <NavLink to='question-forum'>
              <button className='btn-primary'>Question Forum</button>
            </NavLink>
            <NavLink to='/blog'>
              <button className='btn-primary'>Blog</button>
            </NavLink>
            <NavLink to='/users'>
              <button className='btn-primary'>Users</button>
            </NavLink>
            <NavLink to='/notifications'>
              <button className='btn-primary authenticated'>
                Notifications
              </button>
            </NavLink>
            <NavLink to='/settings'>
              <button className='btn-primary authenticated'>Settings</button>
            </NavLink>
            <NavLink to='/pricing'>
              <button className='btn-primary unauthenticated'>
                Pricing Plan
              </button>
            </NavLink>
            <NavLink to='about'>
              <button className='btn-primary unauthenticated'>About Us</button>
            </NavLink>
          </div>

          {/* authenticated: display only for registered users. if not, style{display:none; visibility:none} */}
          {/* unauthenticated: display only for public users. if not, style{display:none; visibility:none} */}

          {/* sidenav_container: style{display:none; visibility:none} for landing screen and login screen - Already done*/}
        </div>
      </React.Fragment>
    );
  }
}

export default SideNav;
