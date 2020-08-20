import React from 'react';

const Message = ({ message }) => (
  <div>
    <span style={{ color: 'grey' }}>{message.sender.name}</span>
    {' : '}
    <span style={{ color: 'green' }}>{message.message}</span>
  </div>
);

export default Message;
