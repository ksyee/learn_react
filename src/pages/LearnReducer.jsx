import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { FormInput } from '@/components';
import { useRef, useReducer } from 'react';
import {
  CREATE_MESSAGE,
  DELETE_MESSAGE,
  INIT_MESSAGES_INFO as initialMessages,
  manageMessages as messageReducer,
} from '@/store/messages';

export function Component() {
  const inputRef = useRef(null);

  const [messageState, dispatch] = useReducer(messageReducer, initialMessages);

  const handleAddMessage = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newMessage = formData.get('message');

    const addAction = {
      type: CREATE_MESSAGE,
      payload: newMessage,
    };

    dispatch(addAction);

    const input = inputRef.current;
    input.value = '';
    input.focus();
  };

  const handleDeleteMessage = (deleteId) => () => {
    const deleteAction = {
      type: DELETE_MESSAGE,
      payload: deleteId,
    };

    dispatch(deleteAction);
  };

  const handleEditMessage = (editId) => () => {
    const editAction = {
      type: EDIT_MESSAGE,
      payload: editId,
    };

    dispatch(editAction);
  };

  // const handleSelectMess = editId;

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('리듀서 활용! 리덕스처럼!!!!')}</title>
        <meta
          name="description"
          content="리듀서를 사용해 복잡한 상태를 관리할 수 있습니다."
        />
      </Helmet>
      <h2 className="my-5">리듀서 함수를 활용해 복잡한 상태 관리</h2>

      <form className="flex gap-5" onSubmit={handleAddMessage}>
        <FormInput ref={inputRef} name="message" label="message" hiddenLabel>
          메시지
        </FormInput>
        <button type="submit">추가</button>
      </form>

      <div>
        <form className="flex gap-5" onSubmit={handleAddMessage}>
          <FormInput ref={inputRef} name="message" label="message" hiddenLabel>
            메시지
          </FormInput>
          <button type="submit">수정</button>
        </form>
      </div>

      <ul className="my-5">
        {messageState.messages.map(({ id, text }) => (
          <li key={id}>
            {text}
            <div className="ml-2 flex gap-1">
              <button type="button" onClick={handleSelectMessage(id)}>
                ✍️
              </button>
              <button type="button" onClick={handleDeleteMessage(id)}>
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

Component.displayName = 'LearnReducerPage';
