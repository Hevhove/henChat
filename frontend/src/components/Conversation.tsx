import React from 'react';
import { Message } from '../types/Message';
import Avatar from '@mui/material/Avatar';

interface ConversationWindowProps {
  messages: Message[];
}

const Conversation: React.FC<ConversationWindowProps> = ({ messages }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column-reverse', padding: '1rem' }}>
      {messages.map((message, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: message.isCurrentUser ? 'row-reverse' : 'row', margin: '1rem 0' }}>
          <Avatar alt={message.sender} src="/static/images/avatar/1.jpg" />
          <div style={{
            marginLeft: message.isCurrentUser ? '0' : '1rem',
            marginRight: message.isCurrentUser ? '1rem' : '0',
            padding: '1rem',
            borderRadius: '4px',
            maxWidth: '70%',
            wordWrap: 'break-word',
            backgroundColor: message.isCurrentUser ? 'lightgreen' : 'lightblue'
          }}>
            <p style={{ margin: 0 }}>{message.sender}: {message.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conversation;
