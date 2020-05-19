import React, { Component } from "react";
import Login from "../../components/auth/login/login_cmp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./auth.css";
import Register from "../../components/auth/register/register_cmp";

class AuthScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row'>
            <div className='placeholder'></div>
            <Router>
              <div className='items-right'>
                <div className='row menu'>
                  <Link to='/login'>
                    <div className='menu-item'>Login</div>
                  </Link>
                  <Link to='/login/welcome'>
                    <div className='menu-item'>Register</div>
                  </Link>
                </div>
                <Switch>
                  <Route path='/login' exact component={Login} />
                  <Route path='/login/welcome' exact component={Register} />
                </Switch>
              </div>
            </Router>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AuthScreen;
