import { oneOf } from 'prop-types';

function ChatRoomInfo() {
  return (
    <div>
      <h3>ChatRoomInfo</h3>
    </div>
  );
}

ChatRoomInfo.propTypes = {
  role: oneOf(['GUEST', 'MEMBER', 'ADMINISTRATOR']),
};

export default ChatRoomInfo;
