import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Icon, Modal } from 'semantic-ui-react';

import * as styles from './../../../../styles/mentorspace-project.module.css';

export class AddRepository extends Component {
  constructor(props) {
    super(props);

    this.state = {
      link: '',
      isOpen: false,
    };
  }

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleInviteMember = () => {
    // this.props.inviteMember(this.props.groupId, this.state.email);
  };

  showModal = () => {
    this.setState((state) => ({ ...state, isOpen: true }));
  };

  closeModal = () => {
    this.setState((state) => ({ ...state, isOpen: false }));
  };

  render() {
    return (
      <Modal
        trigger={
          <Button icon className="btn-primary" onClick={this.showModal}>
            <Icon name="add" />
            &nbsp; add Repository
          </Button>
        }
        size="mini"
        closeIcon
        onClose={this.closeModal}
        open={this.state.isOpen}
      >
        <Modal.Header>Invite member</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {/* {loading ? <div>creating..</div> : null} */}
            <Form>
              <Form.Field>
                <input
                  type="text"
                  id="link"
                  placeholder="Email"
                  value={this.state.link}
                  onChange={this.handleOnChangeInput}
                />
              </Form.Field>
              <Form.Field>
                {/* {error ? (
                        <div>
                          Error..
                          {JSON.stringify(error)}
                        </div>
                      ) : null} */}
              </Form.Field>

              <div className="row end">
                <button
                  type="button"
                  className="btn-alternate"
                  disabled={true}
                  onClick={this.handleInviteMember}
                >
                  Add Repository
                </button>
              </div>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddRepository);
