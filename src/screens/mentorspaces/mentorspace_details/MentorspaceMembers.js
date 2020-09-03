import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { getGroupMembers } from '../../../store/actions/mentorspaceActions';

import styles from '../../../styles/mentorspace.module.css';

class MentorspaceMembers extends Component {
  componentDidMount() {
    this.props.getGroupMembers(this.props.groupId);
  }

  render() {
    const { error, loading, members } = this.props;

    if (loading) return <div>Loading..</div>;
    if (error) return <div>{JSON.stringify(error)}</div>;

    return (
      <div>
        {members.map((member) => (
          <div className={styles.row} key={member.id}>
            <div key={member.id}>{member.member.name}</div>
            <div className={styles.spacer_1} />
            <Icon color="green" name="circle" />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.groupMembers.loading,
  members: state.groups.groupMembers.members,
  error: state.groups.groupMembers.error,
});

const mapDispatchToProps = { getGroupMembers };

export default connect(mapStateToProps, mapDispatchToProps)(MentorspaceMembers);
