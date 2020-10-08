import React, { Component } from 'react';
import {
  Button, Card,
  Confirm,
  Grid, Icon, Label, LabelDetail, Modal,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import CreateMentorspace from '../mentorspaces/create/create_mentorspace';
import { getUserSkills, addUserSkills, deleteUserSkill } from '../../store/actions/skillActions';
import { getGroupsMe } from '../../store/actions/mentorspaceActions';
import { setMentor } from '../../store/actions/userActions';
import SelectCategories from '../../components/categories/select_categories';
import styles from '../../styles/profile.module.css';
import VerifySkill from './verify/verify_skill';

class ProfileMentor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSkillsModal: false,
      showMentorspacesModal: false,
      showSkillDeleteOf: null,
    };
  }

  componentDidMount() {
    this.props.getGroupsMe();
    this.props.getUserSkills();
  }

  closeSkillsModal = () => {
    this.setState({ showSkillsModal: false });
  };

  closeMentorspacesModal = () => {
    this.setState({ showMentorspacesModal: false });
  };

  closeSkillDeleteModal = () => {
    this.setState({ showSkillDeleteOf: null });
  };

  onSubmit = (skills) => {
    this.props.addUserSkills(skills.map((skill) => skill.id));
  };

  render() {
    const {
      user, groups, userSkills, setMentorState,
    } = this.props;

    console.log(groups);

    if (!user) return <Redirect to="/" />;

    return (
      <div>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={8}>
              <Grid.Row className={styles.section_wrapper}>
                <h3>Status</h3>
                {!user.isMentor
                  ? (
                    <>
                      <div>You are not a mentor yet</div>
                      <Button
                        onClick={() => {
                          this.props.dispatchSetMentor(true);
                        }}
                        disabled={setMentorState.isLoading}
                        loading={setMentorState.isLoading}
                        color="teal"
                      >
                        Become a mentor
                      </Button>
                    </>
                  ) : (
                    <>
                      <div>You are a active mentor</div>
                      <Button
                        negative
                        onClick={() => {
                          this.props.dispatchSetMentor(false);
                        }}
                        disabled={setMentorState.isLoading}
                        loading={setMentorState.isLoading}
                      >
                        Stop mentoring
                      </Button>
                    </>
                  )}
              </Grid.Row>
              <Grid.Row className={styles.section_wrapper}>
                <div className={styles.section_title}>
                  <h3>Skills</h3>
                  <Modal
                    trigger={(
                      <Icon
                        className={styles.add_icon}
                        name="add"
                        onClick={() => this.setState({ showSkillsModal: true })}
                      />
                    )}
                    size="mini"
                    onClose={this.closeSkillsModal}
                    open={this.state.showSkillsModal}
                    closeIcon
                  >
                    <SelectCategories
                      existingSkills={userSkills.map((userSkill) => userSkill.skill)}
                      closeModal={this.closeSkillsModal}
                      onSubmit={this.onSubmit}
                    />
                  </Modal>
                </div>
                {
                  userSkills.length > 0
                    ? userSkills.map((userSkill) => (
                      <Label key={userSkill.id} image>
                        {userSkill.skill.name}
                        <Icon
                          name="close"
                          onClick={() => this.setState({ showSkillDeleteOf: userSkill.id })}
                        />
                        <Confirm
                          open={this.state.showSkillDeleteOf === userSkill.id}
                          onCancel={() => this.closeSkillDeleteModal()}
                          onConfirm={() => {
                            this.props.deleteUserSkill(userSkill.id);
                            this.closeSkillDeleteModal();
                          }}
                        />
                        {userSkill.isVerified
                          ? <LabelDetail className={styles.verified}>Verified</LabelDetail>
                          : <VerifySkill userskillId={userSkill.id} skill={userSkill.skill} />}
                      </Label>
                    )) : <div>You dont have added any skills yet</div>
                }
              </Grid.Row>
              <Grid.Row className={styles.section_wrapper}>
                <h3>Active Points</h3>
                <div>You dont have added any active points yet</div>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column width={8}>
              <Grid.Row className={styles.section_wrapper}>
                <div className={styles.section_title}>
                  <h3>Mentorspaces</h3>
                  <Modal
                    trigger={(
                      <Icon
                        className={styles.add_icon}
                        name="add"
                        onClick={() => this.setState({ showMentorspacesModal: true })}
                      />
                    )}
                    size="mini"
                    onClose={this.closeMentorspacesModal}
                    open={this.state.showMentorspacesModal}
                    closeIcon
                  >
                    <CreateMentorspace closeModal={this.closeMentorspacesModal} />
                  </Modal>
                </div>
                <Card.Group>
                  {groups.reverse().map((mentorspaceItem) => (
                    <Card
                      as={Link}
                      to={`/mentorspaces/${mentorspaceItem.group.id}`}
                      key={mentorspaceItem.id}
                    >
                      <Card.Content>
                        <Card.Header>{mentorspaceItem.group.name}</Card.Header>
                        {mentorspaceItem.group.description && (
                          <Card.Description>
                            {mentorspaceItem.group.description}
                          </Card.Description>
                        )}
                      </Card.Content>
                    </Card>
                  ))}
                </Card.Group>
              </Grid.Row>
              <Grid.Row className={styles.section_wrapper}>
                <h3>Feedbacks</h3>
                <div>You havent recieved any feedback yet</div>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.currentUser,
  groups: state.groups.groups.groups,
  userSkills: state.skills.userSkills.items,
  setMentorState: state.user.setMentorState,
});

const mapDispatchToProps = (dispatch) => ({
  getUserSkills: () => dispatch(getUserSkills()),
  getGroupsMe: () => dispatch(getGroupsMe()),
  addUserSkills: (skillIds) => dispatch(addUserSkills(skillIds)),
  deleteUserSkill: (userSkillId) => dispatch(deleteUserSkill(userSkillId)),
  dispatchSetMentor: (isMentor) => dispatch(setMentor(isMentor)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMentor);
