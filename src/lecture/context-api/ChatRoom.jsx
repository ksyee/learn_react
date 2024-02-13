import { useState } from 'react';
import { oneOf, shape, string } from 'prop-types';
import ChatRoomInfo from './ChatRoomInfo';
import MessageInput from './MessageInput';
import SpeechBubble from './SpeechBubble';

function ChatRoom({ users }) {
  return (
    <div>
      <h3>ChatRoom {users}</h3>
      <ChatRoomInfo />
      <SpeechBubble />
      <MessageInput />
    </div>
  );
}

ChatRoom.propTypes = {
  users: shape({
    id: string,
    name: string,
    role: oneOf(['GUEST', 'HOST', 'ADMIN']),
  }),
};

export default ChatRoom;
