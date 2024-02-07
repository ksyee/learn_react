import { A11yHidden } from '@/components';
import { number, func } from 'prop-types';
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  useMemo,
} from 'react';
import { useToggle } from '@/hooks';

function Exercise() {
  const { value: isVisible, toggle } = useToggle(true);

  return (
    <div>
      {isVisible && <h2>useCallback vs. useMemo</h2>}
      <button type="button" onClick={toggle}>
        {isVisible ? '제목 감춤' : '제목 표시'}
      </button>
      <Counter min={5} count={9} step={2} max={32} />
    </div>
  );
}

function Counter({ min = 0, count = 0, step = 1, max = 50 }) {
  const id = useId();

  const [value, setValue] = useState(count);

  const handleChange = useCallback((e) => {
    const nextValue = Number(e.target.value);
    setValue(nextValue);
  }, []);

  const handleCountUp = useCallback(() => {
    setValue((v) => v + step);
  }, [step]);

  const handleCountDown = useCallback(() => {
    setValue((v) => v - step);
  }, [step]);

  const counterDevButton = useMemo(
    () => <CounterDecButton onUpdate={handleCountDown} />,
    [handleCountDown]
  );

  return (
    <div className="flex gap-1 my-5" aria-labelledby={id}>
      <A11yHidden as="h3" id={id}>
        카운트
      </A11yHidden>
      {/* <CounterDecButton onUpdate={handleCountDown} /> */}
      {counterDevButton}
      <CounterInput
        min={min}
        value={value}
        step={step}
        max={max}
        onUpdate={handleChange}
      />
      <CounterIncButton onUpdate={handleCountUp} />
    </div>
  );
}

Counter.propTypes = {
  min: number,
  count: number,
  step: number,
  max: number,
};

/* CounterButton ------------------------------------------------------------ */
function CounterDecButton(props) {
  const comparePrevPropsRef = useRef(props);
  useEffect(() => {
    const prevProps = comparePrevPropsRef.current;

    console.log(
      '이전 onUpdate vs 이후 onUpdate ->',
      Object.is(prevProps.onUpdate, props.onUpdate)
    );
  });

  return (
    <button
      type="button"
      aria-label="카운트 감소"
      title="카운트 감소"
      className="mr-4"
      onClick={onUpdate}
    >
      -
    </button>
  );
}

CounterDecButton.propTypes = {
  onUpdate: func,
};

function CounterIncButton({ onUpdate }) {
  return (
    <button
      type="button"
      aria-label="카운트 증가"
      title="카운트 증가"
      onClick={onUpdate}
    >
      +
    </button>
  );
}

CounterIncButton.propTypes = CounterDecButton.propTypes;

/* CounterInput ------------------------------------------------------------- */

function CounterInput({ min, value, onUpdate, step, max }) {
  return (
    <input
      type="number"
      min={min}
      value={value}
      onChange={onUpdate}
      step={step}
      max={max}
      className="bg-transparent"
    />
  );
}

CounterInput.propTypes = {
  min: number.isRequired,
  value: number.isRequired,
  step: number.isRequired,
  max: number.isRequired,
  onUpdate: func.isRequired,
};

export default Exercise;
