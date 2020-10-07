import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Button, Card,
  Divider, Header, Icon, Image, Label, List, Loader,
} from 'semantic-ui-react';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import moment from 'moment';
import {
  FacebookMessengerShareButton, WhatsappShareButton,
} from 'react-share';
import styles from '../../../../styles/mentorspace-meetings.module.css';
import AddEditMeetings from './add_edit_meetings';
import { updateMeetingLink } from '../../../../store/actions/mentorspaceActions';

const MeetingDetail = ({
  meetings, history, members, dispatchUpdateMeetingLink,
}) => {
  const { mentorspaceId, meetingId } = useParams();

  const initialState = {
    isLoading: false,
  };

  const [state, setState] = useState(initialState);

  const handleGoBack = () => {
    // TODO: Fix back nav
    console.log(history);
  };

  const stopLoading = () => {
    setState({ isLoading: false });
  };

  const handleMeetingSchedule = (type) => {
    console.log(type);
    setState({ isLoading: true });
    dispatchUpdateMeetingLink(meetingId, type, stopLoading);
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
        <div className={styles.simple_row} style={{ justifyContent: 'space-between' }}>
          <div className={styles.meeting_description}>
            {meeting.description}
          </div>
          <Card>
            {meeting.meetingId ? (
              <Card.Content>
                <Card.Description>
                  <div className={styles.row} style={{ justifyContent: 'space-between' }}>
                    {meeting.meetingId}
                    <div>
                      <FacebookMessengerShareButton appId="sntaoheusnth" redirectUrl="http://localhost:3000" url={meeting.meetingId}>
                        <Icon name="facebook messenger" color="blue" size="large" />
                      </FacebookMessengerShareButton>
                      <WhatsappShareButton url={meeting.meetingId}>
                        <Icon name="whatsapp" color="teal" size="large" />
                      </WhatsappShareButton>
                    </div>
                  </div>
                </Card.Description>
              </Card.Content>
            ) : (
              <Card.Content>
                {state.isLoading
                  ? (
                    <div style={{ height: '7rem' }}>
                      <Loader active />
                    </div>
                  )
                  : (
                    <List selection>
                      <List.Item onClick={() => handleMeetingSchedule('meet')}>
                        <div className={styles.row}>
                          <Image src="../../../assets/icons/meet.png" size="mini" />
                                          &nbsp;Schedule a Google Meet Meeting
                        </div>
                      </List.Item>
                      <List.Item onClick={() => handleMeetingSchedule('zoom')}>
                        <div className={styles.row}>
                          <Image src="../../../assets/icons/zoom.png" size="mini" />
                                          &nbsp;Schedule a Zoom Meeting
                        </div>
                      </List.Item>
                    </List>
                  )}
              </Card.Content>
            )}
          </Card>
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

const mapDispatchToProps = (dispatch) => ({
  dispatchUpdateMeetingLink: (id, type, cb) => dispatch(updateMeetingLink(id, type, cb)),
});

export default compose(
  firestoreConnect((props) => [
    {
      collection: 'meetings',
      limit: 25,
      where: ['groupId', '==', props.match.params.mentorspaceId],
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps),
)(MeetingDetail);
