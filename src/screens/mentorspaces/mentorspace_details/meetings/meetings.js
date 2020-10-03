import React from 'react';
import { Divider, Header, List } from 'semantic-ui-react';

import { NavLink, useParams } from 'react-router-dom';
import { compose } from 'redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import styles from '../../../../styles/mentorspace-meetings.module.css';
import AddEditMeetings from './add_edit_meetings';

const Meetings = ({ meetings }) => {
  const { mentorspaceId } = useParams();

  console.log(meetings);

  return (
    <>
      <div className={styles.milestone_header}>
        <Header as="h2" floated="left">Meetings</Header>
        <AddEditMeetings mentorspaceId={mentorspaceId} />
      </div>
      <Divider />
      <List animated selection>
        {meetings ? (
          Object.keys(meetings).map((key) => {
            const meeting = { ...meetings[key], id: key };

            return meeting ? (
              <List.Item key={key} className={styles.list_item} as={NavLink} to={`/mentorspaces/${mentorspaceId}/meetings/${meeting.id}`}>
                <List.Content>
                  <List.Header>{meeting.title}</List.Header>
                  <List.Description>{meeting.description}</List.Description>
                </List.Content>
                <List.Content>
                  <div className={styles.meeting_time}>
                    {moment(`${meeting.on} ${meeting.from}`, 'YYYY-MM-DD HH:mm').fromNow()}
                  </div>
                </List.Content>
              </List.Item>
            ) : (
              <div key={key} />
            );
          })
        ) : (
          <li>No meetings scheduled yet</li>
        )}
      </List>
    </>
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
