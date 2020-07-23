import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";

import { getGroup } from "../../store/actions/mentorspaceActions";
import GroupMembers from "./GroupMembers";
import GroupChat from "./GroupChat";
import InviteMember from "./InviteMember";
import GroupConfirm from "./GroupConfirm";

export class GroupScreen extends Component {
  state = {
    message: "",
    messages: [],
  };

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  componentDidMount() {
    this.props.getGroup(this.props.match.params.groupId);
  }

  render() {
    const { member, loading } = this.props;
    if (loading) return <div>Loading groups</div>;

    return (
      <div className="container">
        <div className="v-spacer-2" />
        <h2>{member && member.group.name}</h2>
        {member && member.state === "CONFIRM" ? (
          <GroupConfirm groupId={this.props.match.params.groupId} />
        ) : null}
        <GroupMembers groupId={member && member.group.id} />
        {member && member.state === "OK" ? (
          <Modal
            trigger={
              <button
                className="btn-primary"
                disabled={
                  member && !member.permissions.includes("SEND_MEMBER_REQUESTS")
                }
              >
                Invite member
              </button>
            }
            modal
          >
            <InviteMember groupId={this.props.match.params.groupId} />
          </Modal>
        ) : null}
        <div className="v-spacer-10" />
        {member && member.state === "OK" ? (
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupScreen);
