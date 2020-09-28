import React from 'react';
import { Feed, Icon } from "semantic-ui-react";

const Message = ({ message }) => (
  <Feed.Event>
    <Feed.Label>
      <img src='https://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg'/>
    </Feed.Label>
    <Feed.Content>
      <Feed.Summary>
        <Feed.User>{message.sender.name}</Feed.User>
        <Feed.Date>1 Hour Ago</Feed.Date>
      </Feed.Summary>
      <Feed.Extra text>
        {message.message}
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
