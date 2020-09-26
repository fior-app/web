import React, { Component } from "react";
import { connect } from "react-redux";

import { createMentorspace } from "../../../store/actions/mentorspaceActions";
import MentorspaceDetails from "./mentorspace_details";
import ProjectDetails from "./project_details";

class CreateMentorspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      group: {},
      project: {},
      active: 0,
    };
  }

  handleCreateMentorspace = async (type, value) => {
    const { createSpace, closeModal } = this.props;

    await this.setState({ [type]: value });
    createSpace(this.state, closeModal);
  };

  handleNext = (type, value) => {
    this.setState((state) => ({
      active: state.active + 1,
      [type]: value,
    }));
  };

  handleBack = (type, value) => {
    this.setState((state) => ({
      active: state.active - 1,
      [type]: value,
    }));
  };

  render() {
    const { active, group, project } = this.state;
    const { error, loading } = this.props;

    switch (active) {
      case 0:
        return (
          <MentorspaceDetails handleNext={this.handleNext} group={group} />
        );
      case 1:
        return (
          <ProjectDetails
            handleBack={this.handleBack}
            error={error}
            loading={loading}
            handleCreateMentorspace={this.handleCreateMentorspace}
            project={project}
          />
        );
      default:
        return <div />;
    }
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.createGroup.loading,
  error: state.groups.createGroup.error,
});

const mapDispatchToProps = (dispatch) => ({
  createSpace: (mentorspace, cb) =>
    dispatch(createMentorspace(mentorspace, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMentorspace);
