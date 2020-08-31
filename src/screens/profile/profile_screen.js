import React, { Component } from 'react';
import {
  Container, Grid, Image, Menu, Icon, Loader,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import {
  Switch, Route, NavLink, Redirect,
} from 'react-router-dom';

import ProfileMentor from './profile_mentor';
import ProfileSettings from './profile_settings';
import styles from '../../styles/profile.module.css';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defAvatarUrl: 'https://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg',
      isLoading: true,
    };
  }

  render() {
    const { defAvatarUrl, isLoading } = this.state;
    const { user } = this.props;

    return (
      <Container>
        <Grid columns="equal">
          <Grid.Column width={4}>

            <div className={styles.avatar_container}>
              <Image className={styles.avatar} src={user && user.profilePicture ? user.profilePicture : defAvatarUrl} alt="avatar" circular />
              <div className={styles.avatar_mid}>
                <label htmlFor="upload">
                  <Icon className={styles.avatar_upload_icon} name="upload" size="big" />
                  <input id="upload" className={styles.avatar_input} type="file" accept="image/x-png, image/gif, image/jpeg" />
                </label>
              </div>
            </div>

            <h2>{user && user.name}</h2>
            <p>{user && user.bio ? user.bio : 'Something interesting'}</p>

            <Grid.Row className={styles.section_wrapper}>
              <h3>Organizations</h3>
              <div>You havent joined to any organization yet</div>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column>
            <Grid.Row>
              <Menu tabular>
                <Menu.Item as={NavLink} name="mentor" to="/profile/mentor">
                  Mentor
                </Menu.Item>
                <Menu.Item as={NavLink} name="settings" to="/profile/settings">
                  Settings
                </Menu.Item>
              </Menu>
            </Grid.Row>
            <Grid.Row>
              <Switch>
                <Route exact path="/profile/mentor" component={ProfileMentor} />
                <Route exact path="/profile/settings" component={ProfileSettings} />
                <Redirect exact path="/profile" to="/profile/mentor" />
              </Switch>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
