import React, { Component } from "react";

import CreateMentorspace from "./create/CreateMentorspace";
import { Modal } from "semantic-ui-react";

import MyMentorspaces from "./MyMentorspaces";
import MentorspaceRequests from "./MentorspaceRequests";

export class MentorspacesScreen extends Component {
  state = {
    showModal: false,
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="container">
        <div className="v-spacer-2" style={{ marginTop: "50px" }} />
        <Modal
          trigger={
            <div
              className="btn-primary"
              onClick={() => this.setState({ showModal: true })}
            >
              Create Mentorspace
            </div>
          }
          closeIcon
          onClose={this.closeModal}
          open={this.state.showModal}
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

export default MentorspacesScreen;
