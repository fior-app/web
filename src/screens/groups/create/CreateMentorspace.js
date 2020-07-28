import React, { Component } from "react";
import { connect } from "react-redux";

import { createGroup } from "../../../store/actions/mentorspaceActions";
import MentorspaceDetails from "./MentorspaceDetails";
import ProjectDetails from "./ProjectDetails";

export class CreateMentorspace extends Component {
  state = {
    group: {},
    project: {},
    active: 0,
  };

  handleCreateMentorspace = async (type, value) => {
    await this.setState({ [type]: value });
    this.props.createMentorspace(this.state, this.props.closeModal);
  };

  handleNext = (type, value) => {
    this.setState({ active: this.state.active + 1, [type]: value });
  };

  handleBack = (type, value) => {
    this.setState({ active: this.state.active - 1, [type]: value });
  };

  render() {
    const { error, loading } = this.props;

    switch (this.state.active) {
      case 0:
        return (
          <MentorspaceDetails
            handleNext={this.handleNext}
            group={this.state.group}
          />
        );
      case 1:
        return (
          <ProjectDetails
            handleBack={this.handleBack}
            error={error}
            loading={loading}
            handleCreateMentorspace={this.handleCreateMentorspace}
            project={this.state.project}
          />
        );
      default:
        return <div></div>;
    }
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.createGroup.loading,
  error: state.groups.createGroup.error,
});

const mapDispatchToProps = (dispatch) => ({
  createMentorspace: (mentorspace, cb) =>
    dispatch(createGroup(mentorspace, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMentorspace);
