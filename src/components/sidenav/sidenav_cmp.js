import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const SideNav = (user) => (
  <>
    <div className="sidenav_container">
      <NavLink to="/">
        <img src="../../assets/logo/logo.svg" alt="Fior Logo" />
      </NavLink>

      <div className="sidenav_items">
        <NavLink to="/">
          <button type="button" className="btn-primary">Home</button>
        </NavLink>
        {user && (
          <NavLink to="/mentorspaces">
            <button type="button" className="btn-primary">Mentorspace</button>
          </NavLink>
        )}
        {user && (
          <NavLink to="/orgs">
            <button type="button" className="btn-primary">Organizations</button>
          </NavLink>
        )}
        <NavLink to="question-forum">
          <button type="button" className="btn-primary">Question Forum</button>
        </NavLink>
        <NavLink to="/blog">
          <button type="button" className="btn-primary">Blog</button>
        </NavLink>
        {user && (
          <NavLink to="/users">
            <button type="button" className="btn-primary">Users</button>
          </NavLink>
        )}
        {user && (
          <NavLink to="/notifications">
            <button type="button" className="btn-primary">Notifications</button>
          </NavLink>
        )}
        {user && (
          <NavLink to="/settings">
            <button type="button" className="btn-primary">Settings</button>
          </NavLink>
        )}
        <NavLink to="/pricing">
          <button type="button" className="btn-primary ">Pricing Plan</button>
        </NavLink>
        <NavLink to="about">
          <button type="button" className="btn-primary ">About Us</button>
        </NavLink>
      </div>
    </div>
  </>
);

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
});

export default connect(mapStateToProps)(SideNav);
