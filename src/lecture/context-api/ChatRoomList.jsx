import { useState } from 'react';
import ChatRoom from './ChatRoom';
import ChatSummary from './ChatSummary';

function ChatRoomList() {
  const [users, setUsers] = useState(null);

  return (
    <div>
      <h3>ChatRoomList</h3>
      <ChatSummary onUpdate={setUsers} />
      <ChatRoom />
    </div>
  );
}

export default ChatRoomList;
