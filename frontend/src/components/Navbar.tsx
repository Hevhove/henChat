import { AppBar, Avatar, Box, IconButton, Toolbar, Tooltip, List, ListItemButton, ListItemText, Popover, Typography } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import AddCommentIcon from '@mui/icons-material/AddComment';
import GroupIcon from '@mui/icons-material/Group';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import React, { useState, useRef } from 'react';
import '../styles/Navbar.css'; // Import your CSS file
interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
  const [isFocused, setFocus] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [anchorPos, setAnchorPos] = useState<{ top: number, left: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleIconClick = () => {
    if(inputRef.current){
      inputRef.current.focus();
      setFocus(true);
    } else {
      setFocus(false);
    }
  }

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorPos({ top: event.clientY, left: event.clientX });
  };

  const handlePopoverClose = () => {
    setAnchorPos(null);
  };

  const open = Boolean(anchorPos);

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333333', height: '120px'}}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1, letterSpacing: '0.2em', color: '#ffffff', textAlign: 'left', pl: 3, py: 1 }}>
        HENCHAT 🇧🇪🧇
      </Typography>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
          <Avatar alt="Profile Picture" src="your-image-url" onClick={handleAvatarClick} />
          <Box>
            <div style={{ flexGrow: 1 }} />
            <Tooltip title="Show messages">
              <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, mr: 1 }}>
                <ChatIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="New message">
              <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, mr: 1 }}>
                <AddCommentIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Show channels">
              <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, mr: 1 }}>
                <GroupIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="New channel">
              <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }, mr: 0.5 }}>
                <GroupAddIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Toolbar>
      <Toolbar>
        <Box display="flex" alignItems="center" borderRadius="4px" padding="0 10px" width="100%" sx={{ backgroundColor: "#4D4D4D" }}>
        <IconButton
          color="inherit"
          onClick={handleIconClick}
        >
        {isFocused
          ? <ArrowBackIosIcon className='icon-rotate-in' sx={{ color: 'green', fontSize: '20px' }} />
          : <SearchIcon className='icon-rotate-in' sx={{ color: 'gray', fontSize: '20px'}} />}
        </IconButton>
          <InputBase
            inputProps={{
              'aria-label': 'search',
              ref: inputRef
            }}
            placeholder="Search…"
            sx={{ color: 'white' }}
            fullWidth
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </Box>
      </Toolbar>
      <Popover
      open={open}
      anchorReference="anchorPosition"
      anchorPosition={ anchorPos ? { top: anchorPos.top, left: anchorPos.left } : undefined }
      onClose={handlePopoverClose}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <List sx={{ bgcolor: '#444444', color: 'white', padding: 0 }}>
        <ListItemButton
          onClick={() => { /* handle change profile picture */ }}
          sx={{ '&:hover': { bgcolor: 'dimgray' } }}
        >
          <ListItemText primary="Set profile picture" />
        </ListItemButton>
        <ListItemButton
          onClick={() => { /* handle logout */ }}
          sx={{ '&:hover': { bgcolor: 'dimgray' } }}
        >
          <ListItemText primary="Set name" />
        </ListItemButton>
        <ListItemButton
          onClick={() => { /* handle set status */ }}
          sx={{ '&:hover': { bgcolor: 'dimgray' } }}
        >
          <ListItemText primary="Set status" />
        </ListItemButton>
        <ListItemButton
          onClick={() => { /* handle set status */ }}
          sx={{ '&:hover': { bgcolor: 'dimgray' } }}
        >
          <ListItemText primary="Logout" />
        </ListItemButton>

      </List>
    </Popover>
    </AppBar>
  );
};

export default Navbar;
