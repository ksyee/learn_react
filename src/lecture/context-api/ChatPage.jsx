import {
  createContext,
  useCallback,
  useState,
  useMemo,
  useRef,
  useEffect,
} from 'react';
import ChatRoomList from './ChatRoomList';
import NavBar from './NavBar';

export const ChatContext = createContext();

let reRenderCount = 0;

function ChatPage() {
  const [users, setUsers] = useState({
    id: 'temp',
    name: '알 수 없음',
    role: 'GUEST',
  });

  const compareRef = useRef({
    prepareUpdateUsers: null,
  });

  const updateUsers = useCallback(() => {
    setUsers({
      id: 'Gby5LfLcaLXoqBSMP9aubbynNdnOem26DTiCETf0Gt8=',
      name: '박하늘',
      role: 'MEMBER',
    });
  }, []);

  useEffect(() => {
    console.log(
      'prepareUpdateUsers = ' + compareRef.current.prepareUpdateUsers
    );

    console.log(
      ++reRenderCount,
      Object.is(updateUsers, compareRef.current.prepareUpdateUsers)
        ? '동일 참조'
        : '다른 참조'
    );

    // 이전 렌더링에서의 updateUsers 함수를 compareRef.current.prepareUpdateUsers 기억(참조)
    compareRef.current.prepareUpdateUsers = updateUsers;
  }, [updateUsers]);

  const [messages, setMessages] = useState(['친구야!!! 우리 언제 만나?']);

  const updateMessages = useCallback((newMessage) => {
    setMessages((messages) => [...messages, newMessage]);
  }, []);

  // 3-2-1. 컨텍스트 내부에 공급(provide)할 값(value)
  // 기억하기 전(리렌더링할 때 마다 새로운 객체가 생성)
  // const chatValue = {
  //   users,
  //   updateUsers,
  //   messages,
  //   updateMessages,
  // };

  // 기억하기 후(컨텍스트의 참조 값이 변경되지 않으면 기억된 값을 반환)
  const chatValue = useMemo(() => {
    return {
      users,
      updateUsers,
      messages,
      updateMessages,
    };
  }, [users, updateUsers, messages, updateMessages]);

  // 3-2-2. 컨텍스트 프로바이더 컴포넌트로 컨텍스트 값 공급
  return (
    <ChatContext.Provider value={chatValue}>
      <div className="flex flex-col space-y-5 bg-slate-100 text-slate-800 p-5 shadow-sm">
        <h3 className="text-xl font-extralight">ChatPage</h3>
        <NavBar />
        <ChatRoomList />
      </div>
    </ChatContext.Provider>
  );
}

export default ChatPage;
