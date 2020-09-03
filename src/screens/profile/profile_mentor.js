import React, { Component } from 'react';
import {
  Grid, Icon, Label, Modal,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CreateMentorspace from '../mentorspaces/create/create_mentorspace';
import { getUserSkills, addUserSkills, deleteUserSkill } from '../../store/actions/skillActions';
import SelectCategories from '../../components/categories/select_categories';
import styles from '../../styles/profile.module.css';

class ProfileMentor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSkillsModal: false,
      showMentorspacesModal: false,
    };
  }

  componentDidMount() {
    this.props.getUserSkills();
  }

  closeSkillsModal = () => {
    this.setState({ showSkillsModal: false });
  };

  closeMentorspacesModal = () => {
    this.setState({ showMentorspacesModal: false });
  };

  onSubmit = (skills) => {
    this.props.addUserSkills(skills.map((skill) => skill.id));
  };

  render() {
    const { user, userSkills } = this.props;

    if (!user) return <Redirect to="/" />;

    return (
      <div>
        <Grid columns="equal">
          <Grid.Row>
            <Grid.Column width={8}>
              <Grid.Row className={styles.section_wrapper}>
                <div className={styles.section_title}>
                  <h3>Skills</h3>
                  <Modal
                    trigger={
                      <Icon className={styles.add_icon} name="add" onClick={() => this.setState({ showSkillsModal: true })} />
                    }
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
                      <Label key={userSkill.id}>
                        {userSkill.skill.name}
                        <Icon
                          name="delete"
                          onClick={() => this.props.deleteUserSkill(userSkill.id)}
                        />
                      </Label>
                    )) : <div>You dont have added any skills yet</div>
                }
              </Grid.Row>
              <Grid.Row className={styles.section_wrapper}>
                <h3>Medals</h3>
                <div>You dont have added any medals yet</div>
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
                    trigger={
                      <Icon className={styles.add_icon} name="add" onClick={() => this.setState({ showMentorspacesModal: true })} />
                    }
                    size="mini"
                    onClose={this.closeMentorspacesModal}
                    open={this.state.showMentorspacesModal}
                    closeIcon
                  >
                    <CreateMentorspace closeModal={this.closeMentorspacesModal} />
                  </Modal>
                </div>
                {/* {
                  userSkills.length > 0
                    ? userSkills.map((userSkill) => (
                      <Label key={userSkill.id}>
                        {userSkill.skill.name}
                        <Icon
                          name="delete"
                          onClick={() => this.props.deleteUserSkill(userSkill.id)}
                        />
                      </Label>
                    )) : <div>You dont have added any skills yet</div>
                } */}
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
  userSkills: state.skills.userSkills.items,
});

const mapDispatchToProps = (dispatch) => ({
  getUserSkills: () => dispatch(getUserSkills()),
  addUserSkills: (skillIds) => dispatch(addUserSkills(skillIds)),
  deleteUserSkill: (userSkillId) => dispatch(deleteUserSkill(userSkillId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMentor);
