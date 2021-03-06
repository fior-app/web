import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Form, Icon, Modal,
} from 'semantic-ui-react';

import { inviteMember } from '../../../store/actions/mentorspaceActions';

class InviteMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      isOpen: false,
    };
  }

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleInviteMember = () => {
    this.props.inviteMember(this.props.groupId, this.state.email);
  };

  showModal = () => {
    this.setState((state) => ({ ...state, isOpen: true }));
  }

  closeModal = () => {
    this.setState((state) => ({ ...state, isOpen: false }));
  }

  render() {
    const { error, loading } = this.props;

    return (
      <Modal
        trigger={(
          <Button
            icon
            basic
            className="btn-primary"
            onClick={this.showModal}
          >
            <Icon name="add" />
            &nbsp; Member
          </Button>
        )}
        size="mini"
        closeIcon
        onClose={this.closeModal}
        open={this.state.isOpen}
      >
        <Modal.Header>Invite member</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {loading ? <div>creating..</div> : null}
            <Form>
              <Form.Field>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>
              <Form.Field>
                {error ? (
                  <div>
                    Error..
                    {JSON.stringify(error)}
                  </div>
                ) : null}
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Content>
          <Button
            loading={loading}
            disabled={loading}
            color="teal"
            onClick={this.handleInviteMember}
          >
            Invite
          </Button>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.inviteMember.loading,
  error: state.groups.inviteMember.error,
});

const mapDispatchToProps = (dispatch) => ({
  inviteMember: (groupId, email) => dispatch(inviteMember(groupId, email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InviteMember);
