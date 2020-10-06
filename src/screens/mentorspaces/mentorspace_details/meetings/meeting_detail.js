import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Button,
  Divider, Header, Icon, Label, List,
} from 'semantic-ui-react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment';
import styles from '../../../../styles/mentorspace-meetings.module.css';
import AddEditMeetings from './add_edit_meetings';

const MeetingDetail = ({ meetings, history, members }) => {
  const { mentorspaceId, meetingId } = useParams();

  const handleGoBack = () => {
    // TODO: Fix back nav
    console.log(history);
  };

  if (meetings) {
    const meeting = meetings[meetingId];

    return (
      <>
        <div className={styles.row}>
          {/* <Icon name="arrow left" size="large" onClick={handleGoBack} /> */}
          {/* <div className={styles.spacer_xsm} /> */}
          <Header as="h2" floated="left">{meeting.title}</Header>
          {
              moment(`${meeting.on} ${meeting.from}`, 'YYYY-MM-DD HH:mm').isAfter(moment(new Date()))
                ? (
                  <div className={styles.meeting_time_header}>
                    {`Due ${moment(`${meeting.on} ${meeting.from}`, 'YYYY-MM-DD HH:mm').fromNow()}`}
                  </div>
                ) : (
                  <div className={styles.keep_bot_margin}>
                    <Label color="yellow">
                      Overdue
                    </Label>
                  </div>
                )
          }
          <div className={styles.spacer_full} />
          <div className={styles.keep_bot_margin}>
            <AddEditMeetings
              mentorspaceId={mentorspaceId}
              meetingId={meetingId}
              trigger={(open) => (
                <Icon name="edit" size="large" onClick={open} />
              )}
            />
          </div>
        </div>
        <Divider />
        <div className={styles.meeting_description}>
          {meeting.description}
        </div>
        <div className={styles.v_spacer_sm} />
        <div className={styles.form_label}>
          Invited members
        </div>
        <List>
          {
              members.filter(
                (member) => meeting.attendees.includes(member.member.id),
              ).map(
                (member) => member && (
                <List.Item key={member.id}>
                  <List.Content floated="right">
                    Pending
                  </List.Content>
                  <List.Content>
                    {member.member.name}
                  </List.Content>
                </List.Item>
                ),
              )
          }
        </List>
      </>
    );
  }

  return <div>loading</div>;
};

const mapStateToProps = (state) => ({
  meetings: state.firestore.data.meetings,
  members: state.groups.groupMembers.members,
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
)(MeetingDetail);
