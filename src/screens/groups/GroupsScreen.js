import React, { Component } from "react";

import CreateGroup from "./CreateGroup";
import { Modal } from "semantic-ui-react";

import MyGroups from "./MyGroups";
import GroupsRequests from "./GroupsRequests";

export class GroupsScreen extends Component {
  render() {
    return (
      <div className="container">
        <div className="v-spacer-2" style={{ marginTop: "50px" }} />
        <Modal trigger={<div className="btn-primary">Create Group</div>} modal>
          <CreateGroup />
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
