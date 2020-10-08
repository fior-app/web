import React from 'react';
import {
  Button,
  Divider, Header, Icon, Label, List,
} from 'semantic-ui-react';

import { NavLink, useParams } from 'react-router-dom';
import { compose } from 'redux';
import moment from 'moment';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import styles from '../../../../styles/mentorspace-meetings.module.css';
import AddEditMeetings from './add_edit_meetings';
import EmptyPlaceholder from '../../../../components/placeholder/empty_placeholder';

const Meetings = ({ meetings }) => {
  const { mentorspaceId } = useParams();

  console.log(meetings);

  return (
    <>
      <div className={styles.milestone_header}>
        <Header as="h2" floated="left">Meetings</Header>
        <AddEditMeetings
          mentorspaceId={mentorspaceId}
          trigger={(open) => (
            <Button color="teal" onClick={open}>
              <Icon name="plus" />
              Meeting
            </Button>
          )}
        />
      </div>
      <Divider />
      <List animated selection divided>
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
                  {
                      moment(`${meeting.on} ${meeting.from}`, 'YYYY-MM-DD HH:mm').isAfter(moment(new Date()))
                        ? (
                          <div className={styles.meeting_time}>
                            {`Due ${moment(`${meeting.on} ${meeting.from}`, 'YYYY-MM-DD HH:mm').fromNow()}`}
                          </div>
                        ) : (
                          <div className={styles.keep_top_margin}>
                            <Label color="yellow">
                              Overdue
                            </Label>
                          </div>
                        )
                    }
                </List.Content>
              </List.Item>
            ) : (
              <div key={key} />
            );
          })
        ) : (
          <EmptyPlaceholder icon="users" text="Discuss what has done and what to do" />
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
