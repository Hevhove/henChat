import { Box, Button, TextField, Tooltip, IconButton } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

interface ChatInputProps {}

const ChatInput: React.FC<ChatInputProps> = () => {
  const [message, setMessage] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Here you can handle sending the message
    // For now, we'll just log it and clear the input
    console.log(message);
    setMessage('');
  };

  return (
    <Box display="flex" padding={2} bgcolor="#333333" alignItems="center">
      <TextField
        variant="filled"
        color="secondary"
        value={message}
        onChange={handleInputChange}
        placeholder="Send a message"
        fullWidth
        InputProps={{ disableUnderline: true }}
        sx={{
          borderRadius: '4px',
          backgroundColor: '#444444',
          mr: 2,
          '&::placeholder': {
            textAlign: 'left',
            verticalAlign: 'middle',
            color: '#777777'
          },
          '& input': {
            color: 'white',
            verticalAlign: 'middle',
            paddingTop: '10px',  // Adjust this as needed
            paddingBottom: '10px'  // Adjust this as needed
          }
        }}
      />
      <Tooltip title="Send message">
        <IconButton sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, mr: 1, color: '#777777'}}>
          <SendIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ChatInput;
