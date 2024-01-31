import { useState } from 'react';
import { range } from '../utils';

function Son({ isActive, value, onActive, index }) {
  // const [state, setState] = React.useState(initialValue);

  // const [showTextDecoration, setShowTextDecoration] = useState(true);

  const textDecoration = isActive ? 'underline' : 'none';
  const color = isActive ? '#dd3c87' : 'inherit';

  // const handleToggleTextDecoration = () => {
  //   setShowTextDecoration(!showTextDecoration);
  // };

  const handleClick = (e) => {
    e.preventDefault();
    onActive(index);
  };

  return (
    <div>
      <h3>
        <a
          href=""
          onClick={handleClick}
          style={{
            color,
            textDecoration,
            textUnderlineOffset: 4,
          }}
        >
          자식 컴포넌트 {value}
        </a>
      </h3>
    </div>
  );
}

function Parent({ start = 1, end = 3, step = 1 }) {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleChangeActiveSon = (sonIndex) => {
    setActiveIndex(sonIndex);
  };

  return (
    <div>
      <h2>부모 컴포넌트</h2>
      <ul>
        {range(start, end, step).map((n, index) => {
          const activeSon = activeIndex === index;

          return (
            <li key={n}>
              <Son
                index={index}
                isActive={activeSon}
                value={n}
                onActive={handleChangeActiveSon}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Exercise() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default Exercise;
