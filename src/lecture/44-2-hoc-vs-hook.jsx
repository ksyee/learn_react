import { useState, useEffect } from 'react';

function ToolTip({ isShow, toggle }) {
  const { isShow, toggle } = props;

  return <div onClick={toggle}>{isShow ? '툴팁' : 'ToolTip'}</div>;
}

function App() {
  return (
    <>
      <h2>React Hook</h2>
      <div className="flex flex-col gap-5 my-5"></div>
      <h2>
        <abbr title="Higher Order Component">HOC</abbr>
      </h2>
    </>
  );
}
