import { useState, useEffect, useRef } from 'react';

export default function Exercise() {
  // 리액트 방식 아님.
  // useEffect(() => {
  //   const containers = document.querySelectorAll('.container');

  //   containers[1].classList.add('super-container');
  // }, []);

  // 리액트 방식
  // ref callback 함수
  // 함수의 매개변수로 해당 DOM 요소를 전달받을 수 있음.
  const accessDomElement = (domElement) => {
    domElement.classList.add('super-container');

    domElement.addEventListener('pointerenter', (e) => {
      e.target.style.backgroundColor = '#fbe25452';
    });

    domElement.addEventListener('pointerleave', (e) => {
      e.target.style.backgroundColor = '';
    });
  };
  return (
    <>
      <div className="container">
        <h2 className="text-2xl text-indigo-500 mt-7">DOM 요소 접근/조작</h2>
      </div>
      <div ref={accessDomElement} className="container">
        <h2 className="text-2xl text-indigo-500 mt-7">DOM 요소 접근/조작</h2>
      </div>
      <div className="container">
        <h2 className="text-2xl text-indigo-500 mt-7">DOM 요소 접근/조작</h2>
      </div>
    </>
  );
}
