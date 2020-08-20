import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';

import { getGroup } from '../../store/actions/mentorspaceActions';
import MentorspaceMembers from './MentorspaceMembers';
import GroupChat from './GroupChat';
import InviteMember from './InviteMember';
import GroupConfirm from './GroupConfirm';

export class MentorspaceScreen extends Component {
  componentDidMount() {
    this.props.getGroup(this.props.match.params.mentorspaceId);
  }

  render() {
    const { member, loading } = this.props;
    if (loading) return <div>Loading Mentorspace</div>;

    return (
      <div className="container">
        <div className="v-spacer-2" />
        <h2>{member && member.group.name}</h2>
        {member && member.state === 'CONFIRM' ? (
          <GroupConfirm groupId={this.props.match.params.mentorspaceId} />
        ) : null}
        <MentorspaceMembers groupId={member && member.group.id} />
        {member && member.state === 'OK' ? (
          <Modal
            trigger={(
              <button
                type="button"
                className="btn-primary"
                disabled={
                  member && !member.permissions.includes('SEND_MEMBER_REQUESTS')
                }
              >
                Invite member
              </button>
            )}
            modal
          >
            <InviteMember groupId={this.props.match.params.mentorspaceId} />
          </Modal>
        ) : null}
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

// eslint-disable-next-line react-redux/mapDispatchToProps-prefer-shorthand
const mapDispatchToProps = (dispatch) => ({
  getGroup: (groupId) => dispatch(getGroup(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MentorspaceScreen);
