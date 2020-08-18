import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  Switch, Route, NavLink, Redirect,
} from 'react-router-dom';

import ProfileMentor from './profile_mentor';
import ProfileSettings from './profile_settings';

const ProfileScreen = () => (
  <div className="container">
    <div className="keep-margin spacer">
      <Grid columns="equal">
        <Grid.Row>
          <Grid.Column>
            <NavLink to="/profile/mentor" activeClassName="active">
              <button type="button" className="btn-primary">Mentor</button>
            </NavLink>
          </Grid.Column>
          <Grid.Column>
            <button type="button" className="btn-primary">Mentee</button>
          </Grid.Column>
          <Grid.Column>
            <NavLink to="/profile/settings" activeClassName="active">
              <button type="button" className="btn-primary">Settings</button>
            </NavLink>
          </Grid.Column>
          <Grid.Column width={10} />
        </Grid.Row>
        <div className="v-spacer-4" />
      </Grid>
      <Switch>
        <Route exact path="/profile/mentor" component={ProfileMentor} />
        <Route exact path="/profile/settings" component={ProfileSettings} />
        <Redirect exact path="/profile" to="/profile/mentor" />
      </Switch>
    </div>
  </div>
);

export default connect()(ProfileScreen);
