import React, { Component } from 'react';
import {
  Grid, Icon, Label, Modal,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getUserSkills, addUserSkills, deleteUserSkill } from '../../store/actions/skillActions';
import AddSkills from './skills/add_skills';
import styles from '../../styles/profile.module.css';

class ProfileMentor extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
                      <Icon className={styles.add_icon} name="add" onClick={() => this.setState({ showModal: true })} />
                    }
                    size="mini"
                    onClose={this.closeModal}
                    open={this.state.showModal}
                    closeIcon
                  >
                    <AddSkills
                      existingSkills={userSkills.map((userSkill) => userSkill.skill)}
                      closeModal={this.closeModal}
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
                <h3>Groups</h3>
                <div>You havent joined to any group yet</div>
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
  userSkills: state.skills.userSkills,
});

const mapDispatchToProps = (dispatch) => ({
  getUserSkills: () => dispatch(getUserSkills()),
  addUserSkills: (skillIds) => dispatch(addUserSkills(skillIds)),
  deleteUserSkill: (userSkillId) => dispatch(deleteUserSkill(userSkillId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMentor);
