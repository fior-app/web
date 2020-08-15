import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createGroup } from '../../../store/actions/mentorspaceActions';
import MentorspaceDetails from './mentorspace_details';
import ProjectDetails from './project_details';

export class CreateMentorspace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      group: {},
      project: {},
      active: 0,
    };
  }

  handleCreateMentorspace = (type, value) => {
    const { createMentorspace, closeModal } = this.props;

    this.setState({ [type]: value });
    createMentorspace(this.state, closeModal);
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
          <MentorspaceDetails
            handleNext={this.handleNext}
            group={group}
          />
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

CreateMentorspace.defaultProps = {
  error: null,
  loading: false,
};

CreateMentorspace.propTypes = {
  createMentorspace: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.string,
};

const mapStateToProps = (state) => ({
  loading: state.groups.createGroup.loading,
  error: state.groups.createGroup.error,
});

const mapDispatchToProps = (dispatch) => ({
  createMentorspace: (mentorspace, cb) => dispatch(createGroup(mentorspace, cb)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMentorspace);
