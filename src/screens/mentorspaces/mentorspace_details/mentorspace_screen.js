import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Container, Grid, Menu, Header, Label
} from 'semantic-ui-react';

import { getGroup } from '../../../store/actions/mentorspaceActions';
import MentorspaceMembers from './mentorspace_members';
import GroupChat from './chat/group_chat';
import InviteMember from './invite_member';
import GroupConfirm from './group_confrim';
import styles from '../../../styles/mentorspace.module.css';

const MentorspaceScreen = ({
  loading,
  member,
  error,
  dispatchGetGroup
}) => {
  const initialState = {
    showModal: false,
  };

  const [state, setState] = useState(initialState);

  const { mentorspaceId } = useParams()

  console.log(member)

  useEffect(() => {
    if (mentorspaceId) {
      dispatchGetGroup(mentorspaceId)
    }
  }, [mentorspaceId, dispatchGetGroup])

  return (
    <Container fluid className={styles.mentorspace_wrapper}>
      <Header as={'h1'}>{member && member.group.name}</Header>
      <Grid columns="equal">
        <Grid.Column width={3}>
          <Menu secondary vertical size='large'>
            <Menu.Item name='thread'>
              <Label color='teal'>1</Label>
              Thread
            </Menu.Item>

            <Menu.Item name='milestones'>
              Milestones
            </Menu.Item>

            <Menu.Item name='meetings'>
              Meetings
            </Menu.Item>

            <Menu.Item name='meetings'>
              Files
            </Menu.Item>
          </Menu>
        </Grid.Column>
        <Grid.Column>
          {member && member.state === 'OK' && (
            <GroupChat
              groupId={member && member.group.id}
              roomId={member && member.group.chatroom.id}
            />
          )}
        </Grid.Column>
        <Grid.Column width={4}>
          <MentorspaceMembers groupId={mentorspaceId}/>
          {member && member.state === 'OK' && member.permissions.includes('SEND_MEMBER_REQUESTS')
            ? (
              <InviteMember groupId={mentorspaceId}/>
            ) : null}
        </Grid.Column>
      </Grid>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  loading: state.groups.group.loading,
  member: state.groups.group.member,
  error: state.groups.group.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetGroup: (groupId) => dispatch(getGroup(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MentorspaceScreen);
