import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { registerWithEmailAndPassword } from '../../../store/actions/authActions';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      password: '',
      passwordVerify: '',
      isMatching: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });

    if (e.target.id === 'passwordVerify') this.setState({ isMatching: true });
  };

  handleSubmit = (e) => {
    const {
      email, firstname, lastname, password, passwordVerify,
    } = this.state;

    e.preventDefault();
    if (password === passwordVerify) {
      this.props.registerWithEmailAndPassword({
        email,
        name: `${firstname} ${lastname}`,
        password,
      });
    } else {
      this.setState({ isMatching: false });
    }
  };

  render() {
    const { isMatching } = this.state;

    return (
      /* TODO: Show login success */
      <div className="auth_container">
        <form onSubmit={this.handleSubmit}>
          <div className="register_email_container">
            <div className="register_name_row">
              <input
                type="text"
                id="firstname"
                className="firstname"
                placeholder="First Name"
                required
                onChange={this.handleChange}
              />
              <input
                type="text"
                id="lastname"
                className="lastname"
                placeholder="Last Name"
                required
                onChange={this.handleChange}
              />
            </div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="email"
              required
              onChange={this.handleChange}
            />
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="password_register"
              required
              onChange={this.handleChange}
            />
            <input
              id="passwordVerify"
              type="password"
              placeholder="Verify Password"
              className="password_register"
              required
              onChange={this.handleChange}
            />
            {!isMatching && <div className="error">Passwords should match</div>}
            <div className="allow_tnc">
              <input
                type="checkbox"
                name="tnc_checkbox"
                className="tnc_checkbox"
              />
              {/* add checked="checked" on checked */}
              <span className="checkmark" />
              <p className="tnc_label">
                Agree to Terms and Conditions
              </p>
            </div>

            <button type="submit" className="register_btn secondary_btn">
              Register
            </button>
          </div>
        </form>
        <button type="button" className="google_signin_btn google_register">
          <Image
            src="../../assets/icons/flat-color-icons_google.svg"
            className="google_icon"
          />
          <p>Register with Google</p>
        </button>
        <button type="button" className="linkedin_signin_btn linkedin_register">
          <Image
            src="../../assets/icons/linkedin.svg"
            className="linkedin_icon"
          />
          <p>Register with LinkedIn</p>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  registerWithEmailAndPassword: (credentials) => dispatch(
    registerWithEmailAndPassword(credentials),
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
