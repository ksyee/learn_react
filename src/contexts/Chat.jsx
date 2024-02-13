import { node } from 'prop-types';
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

// [학습 순서]
// 3. 컨텍스트 API 활용 (글로벌 또는 특정 컨텍스트 상태 관리) ✅
// ...
// 3-3-2. 컨텍스트 분리 (가능하다면 처음에 설계 잘해서 한 번에 분리)
const ChatStateContext = createContext();
ChatStateContext.displayName = 'ChatStateContext';

const ChatUpdaterContext = createContext();
ChatUpdaterContext.displayName = 'ChatUpdaterContext';

// 3-4. 컨텍스트 프로바이더 래퍼 컴포넌트 (커스텀 프로바이더 컴포넌트)
export const ChatProvider = ({ children }) => {
  const [users, setUsers] = useState({
    id: 'temp',
    name: '알 수 없음',
    role: 'GUEST',
  });

  // const updateUsers = useCallback(() => {
  //   setUsers({
  //     id: 'Gby5LfLcaLXoqBSMP9aubbynNdnOem26DTiCETf0Gt8=',
  //     name: '박하늘',
  //     role: 'MEMBER',
  //   });
  // }, []);
  

  const [messages, setMessages] = useState(['친구야!!! 우리 언제 만나?']);

  const updateMessages = useCallback((newMessage) => {
    setMessages((messages) => [...messages, newMessage]);
  }, []);

  const chatStates = useMemo(
    () => ({
      users,
      messages,
    }),
    [users, messages]
  );

  const chatUpdaters = useMemo(() => {
    updateUsers() {
      setUsers({
        id: 'Gby5LfLcaLXoqBSMP9aubbynNdnOem26DTiCETf0Gt8=',
        name: '박하늘',
        role: 'MEMBER',
      });
    },
    updateMessages;
  }, []);

  return (
    <ChatStateContext.Provider value={chatStates}>
      <ChatUpdaterContext.Provider value={{ updateUsers, updateMessages }} />
    </ChatStateContext.Provider>
  );
};

ChatProvider.propTypes = {
  children: node,
};

// 3-5. 컨텍스트 값을 공급하는 커스텀 훅
export const useChat = () => {
  const value = useContext(ChatStateContext);

  // 유효성 검사가 필요한 이유
  if (!value) {
    throw new Error(
      'useChat 훅은 ChatStateProvider 내부에서만 사용 가능합니다.'
    );
  }

  return value;
};

export const useChatStates = () => {
  const value = useContext(ChatUpdaterContext);

  if (!value) {
    throw new Error(
      'useChatStates 훅은 ChatStateProvider 내부에서만 사용 가능합니다.'
    );
  }

  return value;
}
// 3-6. 효율적인 리-렌더링 관리 (프로파일링 & 메모)
// - state 컨텍스트 (변경되는 값(상태)을 반환하는 컨텍스트)
// - updater 컨텍스트 (변경되지 않는 값(함수)을 반환하는 컨텍스트)
// - memo 함수
