import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';
import {Menu, Image, Dropdown} from 'semantic-ui-react';
import {signOut} from '../../store/actions/authActions';

import styles from '../../styles/navbar.module.css';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleSignOutClick = () => {
    // eslint-disable-next-line no-shadow
    const {history, signOut} = this.props;
    signOut();
    history.push('/');
  };

  render() {
    const {user} = this.props;

    return (
      <div className={styles.keep_margin}>
        <Menu secondary>
          <NavLink to="/">
            <div className={styles.fior_logo}>
              <Image
                src="../../assets/logo/logo.svg"
                alt="Fior Logo"
                size="small"
              />
            </div>
          </NavLink>
          <Menu.Menu position="left">
            <Menu.Item as={NavLink} name="blog" to="/blog">Blog</Menu.Item>
            <Menu.Item as={NavLink} name="forum" to="/forum">Forum</Menu.Item>
          </Menu.Menu>
          <Menu.Menu position="right">
            {user ? (
              <>
                <Menu.Item>Find Mentees</Menu.Item>
                <Menu.Item>Find Mentors</Menu.Item>
                <div className={styles.avatar}>
                  <Dropdown simple icon="user">
                    <Dropdown.Menu>
                      <Dropdown.Item as={NavLink} text="Profile" to="/profile"/>
                      <Dropdown.Item as={NavLink} text="Mentorspaces" to="/mentorspaces"/>
                      <Dropdown.Item
                        onClick={this.handleSignOutClick}
                        text="Sign Out"
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </>
            ) : <Menu.Item as={NavLink} text="Login" to="/login">Sign In</Menu.Item>}
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
});

const mapDispatchToProps = {signOut};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
