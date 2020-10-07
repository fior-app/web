import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
  Form, Header, Input, Feed, Divider, Button, Icon,
} from 'semantic-ui-react';
import { useParams } from 'react-router-dom';

import { sendGroupMessageToFirebase } from '../../../../store/actions/mentorspaceActions';
import Message from './message';
import styles from '../../../../styles/chat.module.css';
import moment from 'moment';
import ChatImageUploader from "./chat_image_upload";
import EmptyPlaceholder from '../../../../components/placeholder/empty_placeholder';

const GroupChat = ({
  messages,
  sendGroupMessageToFirebase,
}) => {
  const initialState = {
    message: '',
  };

  const [state, setState] = useState(initialState);

  const { roomId } = useParams();

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
   * */
  const getGroupedMessages = (messages) => {
    const grouped = [];
    let last = null;

    messages.reverse().forEach((message) => {
      const isQuick = last && last.sentAt && message.sentAt && moment(last.sentAt.toDate()).isAfter(moment(message.sentAt.toDate()).subtract(1, 'minute'));

      if (last && message.sender.id === last.sender.id && isQuick) {
        grouped[grouped.length - 1].messages.push({ message: message.message, fileUrl: message.fileUrl });
      } else {
        grouped.push({
          ...message,
          message: undefined,
          messages: [{ message: message.message, fileUrl: message.fileUrl }],
        });
        last = message;
      }
    });
    return grouped;
  };

  let groupedMessages = null;
  if (messages) {
    groupedMessages = getGroupedMessages(Object.values(messages));
  }

  return (
    <>
      <Header as="h2">Thread</Header>
      <Divider/>
      <Feed>
        {groupedMessages ? (
          groupedMessages.reverse().map((message, index) => (message ? (
            <Message message={message} key={index}/>
          ) : (
            <div key={index}/>
          )))
        ) : (
          <EmptyPlaceholder icon="hand peace outline" text="Say hi to start a conversation" />
        )}
      </Feed>
      <div className={styles.keep_chat_margin}/>
      <Form>
        <Form.Field className={styles.sender}>
          <ChatImageUploader roomId={roomId}/>
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
};

const mapStateToProps = (state) => ({
  messages: state.firestore.data.messages,
  msgSending: state.groups.sendGroupMessage.seding,
  msgError: state.groups.sendGroupMessage.error,
});

const mapDispatchToProps = (dispatch) => ({
  sendGroupMessageToFirebase: (roomId, message) => dispatch(sendGroupMessageToFirebase(roomId, message)),
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
  connect(mapStateToProps, mapDispatchToProps),
)(GroupChat);
