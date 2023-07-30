import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { Channel } from '../types/Channel';

interface ChannelBannerProps {
  channel?: Channel;
}

const ChannelBanner: React.FC<ChannelBannerProps> = ({ channel }) => {
  if (!channel) {
    return null;
  }

  return (
    <Box display="flex" alignItems="center" p={2} bgcolor="#333333" color="white">
      <Avatar alt={channel.name} src={channel.avatar} sx={{ mr: 2 }} />
      <Box>
        <Typography variant="h5">{channel.name}</Typography>
        <Typography variant="body2" color="gray">
          {channel.name === 'Georgina' ? 'Click to see contact details' : 'Click to see channel details'}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChannelBanner;
