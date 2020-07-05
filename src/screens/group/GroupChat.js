import React, { Component } from "react";
import { connect } from "react-redux";

import {
  getGroupMessages,
  sendGroupMessage,
} from "../../store/actions/groupActions";
import Message from "./Message";

export class GroupChat extends Component {
  state = {
    message: "",
  };

  componentDidMount() {
    this.props.getGroupMessages(this.props.groupId);
  }

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSendMessage = (e) => {
    this.props.sendGroupMessage(this.props.roomId, this.state);
  };

  render() {
    const { messages, loading, error } = this.props;

    if (loading) return <div>Loading groups</div>;

    return (
      <div>
        Messages
        {error ? JSON.stringify(error) : null}
        <ul>
          {messages ? (
            messages.map((message) => {
              return (
                <li key={message.id}>
                  <Message message={message} />
                </li>
              );
            })
          ) : (
            <li>no messages</li>
          )}
        </ul>
        <input
          type="text"
          id="message"
          value={this.state.message}
          onChange={this.handleOnChangeInput}
        />
        <button onClick={this.handleSendMessage}>send</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.groups.groupMessages.loading,
  messages: state.groups.groupMessages.messages,
  error: state.groups.groupMessages.error,
  msgSending: state.groups.sendGroupMessage.seding,
  msgError: state.groups.sendGroupMessage.error,
});

const mapDispatchToProps = (dispatch) => ({
  getGroupMessages: (groupId) => dispatch(getGroupMessages(groupId)),
  sendGroupMessage: (roomId, message) =>
    dispatch(sendGroupMessage(roomId, message)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GroupChat);
