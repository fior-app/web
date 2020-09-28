import React from 'react';
import { Feed, Icon } from "semantic-ui-react";
import moment from 'moment';

const Message = ({ message }) => (
  <Feed.Event>
    <Feed.Label>
      <img src='https://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg'/>
    </Feed.Label>
    <Feed.Content>
      <Feed.Summary>
        <Feed.User>{message.sender.name}</Feed.User>
        <Feed.Date>{moment(message.sentAt.toDate()).fromNow()}</Feed.Date>
      </Feed.Summary>
      <Feed.Extra text>
        {message.messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </Feed.Extra>
      {/*<Feed.Meta>*/}
      {/*  <Feed.Like>*/}
      {/*    <Icon name='like'/>4 Likes*/}
      {/*  </Feed.Like>*/}
      {/*</Feed.Meta>*/}
    </Feed.Content>
  </Feed.Event>
);

export default Message;
