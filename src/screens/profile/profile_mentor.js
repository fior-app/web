import React, { Component } from 'react';
import {
  Grid, Card, Icon, Modal,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { signOut } from '../../store/actions/authActions';
import { getUserSkills, addUserSkills, deleteUserSkill } from '../../store/actions/skillActions';
import AddSkills from './skills/AddSkills';

class ProfileMentor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarUrl: 'https://i.ytimg.com/vi/9K46DNoE3Ko/maxresdefault.jpg',
      showModal: false,
    };
  }

  componentDidMount() {
    this.props.getUserSkills();
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  onSubmit = (skills) => {
    this.props.addUserSkills(skills.map((skill) => skill.id));
  };

  handleSignOut = () => {
    this.props.signOut();
  };

  render() {
    const { avatarUrl } = this.state;
    const { user, userSkills } = this.props;

    if (!user) return <Redirect to="/" />;

    return (
      <div>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column>
              {/* <Image src={avatarUrl} size='small' circular /> */}
              <img src={avatarUrl} alt="avatar" className="avatar" />
            </Grid.Column>
            <Grid.Column width={8}>
              <h2>{user && user.name}</h2>
              <h4>{user && user.bio ? user.bio : 'Something interesting'}</h4>
            </Grid.Column>
            <Grid.Column>
              <div className="card-primary">
                <div className="card-content">
                  <div className="card-header">Activity</div>
                  <Card.Description>
                    You dont have any activity yet
                  </Card.Description>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
          <div className="v-spacer-2" />
          <Grid.Row>
            <Grid.Column width={8}>
              <div>
                <h2>Groups</h2>
                <div className="v-spacer-2" />
                <div>You havent joined to any group yet</div>
                <div className="v-spacer-2" />
              </div>
              <div className="v-spacer-4" />
              <div>
                <h2>Organizations</h2>
                <div className="v-spacer-2" />
                <div>You havent joined to any organization yet</div>
                <div className="v-spacer-2" />
              </div>
            </Grid.Column>
            <Grid.Column width={8}>
              <div>
                <div className="row j-between">
                  <h2>Skills</h2>
                  <Modal
                    trigger={
                      <Icon name="add" onClick={() => this.setState({ showModal: true })} />
                    }
                    size="mini"
                    closeIcon
                    onClose={this.closeModal}
                    open={this.state.showModal}
                  >
                    <AddSkills
                      existingSkills={userSkills.map((userSkill) => userSkill.skill)}
                      closeModal={this.closeModal}
                      onSubmit={this.onSubmit}
                    />
                  </Modal>
                </div>
                <div className="divider-color" />
                <div className="v-spacer-2" />
                <div className="row">
                  {
                    userSkills.length > 0
                      ? userSkills.map((userSkill) => (
                        <div className="label-primary" key={userSkill.id}>
                          <span>{userSkill.skill.name}</span>
                          <Icon
                            name="delete"
                            onClick={() => this.props.deleteUserSkill(userSkill.id)}
                          />
                        </div>
                      )) : <div>You dont have added any skills yet</div>
                  }
                </div>
                <div className="v-spacer-2" />
              </div>
              <div className="v-spacer-4" />
              <div>
                <h2>Medals</h2>
                <div className="divider-color" />
                <div className="v-spacer-2" />
                <div>You dont have added any medals yet</div>
                <div className="v-spacer-2" />
              </div>
              <div className="v-spacer-4" />
              <div>
                <h2>Active Points</h2>
                <div className="divider-color" />
                <div className="v-spacer-2" />
                <div>You dont have added any active points yet</div>
                <div className="v-spacer-2" />
              </div>
              <div className="v-spacer-4" />
              <div>
                <h2>Feedbacks</h2>
                <div className="divider-color" />
                <div className="v-spacer-2" />
                <div>You havent recieved any feedback yet</div>
                <div className="v-spacer-2" />
              </div>
              <div className="v-spacer-4" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <div className="v-spacer-2" />
        <div className="row end">
          <button type="button" className="btn-primary" onClick={this.handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
  userSkills: state.skills.userSkills,
});

// eslint-disable-next-line react-redux/mapDispatchToProps-prefer-shorthand
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
  getUserSkills: () => dispatch(getUserSkills()),
  addUserSkills: (skillIds) => dispatch(addUserSkills(skillIds)),
  deleteUserSkill: (userSkillId) => dispatch(deleteUserSkill(userSkillId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMentor);
