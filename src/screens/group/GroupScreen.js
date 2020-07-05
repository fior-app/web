import React, { Component } from "react";
import { connect } from "react-redux";

import { getGroup } from "../../store/actions/groupActions";
import GroupMembers from "./GroupMembers";

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

  handleSendMessage = (e) => {};

  componentDidMount() {
    this.props.getGroup(this.props.match.params.groupId);
  }

  render() {
    const { group, loading } = this.props;
    const { groupId } = this.props.match.params;

    if (loading) return <div>Loading groups</div>;

    return (
      <div>
        <div>{group && group.name}</div>
        <div>{group && group.members}</div>
        <br />
        <br />
        <GroupMembers groupId={groupId} />
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
