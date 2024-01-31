import { useState } from 'react';
import { CountUp } from '@/components';

function Exercise() {
  const [count, setCount] = useState(0);

  function countUp() {
    setCount(count + 1);
  }

  return (
    <div lang="en">
      <h2>Exercise 32</h2>
      <CountUp />
      <CountUp count={count} countUp={countUp} />
    </div>
  );
}

export default Exercise;
