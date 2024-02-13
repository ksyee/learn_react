import { memo } from 'react';
import ChatRoomInfo from './ChatRoomInfo';
import MessageInput from './MessageInput';
import SpeechBubble from './SpeechBubble';
import { useChat } from '@/contexts/Chat';

function ChatRoom() {
  const { users } = useChat();

  return (
    <div className="flex flex-col gap-5 bg-slate-200 p-5">
      <h3>ChatRoom {users.name}</h3>
      <div className="flex flex-col gap-5 bg-slate-300 p-5">
        <ChatRoomInfo />
        <SpeechBubble />
        <MessageInput />
      </div>
    </div>
  );
}

export default memo(ChatRoom);
