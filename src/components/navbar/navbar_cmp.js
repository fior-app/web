import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { withRouter } from "react-router-dom";
import { Menu, Image, Dropdown } from "semantic-ui-react";
import styles from "../../styles/navbar.module.css";

class Navbar extends Component {
  state = {};

  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <div className={styles.keep_margin}>
          {user ? this.renderSignedInNavbar() : this.renderSignedOutNavbar()}
        </div>
      </React.Fragment>
    );
  }

  renderSignedInNavbar() {
    return (
      <Menu secondary>
        <NavLink to='/'>
          <div className={styles.fior_logo}>
            <Image
              src='../../assets/logo/logo.svg'
              alt='Fior Logo'
              size='small'
            />
          </div>
        </NavLink>
        <Menu.Menu position='right'>
          <Menu.Item>Find Mentees</Menu.Item>
          <Menu.Item>Find Mentors</Menu.Item>
          <div className={styles.avatar}>
            <Dropdown simple icon='user'>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={this.handleProfileClick}
                  text='Proflie'
                />
                <Dropdown.Item
                  onClick={this.handleSignOutClick}
                  text='Sign Out'
                />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Menu.Menu>
      </Menu>
    );
  }

  renderSignedOutNavbar() {
    return (
      <Menu secondary>
        <NavLink to='/'>
          <div className={styles.fior_logo}>
            <Image
              src='../../assets/logo/logo.svg'
              alt='Fior Logo'
              size='small'
            />
          </div>
        </NavLink>
        <Menu.Menu position='right'>
          <Menu.Item onClick={this.handleSignInClick}>Sign In</Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }

  handleSignInClick = () => {
    this.props.history.push('/login');
  };

  handleProfileClick = () => {
    this.props.history.push('/profile');
  };

  handleSignOutClick = () => {
    const { history, signOut } = this.props;
    signOut();
    history.push("/");
  };
}

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
