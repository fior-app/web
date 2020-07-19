import React, { Component } from "react";
import { connect } from "react-redux";

import { createGroup } from "../../../store/actions/groupActions";
import GroupDetails from "./GroupDetails";
import ProjectDetails from "./ProjectDetails";

export class CreateGroup extends Component {
  state = {
    group: {},
    project: {},
    active: 0,
  };

  handleCreateGroup = async (type, value) => {
    await this.setState({ [type]: value });
    this.props.createGroup(this.state, this.props.closeModal);
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
          <GroupDetails handleNext={this.handleNext} group={this.state.group} />
        );
      case 1:
        return (
          <ProjectDetails
            handleBack={this.handleBack}
            error={error}
            loading={loading}
            handleCreateGroup={this.handleCreateGroup}
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
  createGroup: (group, cb) => dispatch(createGroup(group, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGroup);
