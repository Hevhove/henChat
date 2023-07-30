import React from 'react';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Box, rgbToHex } from '@mui/material';
import { Channel } from '../types/Channel';

interface ChannelListProps {
  channels: Channel[];
}

const ChannelList: React.FC<ChannelListProps> = ({ channels }) => {
  return (
    <Box sx={{overflow: 'auto', height: 'calc(100% - 90px)',  bgcolor: 'rgb(25, 25, 25)'}}>
      <List sx={{ width: '100%', bgcolor: 'rgb(25,25,25)', color: 'white', padding: 0 }}>
        {channels.map((channel, index) => (
          <React.Fragment key={channel.name}>
            <ListItem alignItems="flex-start" sx={{ '&:hover': { bgcolor: 'rgb(50,50,50)' } }}>
              <ListItemAvatar>
                <Avatar alt={channel.name} src={channel.avatar} />
              </ListItemAvatar>
              <ListItemText
                sx={{ color: 'white' }}
                primary={channel.name}
                secondaryTypographyProps={{ noWrap: true }}
                secondary={
                  <Box component="div" sx={{ textOverflow: 'ellipsis', overflow: 'hidden', color: '#777777' }}>
                    {`${channel.lastMessageSender}: ${channel.lastMessage}`}
                  </Box>
                }
              />
            </ListItem>
            {index !== channels.length - 1 && (
              <Divider sx={{ bgcolor: '#444444', my: 0, mx: '5%' }} />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default ChannelList;
