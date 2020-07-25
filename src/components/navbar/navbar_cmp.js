import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import { withRouter } from "react-router-dom";

// const options = ["Profile", "Sign Out"];

class Navbar extends Component {
  state = {
    avatarUrl: "https://i.ytimg.com/vi/9K46DNoE3Ko/maxresdefault.jpg",
  };
  render() {
    const { user } = this.props;

    // return (
    //   <React.Fragment>
    //     <div className='row navbar v-align'>
    //       <NavLink to='/'>
    //         <div className='logo'>
    //           <Image src='../../assets/logo/logo.png' />
    //         </div>
    //       </NavLink>
    //       <div className='searchbar'>
    //         <div>Search</div> <div className='spacer' /> <Icon name='search' />
    //       </div>
    //       <div className='spacer'></div>
    //       {user ? this.renderSignedInLinks() : this.renderSignedOutLinks()}
    //     </div>
    //   </React.Fragment>
    // );

    return (
      <React.Fragment>
        {user ? this.renderSignedInNavbar() : this.renderSignedOutNavbar()}

        {/* only for private nav */}

        {/* navbar menu_btn logo search_bar nav_signin_btn nav_register_btn for common */}
        {/* nav_home menu_btn_home logo_home search_bar_home nav_signin_btn_home nav_register_btn_home for full width nav unregistered */}
        {/* nav_public menu_btn_public logo_public search_bar_public nav_signin_btn_public nav_register_btn_public for half width nav unregistered */}
        {/* nav_private menu_btn_private logo_private search_bar_private for half width nav registered */}

        {/* if mentor only profile private_nav_btn1 style={display: none; visibility: hidden;} */}
        {/* if mentee only profile private_nav_btn1 style={left: 67.19vw;} */}
        {/* for unregustered users private_nav_btn1, private_nav_btn2 style={display: none; visibility: hidden;} */}
      </React.Fragment>
    );
  }

  renderSignedInNavbar() {
    return (
      <div
        className='row navbar 
    nav_home 
    nav_public 
    nav_private 
    v-align'
      >
        <button className='private_nav_btn1 btn-primary'>Find Mentees</button>
        <button className='private_nav_btn2 btn-primary'>Find Mentors</button>
        <img
          src='../../assets/img/avatar.png'
          alt='profile'
          className='profile_icon 
          profile_icon_home 
          profile_icon_public 
          profile_icon_private'
          onClick={this.handleProfileClick}
        />
      </div>
    );
  }

  renderSignedOutNavbar() {
    return (
      <div className='row navbar nav_private v-align'>
        <input
          type='text'
          placeholder='Search'
          className='search_bar 
          search_bar_home 
          search_bar_public 
          search_bar_private'
        />

        <button
          className='nav_signin_btn nav_signin_btn_public btn-primary'
          onClick={this.handleSignInClick}
        >
          Sign In
        </button>

        {/* <button className='nav_register_btn nav_register_btn_public secondary_btn'>
          Register
        </button> */}
      </div>
    );
  }

  handleSignInClick = () => {
    this.props.history.push("/login");
  };

  handleProfileClick = () => {
    this.props.history.push("/profile");
  };

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
