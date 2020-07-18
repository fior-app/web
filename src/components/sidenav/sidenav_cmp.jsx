import React, { Component } from "react";

class SideNav extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='sidenav_container'>
          <a href="#"> {/* Navigate to home screen */}
            <img src="../../assets/logo/logo.svg" alt="Fior Logo" />
          </a>
          <div className='sidenav_items'>
            <a href="">
              <button className='btn-primary'>Home</button>
            </a>
            <a href="../groups/GroupsScreen.js">
              <button className='btn-primary'>Mentorspace</button>
            </a>
            <a href="">
              <button className='btn-primary'>Organizations</button>
            </a>
            <a href="">
              <button className='btn-primary'>Question Forum</button>
            </a>
            <a href="../blogs">
              <button className='btn-primary'>Blog</button>
            </a>
            <a href="">
              <button className='btn-primary'>Users</button>
            </a>
            <a href="">
              <button className='btn-primary authenticated'>Notifications</button>
            </a>
            <a href="">
              <button className='btn-primary authenticated'>Settings</button>
            </a>
            <a href="">
              <button className='btn-primary unauthenticated'>Pricing Plan</button>
            </a>
            <a href="">
              <button className='btn-primary unauthenticated'>About Us</button>
            </a>
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
