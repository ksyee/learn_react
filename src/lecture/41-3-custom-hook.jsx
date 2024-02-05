import React, { useRef } from 'react';

function Exercise() {
  return (
    <div>
      <StopWatch />
      <hr className="mb-4" />
      <Timer />
    </div>
  );
}

function StopWatch() {
  const [time, start, pause, stop] = useTime();

  const displayTimer = time === 0 ? 0 : time.toFixed(3);

  return (
    <div>
      <h2>Stop Watch: {displayTimer}초</h2>
      <div className="flex gap-2 my-4">
        <button type="button" onClick={start}>
          시작
        </button>
        <button type="button" onClick={pause}>
          일시정지
        </button>
        <button type="button" onClick={stop}>
          정지
        </button>
      </div>
    </div>
  );
}

function Timer() {
  const [time, begin, _, end] = useTime();

  const displayTimer = time === 0 ? 0 : time.toFixed(3);
  return (
    <div>
      <div>
        <button type="button" onClick={begin}>
          BEGIN
        </button>
      </div>
      <h2>타이머: {displayTimer}</h2>
      <button type="button" onClick={end}>
        END
      </button>
    </div>
  );
}

export default Exercise;
