import React from 'react';
import { createRoot } from 'react-dom/client';

// 클래스 문법
class App {
  render() {
    return (
      <div>
        <h1>React Application</h1>
      </div>
    );
  }
}

// 함수 문법
function createApp() {
  return (
    <div>
      <h1>React Application</h1>
    </div>
  );
}

const domElement = document.querySelector('#root');

if (domElement) {
  const reactDomRoot = createRoot(domElement);

  // 컴포넌트(class) = 생성 -> 인스터스(instance)
  const app = new App().render();

  reactDomRoot.render(app);
}
