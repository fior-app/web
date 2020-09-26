import React from "react";
import { connect } from "react-redux";

import { userMeInitial } from "../../store/actions/authActions";
import { getSkills } from "../../store/actions/skillActions";
import { Container, Header } from "semantic-ui-react";
import MentorspaceRequests from "../mentorspaces/mentorspace_requests";

const NotificationsScreen = ({}) => {

  return (
    <Container>
      <Header as='h2'>Notifications</Header>
      <Header as='h3'>Mentorspace Requests</Header>
      <MentorspaceRequests/>
    </Container>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsScreen);
