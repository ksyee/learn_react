import React from 'https://esm.sh/react';
import { createRoot } from 'https://esm.sh/react-dom';

const rootElement = document.querySelector('#root');
const partialElement = document.createElement('div');
partialElement.id = 'partial';

const reactDomRoot = createRoot(rootElement);

const app = (
  <div id='app'>
    <h1>
      안녕 <br /> 리액트
    </h1>
    <p>리액트는 사용자 인터페이스 어쩌구저쩌구...</p>
  </div>
);

reactDomRoot.render(app);
