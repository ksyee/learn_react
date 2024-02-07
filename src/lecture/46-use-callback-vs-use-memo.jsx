import { A11yHidden } from '@/components';
import PropTypes from 'prop-types';
import { useId } from 'react';

import React from 'react';

function Exercise() {
  return (
    <>
      <h2>useCallback vs useMemo</h2>
      <Counter min={5} count={9} stop={2} max={32} />
    </>
  );
}

function Counter({ min = 0, count = 0, stop = 1, max = 50 }) {
  const id = useId();

  return (
    <div className="flex gap-1">
      <A11yHidden as="h3" id={id}>
        카운트 조절
      </A11yHidden>
      <button type="button" aria-label="카운트 감소">
        -
      </button>
      <input type="number" min={min} value={count} stop={stop} max={max} />
      <button type="button" aria-label="카운트 증가">
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  min: PropTypes.number,
  count: PropTypes.number,
  stop: PropTypes.number,
  max: PropTypes.number,
};

export default Exercise;
