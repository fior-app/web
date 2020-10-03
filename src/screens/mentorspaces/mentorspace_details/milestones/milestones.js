import React, { useState } from 'react';
import {
  Divider, List, Form, Header, Segment,
} from 'semantic-ui-react';

import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddEditMilestone from './add_edit_milestone';
import styles from '../../../../styles/mentorspace-milestone.module.css';

const Milestones = ({
  milestones,
}) => {
  const { mentorspaceId } = useParams();

  return (
    <>
      <div className={styles.milestone_header}>
        <Header as="h2" floated="left">Milestones</Header>
        <AddEditMilestone mentorspaceId={mentorspaceId} />
      </div>
      <Divider />
      <List>
        {milestones ? (
          Object.values(milestones).map((milestone, index) => (milestone ? (
            <List.Item key={index}>
              <List.Icon name="wait" />
              <List.Content>
                <List.Header>{milestone.title}</List.Header>
                <List.Description>{milestone.due}</List.Description>
              </List.Content>
            </List.Item>
          ) : (
            <div key={index} />
          )))
        ) : (
          <li>No messages</li>
        )}
      </List>
    </>
  );
};

const mapStateToProps = (state) => ({
  milestones: state.firestore.data.milestones,
});

const mapDispatchToProps = (dispatch) => ({});

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
