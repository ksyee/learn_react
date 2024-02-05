import { useState, useRef } from 'react';

const INITIAL_TIMER_INFO = {
  id: 0,
  start: null,
};

const [time, setTime] = useState(0);

// 리액트 렌더링에 영향을 주지 않으면서
// 어떤 값을 기억하고 싶다. useRef(memoizedValue)
const timerRef = useRef({ ...INITIAL_TIMER_INFO });

const handleStart = () => {
  if (!timerRef.current.start) {
    timerRef.current.start = Date.now();
  }

  const start = timerRef.current.start;

  timerRef.current.id = setInterval(() => {
    const lastTime = (Date.now() - start) / 1000;
    setTime(lastTime);
  }, 10);
};

const handlePause = () => {
  clearInterval(timerRef.current.id);
};

const handleStop = () => {
  handlePause();
  setTime(0);
  timerRef.current.start = null;

  console.log({ stop: timerRef.current });
};

export { time, handleStart, handlePause, handleStop };
