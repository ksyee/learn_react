import { useStorage } from '@/hooks';

const KEY = 'say-today';

function Exercise() {
  const [message, setMessage] = useStorage(KEY, '오늘 기억하고 싶은 말');

  const handleUpdate = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="m-5">
      <input
        type="text"
        aria-label="오늘 기억하고 싶은 말"
        placeholder="오늘 기억하고 싶은 말"
        value={message}
        onChange={handleUpdate}
      />

      <p className="my-2">{message}</p>
    </div>
  );
}

export default Exercise;
