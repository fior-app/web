import React, { Component } from "react";

import CreateGroup from "./create/CreateGroup";
import { Modal } from "semantic-ui-react";

import MyGroups from "./MyGroups";
import GroupsRequests from "./GroupsRequests";

export class GroupsScreen extends Component {
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
              Create Group
            </div>
          }
          closeIcon
          onClose={this.closeModal}
          open={this.state.showModal}
        >
          <CreateGroup closeModal={this.closeModal} />
        </Modal>
        <div className="v-spacer-2" />
        <h2>
          <div className="margin-to-align">Groups</div>
        </h2>
        <div className="v-spacer-2" />
        <MyGroups />
        <h2>
          <div className="margin-to-align">Group Request</div>
        </h2>
        <div className="v-spacer-2" />
        <GroupsRequests />
      </div>
    );
  }
}

export default GroupsScreen;
