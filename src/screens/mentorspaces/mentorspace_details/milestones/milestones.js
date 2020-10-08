import React, { useState } from 'react';
import moment from 'moment';
import {
  Divider, List, Dropdown, Header, Button, Icon, Confirm,
} from 'semantic-ui-react';

import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddEditMilestone from './add_edit_milestone';
import MilestoneSubtasks from './milestone_subtasks';
import { setMilestoneStateOnFirebase, deleteMilestoneOnFirebase } from '../../../../store/actions/mentorspaceActions';
import styles from '../../../../styles/mentorspace-milestone.module.css';
import EmptyPlaceholder from '../../../../components/placeholder/empty_placeholder';

const currentDate = new Date();

const Milestones = ({
  milestones,
  isStateSetting,
  dispatchSetMilestoneState,
  dispatchDeleteMilestone,
}) => {
  const { mentorspaceId } = useParams();

  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteMilestone = (milestoneId) => {
    dispatchDeleteMilestone(milestoneId);
    onCloseDeleteMilestone();
  };

  const onOpenDeleteMilestone = (milestoneId) => {
    setDeleteId(milestoneId);
  };

  const onCloseDeleteMilestone = () => {
    setDeleteId(null);
  };

  return (
    <>
      <div className={styles.milestone_header}>
        <Header as="h2" floated="left">Milestones</Header>
        <AddEditMilestone
          mentorspaceId={mentorspaceId}
          trigger={(open) => (
            <Button color="teal" onClick={open}>
              <Icon name="plus" />
              Milestone
            </Button>
          )}
        />
      </div>
      <Divider />
      <List>
        {milestones ? (
          Object.keys(milestones).map((key) => {
            const milestone = { ...milestones[key], id: key };
            const isOverdue = moment(milestone.due).isBefore(moment(currentDate));

            return milestone ? (
              <List.Item key={key} className={styles.milestone}>
                <List.Content floated="right">
                  {milestone.isComplete ? (
                    <Button
                      basic
                      icon
                      size="mini"
                      loading={isStateSetting}
                      disabled={isStateSetting}
                      onClick={() => dispatchSetMilestoneState(milestone.id, false)}
                    >
                      <Icon name="wait" />
                      &nbsp;Set as Pending
                    </Button>
                  ) : (
                    <Button
                      basic
                      icon
                      positive
                      size="mini"
                      loading={isStateSetting}
                      disabled={isStateSetting}
                      onClick={() => dispatchSetMilestoneState(milestone.id, true)}
                    >
                      <Icon name="check" />
                      &nbsp;Complete
                    </Button>
                  )}
                  <Dropdown icon="ellipsis vertical">
                    <Dropdown.Menu direction="left">
                      <AddEditMilestone
                        mentorspaceId={mentorspaceId}
                        milestone={milestone}
                        trigger={(open) => (
                          <Dropdown.Item text="Edit" onClick={open} />
                        )}
                      />
                      <Dropdown.Item text="Delete" onClick={() => onOpenDeleteMilestone(milestone.id)} />
                      <Confirm
                        open={deleteId === milestone.id}
                        onCancel={onCloseDeleteMilestone}
                        onConfirm={() => {
                          handleDeleteMilestone(milestone.id);
                        }}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </List.Content>
                {!milestone.isComplete ? (
                  <List.Icon name="wait" color={isOverdue ? 'red' : 'black'} />
                ) : (
                  <List.Icon name="check" color="green" />
                )}
                <List.Content>
                  <List.Header>{milestone.title}</List.Header>
                  <List.Description>
                    {isOverdue ? 'Overdue' : 'Due'}
                    {' '}
                    on
                    {' '}
                    {milestone.due}
                  </List.Description>
                  {!milestone.isComplete && <MilestoneSubtasks milestone={milestone} />}
                </List.Content>
              </List.Item>
            ) : (
              <div key={key} />
            );
          })
        ) : (
          <EmptyPlaceholder icon="chart line" text="Add milestones and get to your target" />
        )}
      </List>
    </>
  );
};

const mapStateToProps = (state) => ({
  milestones: state.firestore.data.milestones,
  isStateSetting: state.groups.setStateMilestone.loading,
  stateError: state.groups.setStateMilestone.error,
  isDeleting: state.groups.deleteGroupMilestone.loading,
  deleteError: state.groups.deleteGroupMilestone.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetMilestoneState:
    (milestoneId, state) => dispatch(setMilestoneStateOnFirebase(milestoneId, state)),
  dispatchDeleteMilestone:
    (milestoneId) => dispatch(deleteMilestoneOnFirebase(milestoneId)),
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
  connect(mapStateToProps, mapDispatchToProps),
)(Milestones);
