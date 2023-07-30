import {
  ContainerGrid,
  SidebarGrid,
  NavbarGrid,
  MainContentGrid,
  ConversationGrid,
  MessageInputGrid,
} from './styles/AppStyles';
import NavBar from './components/Navbar';
import ChannelList from './components/ChannelList';
import ChannelBanner from './components/ChannelBanner';
import Conversation from './components/Conversation';
import ChatInput from './components/ChatInput';
import { Grid } from '@mui/material';
import { Channel } from './types/Channel';
import { Message } from './types/Message';
import './App.css';

const channels: Channel[] = [
  { name: 'MyChannel', lastMessage: 'Last week I was looking for you. I hope that is fine', lastMessageSender: 'George', avatar: 'your-image-url' },
  { name: 'Georgina', lastMessage: 'We will be leaving soon, see you soon and I wish you all the best.', lastMessageSender: 'John', avatar: 'your-image-url' },
  { name: 'Dirk', lastMessage: 'Hey man, long time no see. How is it still going at that job you disliked?', lastMessageSender: 'Mike', avatar: 'your-image-url' },
  { name: 'Gaming Group', lastMessage: 'Next session is on Sunday. Don’t forget it!', lastMessageSender: 'Leo', avatar: 'your-image-url' },
  { name: 'Team Project', lastMessage: 'The deadline is closing in. Let’s speed up, team!', lastMessageSender: 'Eliza', avatar: 'your-image-url' },
  { name: 'Diana', lastMessage: 'Had a wonderful time at the party last night.', lastMessageSender: 'Diana', avatar: 'your-image-url' },
  { name: 'Book Club', lastMessage: 'This week’s book discussion was insightful.', lastMessageSender: 'Emma', avatar: 'your-image-url' },
  { name: 'Albert', lastMessage: 'Received the documents. Thanks!', lastMessageSender: 'Albert', avatar: 'your-image-url' },
  { name: 'Coding Group', lastMessage: 'Found this awesome coding resource.', lastMessageSender: 'Alex', avatar: 'your-image-url' },
  { name: 'Frank', lastMessage: 'Let’s catch up over the weekend.', lastMessageSender: 'Frank', avatar: 'your-image-url' },
  { name: 'Marketing Team', lastMessage: 'Kudos to everyone on the successful campaign.', lastMessageSender: 'Nicole', avatar: 'your-image-url' },
  { name: 'Lydia', lastMessage: 'Can’t wait to see you at the concert.', lastMessageSender: 'Lydia', avatar: 'your-image-url' },
];

// App.tsx
const messages: Message[] = [
  { content: 'Hello!', sender: 'George', timestamp: new Date().toISOString(), isCurrentUser: true },
  { content: 'Hi, how are you?', sender: 'John', timestamp: new Date().toISOString(), isCurrentUser: false },
  { content: 'I am good. Thanks!', sender: 'George', timestamp: new Date().toISOString(), isCurrentUser: true },
  { content: 'That\'s great to hear.', sender: 'John', timestamp: new Date().toISOString(), isCurrentUser: false },
];

function App() {
  return (
    <ContainerGrid container>
      <SidebarGrid item xs={4}>
        <NavbarGrid item>
          <NavBar/>
        </NavbarGrid>
        <ChannelList channels={channels}/>
      </SidebarGrid>
      <MainContentGrid item xs={8}>
        <Grid item>
          <ChannelBanner channel={channels[0]}/>
        </Grid>
        <ConversationGrid item xs>
          <Conversation messages={messages}/>
        </ConversationGrid>
        <MessageInputGrid item>
          <ChatInput/>
        </MessageInputGrid>
      </MainContentGrid>
    </ContainerGrid>
  );
}

export default App;
