import { styled } from '@mui/system';
import { Grid } from '@mui/material';

export const ContainerGrid = styled(Grid)({
  height: '100vh',
  width: '100vw',
  overflow: 'hidden'
});

export const SidebarGrid = styled(Grid)(({ theme }) => ({
  height: '100%',
  overflow: 'hidden',
  borderRight: '1px solid #555',
}));

export const NavbarGrid = styled(Grid)({
  borderBottom: '1px solid #555',
});

export const MainContentGrid = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const ConversationGrid = styled(Grid)({
  overflowY: 'auto',
  flexGrow: 1,
  borderTop: '1px solid #555',
});

export const MessageInputGrid = styled(Grid)({
  borderTop: '1px solid #555'
});
