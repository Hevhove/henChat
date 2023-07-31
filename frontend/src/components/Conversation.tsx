import React from 'react';
import { Message } from '../types/Message';
import Avatar from '@mui/material/Avatar';

interface ConversationWindowProps {
  messages: Message[];
}

const Conversation: React.FC<ConversationWindowProps> = ({ messages }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem', justifyContent: 'flex-end', height: '100%' }}>
      {messages.map((message, index) => (
        <div key={index} style={{ display: 'flex', flexDirection: message.isCurrentUser ? 'row-reverse' : 'row', margin: '1rem 0' }}>
          <Avatar alt={message.sender} src="/static/images/avatar/1.jpg" />
          <div style={{
            position: 'relative',
            marginLeft: message.isCurrentUser ? '0' : '1rem',
            marginRight: message.isCurrentUser ? '1rem' : '0',
            padding: '1rem',
            borderRadius: '4px',
            maxWidth: '70%',
            wordWrap: 'break-word',
            backgroundColor: message.isCurrentUser ? 'lightgreen' : 'lightblue'
          }}>
            <p style={{ margin: 0 }}>{message.sender}: {message.content}</p>
            <div style={{
              position: 'absolute',
              top: '10px',
              left: message.isCurrentUser ? 'auto' : '-9px',
              right: message.isCurrentUser ? '-9px' : 'auto',
              width: '0',
              height: '0',
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderRight: message.isCurrentUser ? 'none' : `10px solid lightblue`,
              borderLeft: message.isCurrentUser ? `10px solid lightgreen` : 'none',
            }} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Conversation;
