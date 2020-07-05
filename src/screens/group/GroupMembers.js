import React, { Component } from "react";
import { connect } from "react-redux";

import { getGroupMembers } from "../../store/actions/groupActions";

export class GroupMembers extends Component {
  componentDidMount() {
    this.props.getGroupMembers(this.props.groupId);
  }

  render() {
    const { error, loading, members } = this.props;

    if (loading) return <div>Loading..</div>;
    if (error) return <div>{JSON.stringify(error)}</div>;

    return (
      <div>
        members
        <ul>
          {members.map((member) => {
            return <li key={member.id}>{member.member.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.groupMembers.loading,
  members: state.groups.groupMembers.members,
  error: state.groups.groupMembers.error,
});

const mapDispatchToProps = (dispatch) => ({
  getGroupMembers: (groupId) => dispatch(getGroupMembers(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupMembers);
