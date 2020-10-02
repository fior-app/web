import { connect } from 'react-redux';
import {
  Button, Form, Icon, Modal,
} from 'semantic-ui-react';
import React, { useState } from 'react';
import { addMilestoneToFirebase } from '../../../../store/actions/mentorspaceActions';

const AddEditMilestone = ({
  mentorspaceId,
  dispatchAddGroupMilestone,
  // loading,
  upserting,
  error,
}) => {
  const initialState = {
    title: '',
    due: '',
  };

  const [state, setState] = useState(initialState);

  const [isModelOpen, setModelOpen] = useState(false);

  const openModal = () => {
    // TODO - Reset form
    setState({ title: '', due: '' });

    setModelOpen(true);
  };

  const closeModal = () => {
    setModelOpen(false);
  };

  const handleOnChangeInput = (e, { name, value }) => {
    console.log(name, value);
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleAddMilestone = () => {
    if (state.title && state.title !== '') {
      console.log(mentorspaceId, state.title, state.due);
      dispatchAddGroupMilestone(mentorspaceId, state.title, state.due);
    }
  };

  return (
    <Modal
      trigger={(
        <Button onClick={openModal}>
          <Icon name="plus" />
          Milestone
        </Button>
      )}
      size="small"
      onClose={closeModal}
      open={isModelOpen}
      closeIcon
    >
      <Modal.Header>Add Milestone</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleAddMilestone}>
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
              label="Due date"
              type="date"
              name="due"
              value={state.due}
              onChange={handleOnChangeInput}
            />
          </Form.Field>
          {error && (<div>{JSON.stringify(error)}</div>)}
          <Button
            loading={upserting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  milestone: state.groups.upsertGroupMilestone.milestone,
  loading: state.groups.upsertGroupMilestone.loading,
  upserting: state.groups.upsertGroupMilestone.upserting,
  error: state.groups.upsertGroupMilestone.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddGroupMilestone: (groupId, title, due) => dispatch(addMilestoneToFirebase(groupId, title, due)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditMilestone);
