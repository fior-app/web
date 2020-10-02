import React, { useState } from 'react';
import {
  Button, Form, Icon, Modal,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addMeetingToFirebase } from '../../../../store/actions/mentorspaceActions';

const AddEditMeetings = ({
  mentorspaceId, error, isBusy, dispatchAddGroupMeeting,
}) => {
  const initialState = {
    title: '',
  };

  const [state, setState] = useState(initialState);

  const [isModelOpen, setModelOpen] = useState(false);

  const openModal = () => {
    setState({ title: '' });
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

  const handleAddMeeting = () => {
    if (state.title && state.title !== '') {
      dispatchAddGroupMeeting(mentorspaceId, state.title);
    }
  };

  return (
    <Modal
      trigger={(
        <Button onClick={openModal}>
          <Icon name="plus" />
          Meeting
        </Button>
            )}
      size="small"
      onClose={closeModal}
      open={isModelOpen}
      closeIcon
    >
      <Modal.Header>Add Meeting</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleAddMeeting}>
          <Form.Field>
            <Form.Input
              label="Title"
              type="text"
              name="title"
              value={state.title}
              onChange={handleOnChangeInput}
            />
          </Form.Field>
          {error && (<div>{JSON.stringify(error)}</div>)}
          <Button
            loading={isBusy}
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
  milestone: state.groups.upsertGroupMeeting.meeting,
  loading: state.groups.upsertGroupMeeting.loading,
  upserting: state.groups.upsertGroupMeeting.upserting,
  error: state.groups.upsertGroupMeeting.error,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddGroupMeeting:
      (groupId, title) => dispatch(addMeetingToFirebase(groupId, title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditMeetings);
