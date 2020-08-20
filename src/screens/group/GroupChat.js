import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form, Input } from 'semantic-ui-react';
import {
  getGroupMessages,
  sendGroupMessage,
  getGroupMessagesStream,
} from '../../store/actions/mentorspaceActions';
import Message from './Message';

class GroupChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  componentDidMount() {
    this.props.getGroupMessages(this.props.groupId);
    this.props.getGroupMessagesStream(this.props.roomId);
  }

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSendMessage = () => {
    if (this.state.message !== '') this.props.sendGroupMessage(this.props.roomId, this.state);

    this.setState({ message: '' });
  };

  render() {
    const { messages, loading, error } = this.props;

    if (loading) return <div>Loading groups</div>;

    return (
      <div>
        <h1>messages</h1>
        <h1>messages</h1>
        <h1>messages</h1>
        <h1>messages</h1>
        <h1>messages</h1>
        <h1>messages</h1>
        {error ? JSON.stringify(error) : null}

        {messages ? (
          messages.map((message) => (
            <div key={message.id}>
              <Message message={message} />
            </div>
          ))
        ) : (
          <li>no messages</li>
        )}
        <div className="v-spacer-2" />
        <Form>
          <Form.Field>
            <Input
              type="text"
              id="message"
              value={this.state.message}
              onChange={this.handleOnChangeInput}
              action={{
                icon: 'send',
                color: 'teal',
                onClick: () => this.handleSendMessage(),
              }}
            />
          </Form.Field>
        </Form>
        {/* <button onClick={this.handleSendMessage}>send</button> */}
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

// eslint-disable-next-line react-redux/mapDispatchToProps-prefer-shorthand
const mapDispatchToProps = (dispatch) => ({
  getGroupMessages: (groupId) => dispatch(getGroupMessages(groupId)),
  sendGroupMessage: (roomId, message) => dispatch(sendGroupMessage(roomId, message)),
  getGroupMessagesStream: (roomId) => dispatch(getGroupMessagesStream(roomId)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GroupChat);
