import React, { Component } from "react";
import { connect } from "react-redux";
import Popup from "reactjs-popup";

import { getGroupsMe } from "../../store/actions/groupActions";
import CreateGroup from "./CreateGroup";

export class GroupsScreen extends Component {
  componentDidMount() {
    this.props.getGroupsMe();
  }

  render() {
    const { loading, groups, error } = this.props;

    if (loading) return <div>Loading groups</div>;
    return (
      <div>
        <Popup trigger={<button> Create Group</button>} modal>
          {(close) => <CreateGroup close={close} />}
        </Popup>
        <div>groups</div>
        <ul>
          {groups.map((member) => {
            return <li key={member.id}>{member.group.name}</li>;
          })}
        </ul>
        {error ? <div>error while loading {error}</div> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.groups.loading,
  groups: state.groups.groups.groups,
  error: state.groups.groups.error,
});

const mapDispatchToProps = (dispatch) => ({
  getGroupsMe: () => dispatch(getGroupsMe()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupsScreen);
