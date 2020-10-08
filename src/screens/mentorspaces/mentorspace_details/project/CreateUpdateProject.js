import React, { Component } from 'react';
import {
  Button, Icon, Modal, Form,
} from 'semantic-ui-react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { updateProjectDetails } from '../../../../store/actions/mentorspaceActions';
import * as styles from '../../../../styles/mentorspace-project.module.css';

export class CreateUpdateProject extends Component {
  constructor() {
    super();
    this.state = {
      isModelOpen: false,
      title: '',
      description: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.projects) {
      const project = nextProps.projects[this.props.mentorspaceId];
      this.setState({ title: project.title, description: project.description });
    }
  }

  openModal = () => {
    this.setState({ isModelOpen: true });
  };

  closeModal = () => {
    this.setState({ isModelOpen: false });
  };

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onUpdateProject = () => {
    this.props.updateProjectDetails(
      this.props.mentorspaceId,
      this.state,
      this.closeModal,
    );
  };

  render() {
    const { isModelOpen, title, description } = this.state;

    return (
      <Modal
        trigger={(
          <Button onClick={this.openModal} color="teal">
            <Icon name="edit" />
            Update Project details
          </Button>
        )}
        size="small"
        onClose={this.closeModal}
        open={isModelOpen}
        closeIcon
      >
        <Modal.Header>Update project details</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.onUpdateProject}>
            <Form.Field>
              <Form.Input
                label="Title"
                type="text"
                name="title"
                value={title}
                onChange={this.handleOnChangeInput}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Description"
                type="text"
                name="description"
                value={description}
                onChange={this.handleOnChangeInput}
              />
            </Form.Field>
            {this.props.loading ? <div>Updating project</div> : null}
            <Button loading={false} type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = (state, props) => ({
  projects: state.firestore.data.projects,
  loading: state.groups.upsertProject.loading,
  error: state.groups.upsertProject.error,
});

const mapDispatchToProps = (dispatch) => ({
  updateProjectDetails: (projectId, project, cb) => dispatch(updateProjectDetails(projectId, project, cb)),
});

export default compose(
  firestoreConnect((props) => [
    {
      collection: 'projects',
      where: ['projectId', '==', props.mentorspaceId],
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps),
)(CreateUpdateProject);
