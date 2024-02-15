import { useState, useRef } from 'react';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { FormInput } from '@/components';

export function Component() {
  const inputRef = useRef(null);
  const [message, setMessage] = useState(['wow']);
  const [newMessage, setNewMessage] = useState('');

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('리듀서 함수 활용')}</title>
        <meta name="description" />
      </Helmet>
      <h2 className="my-5">리듀서 함수 활용</h2>

      <form
        className="flex gap-5"
        onSubmit={(e) => {
          e.preventDefault();

          setMessage((prev) => [newMessage, ...prev]);
          setNewMessage('');

          inputRef.current.focus();
        }}
      >
        <FormInput
          ref={inputRef}
          name="text"
          label="message"
          value={newMessage}
          onChange={(e) => {
            setNewMessage(e.target.value);
          }}
          hiddenLabel
        >
          메시지
        </FormInput>
        <button type="submit">추가</button>
      </form>
      <ul>
        {message.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default Component;
