import React, { Component } from "react";
import { connect } from "react-redux";

import { getGroupMembers } from "../../store/actions/mentorspaceActions";

export class MentorspaceMembers extends Component {
  componentDidMount() {
    this.props.getGroupMembers(this.props.groupId);
  }

  render() {
    const { error, loading, members } = this.props;

    if (loading) return <div>Loading..</div>;
    if (error) return <div>{JSON.stringify(error)}</div>;

    return (
      <div>
        <h3>Online</h3>
        <h3>Online</h3>
        <h3>Online</h3>
        <h3>Online</h3>
        <h3>Online</h3>
        <h3>Online</h3>
        {members.map((member) => {
          return (
            <div className="row section v-align" key={member.id}>
              <div key={member.id}>{member.member.name}</div>;
              <div className="spacer-1" />
              <div className="online" />
            </div>
          );
        })}
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

export default connect(mapStateToProps, mapDispatchToProps)(MentorspaceMembers);
