import React, { Component } from "react";
import { connect } from "react-redux";

import { getGroup } from "../../store/actions/groupActions";
import GroupMembers from "./GroupMembers";
import GroupChat from "./GroupChat";

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
    const { group, loading } = this.props;

    if (loading) return <div>Loading groups</div>;

    return (
      <div>
        <div>{group && group.name}</div>
        <div>{group && group.members}</div>
        <br />
        <br />
        <GroupMembers groupId={group && group.id} />
        <GroupChat
          groupId={group && group.id}
          roomId={group && group.chatroom.id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.group.loading,
  group: state.groups.group.group,
  error: state.groups.group.error,
});

const mapDispatchToProps = (dispatch) => ({
  getGroup: (groupId) => dispatch(getGroup(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupScreen);
