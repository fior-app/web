import React, { Component } from 'react';
import {
  Grid, Form, Button,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { updateMe } from '../../store/actions/userActions';
import styles from '../../styles/profile.module.css';

class ProfileSettings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      bio: '',
    };
  }

  componentDidMount() {
    const { user } = this.props;

    if (user) {
      this.setState({
        name: user.name,
        bio: user.bio,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const newProps = this.props;
    if (prevProps.user !== newProps.user) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        name: newProps.user.name,
        bio: newProps.user.bio,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.updateMe(this.state.name, this.state.bio);
  };

  render() {
    const { user, updateState } = this.props;

    if (!user) return <Redirect to="/" />;

    return (
      <div>
        <Grid>
          <Grid.Column>
            <Grid.Row stretched className={styles.section_wrapper}>
              <h3>Edit Profile</h3>
              <Form className="spacer" onSubmit={this.handleSubmit}>
                <Form.Field>
                  <Form.Input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={this.state.name ? this.state.name : ''}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Form.TextArea
                    label="About"
                    name="bio"
                    placeholder="Tell more about you..."
                    value={this.state.bio ? this.state.bio : ''}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Button
                    type="submit"
                    disabled={updateState.isLoading}
                    loading={updateState.isLoading}
                  >
                    Save
                  </Button>
                </Form.Field>
              </Form>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
  updateState: state.user.updateState,
});

const mapDispatchToProps = { updateMe };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
