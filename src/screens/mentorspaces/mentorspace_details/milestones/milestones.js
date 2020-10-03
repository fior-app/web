import React from "react";
import { Divider, List, Dropdown, Header, Button, Icon } from "semantic-ui-react";

import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import AddEditMilestone from "./add_edit_milestone";
import MilestoneSubtasks from "./milestone_subtasks";
import { setMilestoneStateOnFirebase } from "../../../../store/actions/mentorspaceActions";
import moment from 'moment';
import styles from "../../../../styles/mentorspace-milestone.module.css";

const currentDate = new Date();

const Milestones = ({
  milestones,
  isStateSetting,
  dispatchSetMilestoneState
}) => {
  const { mentorspaceId } = useParams();

  return (
    <>
      <div className={styles.milestone_header}>
        <Header as={"h2"} floated='left'>Milestones</Header>
        <AddEditMilestone mentorspaceId={mentorspaceId} trigger={(open) => (
          <Button onClick={open}>
            <Icon name={'plus'}/>
            Milestone
          </Button>
        )}/>
      </div>
      <Divider/>
      <List>
        {milestones ? (
          Object.keys(milestones).map((key) => {
            const milestone = { ...milestones[key], id: key };
            const isOverdue = moment(milestone.due).isBefore(moment(currentDate));

            return milestone ? (
              <List.Item key={key}>
                <List.Content floated='right'>
                  {milestone.isComplete ? (
                    <Button
                      basic
                      icon
                      size={"mini"}
                      loading={isStateSetting}
                      disabled={isStateSetting}
                      onClick={() => dispatchSetMilestoneState(milestone.id, false)}
                    >
                      <Icon name='wait'/>
                      &nbsp;Set as Pending
                    </Button>
                  ) : (
                    <Button
                      basic
                      icon
                      positive
                      size={"mini"}
                      loading={isStateSetting}
                      disabled={isStateSetting}
                      onClick={() => dispatchSetMilestoneState(milestone.id, true)}
                    >
                      <Icon name='check'/>
                      &nbsp;Complete
                    </Button>
                  )}
                  <Dropdown icon='ellipsis vertical'>
                    <Dropdown.Menu direction={"left"}>
                      <AddEditMilestone
                        mentorspaceId={mentorspaceId}
                        milestone={milestone}
                        trigger={(open) => (
                          <Dropdown.Item text='Edit' onClick={open}/>
                        )}/>
                    </Dropdown.Menu>
                  </Dropdown>
                </List.Content>
                {!milestone.isComplete ? (
                  <List.Icon name='wait' color={isOverdue ? "red" : "black"}/>
                ) : (
                  <List.Icon name='check' color="green"/>
                )}
                <List.Content>
                  <List.Header>{milestone.title}</List.Header>
                  <List.Description>{isOverdue ? 'Overdue' : 'Due'} on {milestone.due}</List.Description>
                  {!milestone.isComplete && <MilestoneSubtasks milestone={milestone}/>}
                </List.Content>
              </List.Item>
            ) : (
              <div key={key}/>
            );
          })
        ) : (
          <li>No messages</li>
        )}
      </List>
    </>
  );
};

const mapStateToProps = (state) => ({
  milestones: state.firestore.data.milestones,
  isStateSetting: state.groups.setStateMilestone.loading,
  isStateError: state.groups.setStateMilestone.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetMilestoneState:
    (milestoneId, state) => dispatch(setMilestoneStateOnFirebase(milestoneId, state)),
});

export default compose(
  firestoreConnect((props) => [
    {
      collection: 'milestones',
      // orderBy: ['due', 'desc'],
      limit: 25,
      where: ['groupId', '==', props.match.params.mentorspaceId],
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(Milestones);
