import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Feed, Header } from 'semantic-ui-react';
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
      <>
        <Header as={"h4"}>Members</Header>
        <Feed>
          {members.map((member) => (
            <Feed.Event key={member.id}>
              <Feed.Label>
                <img src='https://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg'/>
              </Feed.Label>
              <Feed.Content>
                {member.member.name}
                {member.permissions.includes('MENTOR') && (<span className={styles.mentor}>Mentor</span>)}
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
      </>
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
