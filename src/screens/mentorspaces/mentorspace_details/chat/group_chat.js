import React, { Component, useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Form, Header, Input, Feed, Divider } from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

import { sendGroupMessageToFirebase } from '../../../../store/actions/mentorspaceActions';
import Message from './message';
import styles from '../../../../styles/mentorspace.module.css';

const GroupChat = ({
  messages,
  sendGroupMessageToFirebase
}) => {
  const initialState = {
    message: '',
  };

  const [state, setState] = useState(initialState);

  const { roomId } = useParams()

  const handleOnChangeInput = (e) => {
    setState({
      [e.target.id]: e.target.value,
    });
  };

  const handleSendMessage = () => {
    if (state.message !== '') {
      sendGroupMessageToFirebase(roomId, state);
    }
    setState({ message: '' });
  };

  /** Group consecutive messages by same users
   **/
  const getGroupedMessages = (messages) => {
    const grouped = [];
    let lastSender = null

    messages.forEach((message) => {
      if (message.sender.id === lastSender) {
        grouped[grouped.length - 1].messages.push(message.message)
      } else {
        grouped.push({
          ...message,
          message: undefined,
          messages: [message.message]
        })
        lastSender = message.sender.id
      }
    });
    return grouped;
  }

  let groupedMessages = null;
  if (messages) {
    groupedMessages = getGroupedMessages(Object.values(messages))
  }

  return (
    <>
      <Header as={"h2"}>Thread</Header>
      <Divider/>
      
      <Feed>
        {groupedMessages ? (
          groupedMessages.map((message, index) => {
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
            value={state.message}
            onChange={handleOnChangeInput}
            action={{
              icon: 'send',
              color: 'teal',
              onClick: () => handleSendMessage(),
            }}
          />
        </Form.Field>
      </Form>
      {/* <button onClick={this.handleSendMessage}>send</button> */}
    </>
  );
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
      where: ['roomId', '==', props.match.params.roomId],
    },
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(GroupChat);
