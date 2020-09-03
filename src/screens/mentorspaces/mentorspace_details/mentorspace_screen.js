import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Modal, Container, Grid, Button, Icon,
} from 'semantic-ui-react';

import { getGroup } from '../../../store/actions/mentorspaceActions';
import MentorspaceMembers from './MentorspaceMembers';
import GroupChat from './group_chat';
import InviteMember from './InviteMember';
import GroupConfirm from './GroupConfirm';
import styles from '../../../styles/mentorspace.module.css';

class MentorspaceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  componentDidMount() {
    this.props.getGroup(this.props.match.params.mentorspaceId);
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;
    const { member, loading } = this.props;
    if (loading) return <div>Loading Mentorspace</div>;

    return (
      <Container>
        <h2>{member && member.group.name}</h2>
        <Grid>
          <Grid.Column width={4}>
            <h4>
              Anything to think of
            </h4>
          </Grid.Column>
          <Grid.Column width={8}>
            <div className={styles.center_container}>
              {member && member.state === 'OK' && (
              <GroupChat
                groupId={member && member.group.id}
                roomId={member && member.group.chatroom.id}
              />
              )}
            </div>
          </Grid.Column>
          <Grid.Column width={4}>
            {member && member.state === 'OK' ? (
              <Modal
                trigger={(
                  <Button
                    icon
                    className="btn-primary"
                    disabled={
                member && !member.permissions.includes('SEND_MEMBER_REQUESTS')
              }
                    onClick={() => this.setState({ showModal: true })}
                  >
                    <Icon name="add" />
              &nbsp; Invite Members
                  </Button>
            )}
                size="mini"
                closeIcon
                onClose={this.closeModal}
                open={showModal}
              >
                <InviteMember groupId={this.props.match.params.mentorspaceId} />
              </Modal>
            ) : null}
            {member && member.state === 'CONFIRM' && (
              <GroupConfirm groupId={this.props.match.params.mentorspaceId} />
            )}
            <div className={styles.v_spacer_1} />
            <MentorspaceMembers groupId={member && member.group.id} />
          </Grid.Column>
        </Grid>
      </Container>
    );

    return (
      <div className="container">
        <div className="v-spacer-2" />
        <h2>{member && member.group.name}</h2>

        <div className="v-spacer-10" />
        {member && member.state === 'OK' ? (
          <GroupChat
            groupId={member && member.group.id}
            roomId={member && member.group.chatroom.id}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.group.loading,
  member: state.groups.group.member,
  error: state.groups.group.error,
});

const mapDispatchToProps = (dispatch) => ({
  getGroup: (groupId) => dispatch(getGroup(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MentorspaceScreen);
