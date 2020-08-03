import React, { Component } from "react";
import { Grid, Form, Icon, Modal, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { updateMe } from "../../store/actions/userActions";

class ProfileSettings extends Component {

  state = {
    name: "",
    bio: "",
  };

  componentDidMount() {
    const { user } = this.props;

    if (user) {
      this.setState({ name: user.name, bio: user.bio })
    }
  }

  componentDidUpdate(oldProps) {
    const newProps = this.props
    if (oldProps.user !== newProps.user) {
      this.setState({
        name: newProps.user.name,
        bio: newProps.user.bio,
      })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.updateMe(this.state.name, this.state.bio)
  };

  render() {
    const { user, updateState } = this.props;

    if (!user) return <Redirect to='/' />;

    return (
      <div>
        <Grid>
          <Grid.Column>
            <Grid.Row>
              <div>
                <h2>Settings</h2>
              </div>
            </Grid.Row>
            <div className='v-spacer-2' />
            <Grid.Row stretched={true}>
              <Form className="spacer" onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Name</label>
                  <input type='text'
                    name="name"
                    value={this.state.name ? this.state.name : ""}
                    onChange={this.handleChange} />
                </Form.Field>
                <Form.Field>
                  <label>Bio</label>
                  <textarea
                    name="bio"
                    value={this.state.bio ? this.state.bio : ""}
                    onChange={this.handleChange} >
                  </textarea>
                </Form.Field>
                <div>Loading: {`${updateState.isLoading}`}</div>
                <button
                  type='submit'
                  className='secondary_btn'>
                  Save</button>
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
  updateState: state.user.updateState
});

const mapDispatchToProps = (dispatch) => {
  return {
    updateMe: (name, bio) => dispatch(updateMe(name, bio))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings);
