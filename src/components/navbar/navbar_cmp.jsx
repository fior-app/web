import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Image, Icon, Dropdown } from "semantic-ui-react";
import { signOut } from "../../store/actions/authActions";
import { withRouter } from "react-router-dom";

const options = ["Profile", "Sign Out"];

class Navbar extends Component {
  state = {
    avatarUrl: "https://i.ytimg.com/vi/9K46DNoE3Ko/maxresdefault.jpg",
  };
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
          <div className='searchbar'>
            <div>Search</div> <div className='spacer' /> <Icon name='search' />
          </div>
          <div className='spacer'></div>
          {user ? this.renderSignedInLinks() : this.renderSignedOutLinks()}
        </div>
      </React.Fragment>
    );
  }

  renderSignedOutLinks() {
    return (
      <NavLink to='/login'>
        <div className='nav-item'>Login</div>
      </NavLink>
    );
  }

  renderSignedInLinks() {
    const { avatarUrl } = this.state;

    return (
      <div className='row v-align'>
        <NavLink to='/'>
          <div className='nav-item'>Find Mentees</div>
        </NavLink>
        <NavLink to='/'>
          <div className='nav-item'>Find Mentors</div>
        </NavLink>
        <NavLink to='/groups'>
          <div className='nav-item'>Groups</div>
        </NavLink>

        <Dropdown
          options={options.map((option, i) => {
            return {
              key: option,
              text: option,
              value: i,
            };
          })}
          icon={null}
          trigger={<img src={avatarUrl} alt='avatar' className='avatar-mini' />}
          pointing='top right'
          onChange={this.handleAvatarMenuClick}
          floating
        />
        {/* <NavLink to='/' onClick={signOut}>
          <div className='nav-item'>Logout</div>
        </NavLink> */}
      </div>
    );
  }

  handleAvatarMenuClick = (e, { value }) => {
    const { history, signOut } = this.props;

    console.log(value);

    switch (value) {
      case 0:
        history.push("/profile");
        break;

      case 1:
        signOut();
        history.push("/");
        break;

      default:
        break;
    }
  };
}

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
