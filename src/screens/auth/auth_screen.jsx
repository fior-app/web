import React, { Component } from "react";
import Login from "../../components/auth/login/login_cmp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./auth.css";
import Register from "../../components/auth/register/register_cmp";
import { Image } from "semantic-ui-react";

class AuthScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className='container'>
          <div className='row j-around'>
            <div className='placeholder'>
              <Image src='../../assets/img/auth.svg' size='massive' />
            </div>
            {/* <div className='spacer'></div> */}
            <Router>
              <div className='items-right'>
                <div className='row menu'>
                  <div className='menu-item'>
                    <NavLink to='/login' exact activeClassName='selected'>
                      Login
                    </NavLink>
                  </div>
                  <div className='menu-item'>
                    <NavLink
                      to='/login/welcome'
                      exact
                      activeClassName='selected'
                    >
                      Register
                    </NavLink>
                  </div>
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
