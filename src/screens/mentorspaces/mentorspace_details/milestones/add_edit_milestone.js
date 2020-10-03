import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Form, Modal } from "semantic-ui-react";
import { addMilestoneToFirebase, editMilestoneOnFirebase } from "../../../../store/actions/mentorspaceActions";

const AddEditMilestone = ({
  mentorspaceId,
  milestone,
  trigger,
  dispatchAddGroupMilestone,
  dispatchEditGroupMilestone,
  loading,
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
    setState({
      title: milestone ? milestone.title : '',
      due: milestone ? milestone.due : ''
    });

    setModelOpen(true);
  };

  const closeModal = () => {
    setModelOpen(false);
  };

  const handleOnChangeInput = (e, { name, value }) => {
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleAddMilestone = () => {
    if (state.title && state.title !== '') {
      if (milestone) {
        dispatchEditGroupMilestone(milestone.id, state.title, state.due, closeModal);
      } else {
        dispatchAddGroupMilestone(mentorspaceId, state.title, state.due, closeModal);
      }
    }
  };

  return (
    <Modal
      trigger={trigger(openModal)}
      size="small"
      onClose={closeModal}
      open={isModelOpen}
      closeIcon
    >
      <Modal.Header>
        {milestone ? 'Edit' : 'Add'}
        &nbsp;Milestone
      </Modal.Header>
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
            primary
            type='submit'>
            {milestone ? 'Edit' : 'Add'}
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

const mapStateToProps = (state) => ({
  loading: state.groups.upsertGroupMilestone.loading,
  upserting: state.groups.upsertGroupMilestone.upserting,
  error: state.groups.upsertGroupMilestone.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddGroupMilestone: (groupId, title, due, closeModel) =>
    dispatch(addMilestoneToFirebase(groupId, title, due, closeModel)),
  dispatchEditGroupMilestone: (milestoneId, title, due, closeModal) =>
    dispatch(editMilestoneOnFirebase(milestoneId, title, due, closeModal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditMilestone);
