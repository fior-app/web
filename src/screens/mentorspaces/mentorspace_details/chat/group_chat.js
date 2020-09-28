import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Form, Header, Input, Feed, Divider } from 'semantic-ui-react';

import { sendGroupMessageToFirebase } from '../../../../store/actions/mentorspaceActions';
import Message from './message';
import styles from '../../../../styles/mentorspace.module.css';

class GroupChat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };
  }

  handleOnChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSendMessage = () => {
    if (this.state.message !== '') {
      this.props.sendGroupMessageToFirebase(this.props.roomId, this.state);
    }
    this.setState({ message: '' });
  };

  render() {
    const { messages } = this.props;
    return (
      <>
        <Header as={"h2"}>Thread</Header>
        <Divider></Divider>
        <Feed>
          {messages ? (
            Object.values(messages).map((message, index) => {
              return message ? (
                <Message message={message} key={index}/>
              ) : (
                <div key={index}/>
              );
            })
          ) : (
          <li>No messages</li>
          )}
        </Feed>
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
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.firestore.data.messages,
  msgSending: state.groups.sendGroupMessage.seding,
  msgError: state.groups.sendGroupMessage.error,
});

const mapDispatchToProps = (dispatch) => ({
  sendGroupMessageToFirebase: (roomId, message) =>
    dispatch(sendGroupMessageToFirebase(roomId, message)),
});
export default compose(
  firestoreConnect((props) => [
    {
      collection: 'messages',
      orderBy: ['sentAt', 'desc'],
      limit: 25,
      where: ['roomId', '==', props.roomId],
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(GroupChat);
