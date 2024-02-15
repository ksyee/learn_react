import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { FormInput } from '@/components';
import { useRef, useReducer } from 'react';
import {
  INIT_MESSAGES_INFOas as initialMessages,
  manageMessages as messageReducer,
} from '@/store/messages';

export function Component() {
  const inputRef = useRef(null);
  // const [messages, setMessages] = useState(['wow']);
  // const [newMessage, setNewMessage] = useState('');

  const [messageState, dispatch] = useReducer(messageReducer, initialMessages);

  const handleAddMessage = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newMessage = formData.get('message');

    dispatch('added', {
      newMessage,
      messages: messageState.messages,
    });

    inputRef.current.focus();
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('리듀서 활용! 리덕스처럼!!!!')}</title>
        <meta name="description" content="..." />
      </Helmet>
      <h2 className="my-5">리듀서 함수를 활용해 복잡한 상태 관리</h2>

      <form className="flex gap-5" onSubmit={handleAddMessage}>
        <FormInput
          ref={inputRef}
          name="message"
          label="message"
          hiddenLabel
          value={messageState.newMessage}
        >
          메시지
        </FormInput>
        <button type="submit">추가</button>
      </form>

      <ul className="my-5">
        {messageState.messages.map((m, i) => (
          <li key={i}>
            {m} <span onClick={dispatch('delete')}>❌</span>
          </li>
        ))}
      </ul>
    </>
  );
}

Component.displayName = 'LearnReducerPage';
