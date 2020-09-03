import React, { useState } from 'react';
import { Button, Icon, Modal, Form } from 'semantic-ui-react';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { updateProjectDetails } from '../../../../store/actions/mentorspaceActions';
import * as styles from '../../../../styles/mentorspace-project.module.css';

const CreateUpdateProject = (props) => {
  const initialState = {
    title: '',
    description: '',
  };

  const [state, setState] = useState(initialState);

  const [isModelOpen, setModelOpen] = useState(false);

  const openModal = () => {
    setState({ title: '', description: '' });
    setModelOpen(true);
  };

  const closeModal = () => {
    setModelOpen(false);
  };

  const handleOnChangeInput = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal
      trigger={
        <Button onClick={openModal}>
          <Icon name="edit" />
          Update Project details
        </Button>
      }
      size="small"
      onClose={closeModal}
      open={isModelOpen}
      closeIcon
    >
      <Modal.Header>Update project details</Modal.Header>
      <Modal.Content>
        <Form onSubmit={() => {}}>
          <Form.Field>
            <Form.Input
              label="Title"
              type="text"
              name="title"
              value={state.title}
              onChange={handleOnChangeInput}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Description"
              type="text"
              name="description"
              value={state.description}
              onChange={handleOnChangeInput}
            />
          </Form.Field>
          <Button loading={false} type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  project: state.firestore.data.project,
});

const mapDispatchToProps = (dispatch) => ({
  updateProjectDetails: (projectId, project) =>
    dispatch(updateProjectDetails(projectId, project)),
});

export default compose(
  firestoreConnect((props) => {
    return [
      {
        collection: 'projects',
        where: ['projectId', '==', props.mentorspaceId],
      },
    ];
  }),
  connect(mapStateToProps, mapDispatchToProps)
)(CreateUpdateProject);
