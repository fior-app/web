import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const SideNav = () => (
  <>
    <div className="sidenav_container">
      <NavLink to="/">
        <img src="../../assets/logo/logo.svg" alt="Fior Logo" />
      </NavLink>
    </div>
  </>
);

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
});

export default connect(mapStateToProps)(SideNav);
