import { useState } from 'react';
import { range } from 'lodash';

function Son({ index }) {
  return (
    <div>
      <h3>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          자식 컴포넌트 {index}
        </a>
      </h3>
    </div>
  );
}

function Parent({ start = 1, end = 3 }) {
  return (
    <div>
      <h2>부모 컴포넌트</h2>
      <ul>
        {range(start, end).map((n) => {
          return (
            <li key={n}>
              <Son index={n} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Exercise() {
  return (
    <>
      <Parent start={2} end={12} />
    </>
  );
}

export default Exercise;
