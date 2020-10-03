import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Divider, Header, Icon, List,
} from 'semantic-ui-react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment';
import styles from '../../../../styles/mentorspace-meetings.module.css';

const MeetingDetail = ({ meetings, history, members }) => {
  const { meetingId } = useParams();

  const handleGoBack = () => {
    // TODO: Fix back nav
    console.log(history);
  };

  if (meetings) {
    const meeting = meetings[meetingId];

    return (
      <>
        <div className={styles.row}>
          <Icon name="arrow left" size="large" onClick={handleGoBack} />
          <div className={styles.spacer_xsm} />
          <Header as="h2">{meeting.title}</Header>
        </div>
        <Divider />
        <div>
          {meeting.description}
        </div>
        <div>
          {`Due ${moment(`${meeting.on} ${meeting.from}`, 'YYYY-MM-DD HH:mm').fromNow()}`}
        </div>
        <List>
          {
              members.filter(
                (member) => meeting.attendees.includes(member.id),
              ).map(
                (member) => member && (
                <List.Item key={member.id}>
                  <List.Content>
                    <List.Description>
                      {member.member.name}
                    </List.Description>
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
