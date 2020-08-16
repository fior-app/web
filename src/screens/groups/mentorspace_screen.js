import React, { Component } from 'react';

import { Modal } from 'semantic-ui-react';
import CreateMentorspace from './create/create_mentorspace';

import MyMentorspaces from './my_mentorspaces';
import MentorspaceRequests from './mentorspace_requests';

class MentorspaceScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { showModal } = this.state;

    return (
      <div className="container">
        <div className="v-spacer-2" style={{ marginTop: '50px' }} />
        <Modal
          trigger={(
            <button
              type="button"
              className="btn-primary"
              onClick={() => this.setState({ showModal: true })}
            >
              Create Mentorspace
            </button>
          )}
          closeIcon
          onClose={this.closeModal}
          open={showModal}
        >
          <CreateMentorspace closeModal={this.closeModal} />
        </Modal>
        <div className="v-spacer-2" />
        <h2>
          <div className="margin-to-align">Mentorspaces</div>
        </h2>
        <div className="v-spacer-2" />
        <MyMentorspaces />
        <h2>
          <div className="margin-to-align">mentorspace Requests</div>
        </h2>
        <div className="v-spacer-2" />
        <MentorspaceRequests />
      </div>
    );
  }
}

export default MentorspaceScreen;
