import React from 'react';
import { createRoot } from 'react-dom/client';

// [학습 주제]
// 컴포넌트 재사용

// .formControl>label+input

function FormControl({ label, type = 'text' }) {
  return (
    <div className="formControl">
      <label htmlFor="username">사용자 이름</label>
      <input type="email" id="username" />
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <FormControl />
      <FormControl />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
