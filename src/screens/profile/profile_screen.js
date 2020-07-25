import React, { Component } from "react";
import { Grid, Card } from "semantic-ui-react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { signOut } from "../../store/actions/authActions";

class ProfileScreen extends Component {
  state = {
    avatarUrl: "https://i.ytimg.com/vi/9K46DNoE3Ko/maxresdefault.jpg",
  };

  render() {
    const { avatarUrl } = this.state;

    const { user } = this.props;

    if (!user) return <Redirect to='/' />;

    return (
      <div className='container'>
        <div className='keep-margin'>
          <Grid columns='equal'>
            <Grid.Row>
              <Grid.Column>
                <div>Mentor Profile</div>
              </Grid.Column>

              <Grid.Column>
                <div>Mentee Profile</div>
              </Grid.Column>

              <Grid.Column>
                <div>Profile Settings</div>
              </Grid.Column>

              <Grid.Column width={8}></Grid.Column>
            </Grid.Row>
            <div className='v-spacer-2' />
            <Grid.Row>
              <Grid.Column>
                {/* <Image src={avatarUrl} size='small' circular /> */}
                <img src={avatarUrl} alt='avatar' className='avatar' />
              </Grid.Column>
              <Grid.Column width={8}>
                <h2>{user && user.name}</h2>
                <h4>Freelance Developer</h4>
                <div className='row'>
                  <label className='label-primary'>Javascript</label>
                  <div className='spacer-1'></div>
                  <label className='label-primary'>DevOps</label>
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className='card-primary'>
                  <div className='card-content'>
                    <div className='card-header'>Activity</div>
                    <Card.Description>
                      You don't have any activity yet
                    </Card.Description>
                  </div>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={6}>
                <div>
                  <h2>Groups</h2>
                  <div className='v-spacer-2'></div>
                  <div>You haven't joined to any group yet</div>
                  <div className='v-spacer-2'></div>
                </div>
                <div className='v-spacer-4'></div>
                <div>
                  <h2>Organizations</h2>
                  <div className='v-spacer-2'></div>
                  <div>You haven't joined to any organization yet</div>
                  <div className='v-spacer-2'></div>
                </div>
              </Grid.Column>
              <Grid.Column width={8}>
                <div>
                  <h2>Skills</h2>
                  <div className='divider-color'></div>
                  <div className='v-spacer-2'></div>
                  <div>You don't have added any skills yet</div>
                  <div className='v-spacer-2'></div>
                </div>
                <div className='v-spacer-4'></div>
                <div>
                  <h2>Medals</h2>
                  <div className='divider-color'></div>
                  <div className='v-spacer-2'></div>
                  <div>You don't have added any medals yet</div>
                  <div className='v-spacer-2'></div>
                </div>
                <div className='v-spacer-4'></div>
                <div>
                  <h2>Active Points</h2>
                  <div className='divider-color'></div>
                  <div className='v-spacer-2'></div>
                  <div>You don't have added any active points yet</div>
                  <div className='v-spacer-2'></div>
                </div>
                <div className='v-spacer-4'></div>
                <div>
                  <h2>Feedbacks</h2>
                  <div className='divider-color'></div>
                  <div className='v-spacer-2'></div>
                  <div>You haven't recieved any feedback yet</div>
                  <div className='v-spacer-2'></div>
                </div>
                <div className='v-spacer-4'></div>
              </Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
          </Grid>
          <div className='v-spacer-2' />
          <button className='btn-primary' onClick={this.handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  handleSignOut = () => {
    this.props.signOut();
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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
