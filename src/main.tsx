import '@/styles/main.css';
import '@/styles/tailwind.css';
// import '@/styles/avoid-bomb.css';

import { createRoot } from 'react-dom/client';
import App from '@/app/App';
import { StrictMode } from 'react';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <>
      <App />
    </>
  );
}
