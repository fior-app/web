import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  useParams, Route, Redirect, NavLink,
} from 'react-router-dom';
import {
  Container, Grid, Menu, Header, Label, Button, Icon,
} from 'semantic-ui-react';

import { getGroup } from '../../../store/actions/mentorspaceActions';
import MentorspaceMembers from './mentorspace_members';
import GroupChat from './chat/group_chat';
import InviteMember from './invite_member';
import styles from '../../../styles/mentorspace.module.css';
import Milestones from './milestones/milestones';
import Meetings from './meetings/meetings';
import Files from './files/files';

const MentorspaceScreen = ({
  loading,
  member,
  error,
  dispatchGetGroup,
}) => {
  const { mentorspaceId } = useParams();

  useEffect(() => {
    if (mentorspaceId) {
      dispatchGetGroup(mentorspaceId);
    }
  }, [mentorspaceId, dispatchGetGroup]);

  return (
    <fragment>
      {member && member.state === 'OK' && (
        <Container fluid className={styles.mentorspace_wrapper}>
          <Header as="h1">{member.group.name}</Header>
          <Grid>
            <Grid.Column width={3}>
              <Menu secondary vertical size="large">
                <Menu.Item
                  as={NavLink}
                  to={`/mentorspaces/${mentorspaceId}/room/${member.group.chatroom.id}`}
                  name="thread"
                >
                  <Label color="teal">1</Label>
                  Thread
                </Menu.Item>

                <Menu.Item
                  as={NavLink}
                  to={`/mentorspaces/${mentorspaceId}/milestones`}
                  name="milestones"
                >
                  Milestones
                </Menu.Item>

                <Menu.Item
                  as={NavLink}
                  to={`/mentorspaces/${mentorspaceId}/meetings`}
                  name="meetings"
                >
                  Meetings
                </Menu.Item>

                <Menu.Item
                  as={NavLink}
                  to={`/mentorspaces/${mentorspaceId}/files`}
                  name="files"
                >
                  Files
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={9}>
              <Route path="/mentorspaces/:mentorspaceId/room/:roomId" component={GroupChat} />
              <Route path="/mentorspaces/:mentorspaceId/milestones" component={Milestones} />
              <Route path="/mentorspaces/:mentorspaceId/meetings" component={Meetings} />
              <Route path="/mentorspaces/:mentorspaceId/files" component={Files} />
              {/* {member && member.group && ( */}
              {/*  <Redirect */}
              {/*    exact */}
              {/*    path="/mentorspaces/:mentorspaceId" */}
              {/*    to={'/mentorspaces/' + mentorspaceId + '/room/' + member.group.chatroom.id}/> */}
              {/* )} */}
            </Grid.Column>
            <Grid.Column width={4}>
              <MentorspaceMembers groupId={mentorspaceId} />
              {member.permissions.includes('SEND_MEMBER_REQUESTS')
                ? (
                  <>
                    <InviteMember groupId={mentorspaceId} />
                    <Button as={NavLink} to="/mentors" primary>
                      <Icon name="add" />
                      &nbsp; Mentor
                    </Button>
                  </>
                ) : null}
            </Grid.Column>
          </Grid>
        </Container>
      )}
    </fragment>
  );
};

const mapStateToProps = (state) => ({
  loading: state.groups.group.loading,
  member: state.groups.group.member,
  error: state.groups.group.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchGetGroup: (groupId) => dispatch(getGroup(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MentorspaceScreen);
