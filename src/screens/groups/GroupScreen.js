import React, { Component } from "react";
import { connect } from "react-redux";

import { getGroup } from "../../store/actions/groupActions";

export class GroupScreen extends Component {
  state = {
    message: "",
    messages: [],
  };

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSendMessage = (e) => {};

  componentDidMount() {
    this.props.getGroup(this.props.match.params.groupId);
  }

  render() {
    const { group, loading } = this.props;

    if (loading) return <div>Loading groups</div>;

    return (
      <div>
        <div>{group && group.name}</div>
        <div>{group && group.description}</div>
        <br />
        <br />
        <div>
          chat
          <div>
            <input
              type="text"
              id="message"
              value={this.state.message}
              onChange={this.handleOnChangeInput}
            />
            <button onClick={this.handleSendMessage}>Send message</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.group.loading,
  group: state.groups.group.group,
  error: state.groups.group.error,
});

const mapDispatchToProps = (dispatch) => ({
  getGroup: (groupId) => dispatch(getGroup(groupId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupScreen);
// this.props.match.params.handle
