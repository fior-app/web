import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Card, Form, Modal } from 'semantic-ui-react';

import { getGroupsMe, inviteMember } from '../../store/actions/mentorspaceActions';
import styles from "../../styles/invite.module.css";

const InviteMentor = ({
  mentorEmail,
  groups,
  loading,
  error,
  fetchGroups,
  dispatchInviteMember,
}) => {
  const initialState = {
    comment: '',
    selected: null
  }

  const [inviteState, setInviteState] = useState(initialState);

  const [isModelOpen, setModelOpen] = useState(false);

  const openModal = () => {
    setModelOpen(true);
  };

  const closeModal = () => {
    setModelOpen(false);
  };

  useEffect(() => {
    fetchGroups();
  }, [fetchGroups])

  const handleInviteMentor = () => {
    dispatchInviteMember(inviteState.selected, mentorEmail)
  }

  console.log(mentorEmail, inviteState.selected)

  return (
    <Modal
      trigger={
        <Button onClick={openModal} primary>Invite to a Mentorspace</Button>
      }
      size="small"
      onClose={closeModal}
      open={isModelOpen}
      closeIcon
    >
      <Modal.Header>Invite Mentor</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          {loading ? <div>Creating..</div> : null}
          <Card.Group>
            {groups.map((mentorspaceItem) => (
              <Card
                key={mentorspaceItem.id}
                className={mentorspaceItem.group.id === inviteState.selected ? styles.selected : ''}
                onClick={() => {
                  setInviteState((state) => ({ ...state, selected: mentorspaceItem.group.id }))
                }}>
                <Card.Content>
                  <Card.Header>{mentorspaceItem.group.name}</Card.Header>
                  {mentorspaceItem.group.description && (
                    <Card.Description>
                      {mentorspaceItem.group.description}
                    </Card.Description>
                  )}
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
          <Form className={styles.comment_form}>
            <Form.TextArea
              label='Comment'
              placeholder='Tell more about you need mentors help...'
              value={inviteState.comment}
              onChange={(e, { value }) => {
                setInviteState((state) => ({ ...state, comment: value }))
              }}/>
            <Form.Field>
              {error ? (
                <div>
                  Error..
                  {JSON.stringify(error)}
                </div>
              ) : null}
            </Form.Field>

            <div className="row end">
              <Button
                type="button"
                disabled={loading || inviteState.selected == null}
                onClick={handleInviteMentor}
                primary
              >
                Invite
              </Button>
            </div>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );

}

const mapStateToProps = (state) => ({
  groups: state.groups.groups.groups,
  loading: state.groups.inviteMember.loading,
  error: state.groups.inviteMember.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGroups: () => dispatch(getGroupsMe()),
  dispatchInviteMember: (groupId, email, comment) => dispatch(inviteMember(groupId, email, true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteMentor);
