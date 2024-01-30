import { useState } from 'react';

function Box({ boxMessage }) {
  return (
    <div
      style={{
        display: 'grid',
        placeContent: 'center',
        padding: 20,
      }}
    >
      <b>{boxMessage}</b>
      <button
        type="button"
        style={{
          marginBlockStart: 12,
        }}
        onClick={() => {
          console.log('바꾸면 안돼');
          boxMessage += '🎩';
        }}
      >
        change boxMessage prop
      </button>
    </div>
  );
}

function Exercise() {
  let [message, setMessage] = useState('Hello, React!');
  return (
    <div>
      <p>{message}</p>
      <button
        type="button"
        onClick={() => {
          message = 'asdf';
        }}
      >
        change message
      </button>
      <hr />
      <Box boxMessage={message} />
    </div>
  );
}

export default Exercise;
