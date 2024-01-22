import React from 'react';
import { createRoot } from 'react-dom/client';

// 함수 컴포넌트 (Function Component)
function App() {
  return (
    <div>
      <h1>Function Component</h1>
    </div>
  );
}

createRoot(document.querySelector('#root')).render(<App />);
