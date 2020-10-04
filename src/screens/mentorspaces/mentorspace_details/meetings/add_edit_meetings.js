import React, { useState } from 'react';
import {
  Button, Checkbox, Form, Icon, List, Modal, TextArea,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment';
import { addMeetingToFirebase } from '../../../../store/actions/mentorspaceActions';
import styles from '../../../../styles/mentorspace-meetings.module.css';

const AddEditMeetings = ({
  mentorspaceId,
  meetingId,
  error,
  isBusy,
  dispatchAddGroupMeeting,
  members,
  date,
}) => {
  const initialState = {
    title: '',
    description: '',
    on: date || '',
    from: '',
    to: '',
    attendees: [],
  };

  const [state, setState] = useState(initialState);

  const [isModelOpen, setModelOpen] = useState(false);

  const openModal = () => {
    setState({
      title: '',
      description: '',
      on: date || '',
      from: '',
      to: '',
      attendees: [],
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

    if (name === 'from') {
      setState((state) => ({
        ...state,
        to: moment(value, 'HH:mm').add(30, 'm').format('HH:mm'),
      }));
    }
  };

  const handleAttendeeSelect = (e, { value }) => {
    const index = state.attendees.indexOf(value);

    // TODO: Simplify logic
    const temp = state.attendees;
    if (index === -1) {
      temp.push(value);
      setState((state) => ({
        ...state,
        attendees: temp,
      }));
    } else {
      temp.splice(index, 1);
      setState((state) => ({
        ...state,
        attendees: temp,
      }));
    }
  };

  const handleAddMeeting = () => {
    if (state.title && state.title !== '' && state.on && state.on !== '' && state.from && state.from !== '' && state.to && state.to !== '') {
      dispatchAddGroupMeeting(mentorspaceId, state);
    }
  };

  return (
    <Modal
      trigger={(
          meetingId ? <Icon name="edit" size="large" onClick={openModal} />
            : (
              <Button onClick={openModal}>
                <Icon name="plus" />
                Meeting
              </Button>
            )
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
          <Form.Field>
            <div className={styles.form_label}>
              Description
            </div>
            <TextArea
              type="text"
              name="description"
              rows={4}
              value={state.description}
              onChange={handleOnChangeInput}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              label="Schedule date"
              type="date"
              name="on"
              value={state.on}
              onChange={handleOnChangeInput}
            />
          </Form.Field>
          <Form.Field>
            <div className={styles.row}>
              <Form.Input
                label="From"
                type="time"
                name="from"
                value={state.from}
                onChange={handleOnChangeInput}
              />
              <div className={styles.spacer_sm} />
              <Form.Input
                label="To"
                type="time"
                name="to"
                value={state.to}
                onChange={handleOnChangeInput}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <div className={styles.form_label}>
              Members
            </div>
            <List>
              {members && Object.values(members).map((member, index) => member && (
              <List.Item key={index}>
                <List.Description>
                  <Checkbox
                    label={member.member.name}
                    value={member.member.id}
                    onChange={handleAttendeeSelect}
                  />
                </List.Description>
              </List.Item>
              ))}
            </List>
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
  members: state.groups.groupMembers.members,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchAddGroupMeeting:
      (groupId, data, closeModal) => dispatch(addMeetingToFirebase(groupId, data, closeModal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEditMeetings);
