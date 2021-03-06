import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, Route, NavLink } from 'react-router-dom';
import {
  Container,
  Grid,
  Menu,
  Header,
  Button,
  Icon,
} from 'semantic-ui-react';

import { getGroup } from '../../../store/actions/mentorspaceActions';
import MentorspaceMembers from './mentorspace_members';
import GroupChat from './chat/group_chat';
import InviteMember from './invite_member';
import styles from '../../../styles/mentorspace.module.css';
import Milestones from './milestones/milestones';
import Meetings from './meetings/meetings';
import Files from './files/files';
import MeetingDetail from './meetings/meeting_detail';
import Calendar from './calendar/calendar';
import Project from './project/Project';
import ProjectWidget from './project/ProjectWidget';

const MentorspaceScreen = ({
  loading, member, error, dispatchGetGroup,
}) => {
  const { mentorspaceId } = useParams();

  useEffect(() => {
    if (mentorspaceId) {
      dispatchGetGroup(mentorspaceId);
    }
  }, [mentorspaceId, dispatchGetGroup]);

  return (
    <>
      {member && member.state === 'OK' && (
        <Container fluid className={styles.mentorspace_wrapper}>
          <Header as="h1">{member.group.name}</Header>
          <Grid>
            <Grid.Column width={3}>
              <Menu secondary vertical size="large">
                <Menu.Item
                  as={NavLink}
                  to={`/mentorspaces/${mentorspaceId}`}
                  name="timeline"
                >
                  Timeline
                </Menu.Item>

                <Menu.Item
                  as={NavLink}
                  to={`/mentorspaces/${mentorspaceId}/room/${member.group.chatroom.id}`}
                  name="thread"
                >
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
                <Menu.Item
                  as={NavLink}
                  to={`/mentorspaces/${mentorspaceId}/project`}
                  name="project"
                >
                  Project
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={9}>
              <Route
                path="/mentorspaces/:mentorspaceId"
                component={Calendar}
                exact
              />
              <Route
                path="/mentorspaces/:mentorspaceId/room/:roomId"
                component={GroupChat}
              />
              <Route
                path="/mentorspaces/:mentorspaceId/milestones"
                component={Milestones}
              />
              <Route
                path="/mentorspaces/:mentorspaceId/meetings"
                component={Meetings}
                exact
              />
              <Route
                path="/mentorspaces/:mentorspaceId/meetings/:meetingId"
                component={MeetingDetail}
              />
              <Route
                path="/mentorspaces/:mentorspaceId/files"
                component={Files}
              />
              <Route
                path="/mentorspaces/:mentorspaceId/project"
                component={Project}
              />
              {/* {member && member.group && ( */}
              {/*  <Redirect */}
              {/*    exact */}
              {/*    path="/mentorspaces/:mentorspaceId" */}
              {/*    to={'/mentorspaces/' + mentorspaceId + '/room/' + member.group.chatroom.id}/> */}
              {/* )} */}
            </Grid.Column>
            <Grid.Column width={4}>
              <ProjectWidget mentorspaceId={mentorspaceId} />
              <MentorspaceMembers groupId={mentorspaceId} />
              {member.permissions.includes('SEND_MEMBER_REQUESTS') ? (
                <>
                  <InviteMember groupId={mentorspaceId} />
                  <Button as={NavLink} to="/mentors" color="teal">
                    <Icon name="add" />
                    &nbsp; Mentor
                  </Button>
                </>
              ) : null}
            </Grid.Column>
          </Grid>
        </Container>
      )}
    </>
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
