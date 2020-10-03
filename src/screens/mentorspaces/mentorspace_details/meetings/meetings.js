import React from 'react';
import { Divider, Header, List } from 'semantic-ui-react';

import { useParams } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import styles from '../../../../styles/mentorspace-meetings.module.css';
import AddEditMeetings from './add_edit_meetings';

const Meetings = (meetings) => {
  const { mentorspaceId } = useParams();

  console.log(meetings);

  return (
    <fragment>
      <div className={styles.milestone_header}>
        <Header as="h2" floated="left">Meetings</Header>
        <AddEditMeetings mentorspaceId={mentorspaceId} />
      </div>
      <Divider />
      <List>
        {meetings ? (
          Object.values(meetings).map((meeting, index) => (meeting ? (
            <List.Item key={index}>
              <List.Icon name="wait" />
              <List.Content>
                <List.Header>{meeting.title}</List.Header>
              </List.Content>
            </List.Item>
          ) : (
            <div key={index} />
          )))
        ) : (
          <li>No messages</li>
        )}
      </List>
    </fragment>
  );
};

const mapStateToProps = (state) => ({
  meetings: state.firestore.data.meetings,
});

export default compose(
  firestoreConnect((props) => [
    {
      collection: 'meetings',
      limit: 25,
      where: ['groupId', '==', props.match.params.mentorspaceId],
    },
  ]),
  connect(mapStateToProps),
)(Meetings);
