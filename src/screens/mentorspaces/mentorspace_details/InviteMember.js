import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Modal } from 'semantic-ui-react';

import { inviteMember } from '../../../store/actions/mentorspaceActions';

class InviteMember extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
    };
  }

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleInviteMember = () => {
    this.props.inviteMember(this.props.groupId, this.state);
  };

  render() {
    const { error, loading } = this.props;

    return (
      <div className="modal">
        <div className="card-header">Invite member</div>
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

              <div className="row end">
                <button
                  type="button"
                  className="btn-alternate"
                  disabled={loading}
                  onClick={this.handleInviteMember}
                >
                  Invite
                </button>
              </div>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </div>
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
