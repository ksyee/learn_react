import '@/styles/main.css';
import '@/styles/tailwind.css';
// import '@/styles/avoid-bomb.css';

import { createRoot } from 'react-dom/client';
import App from '@/app/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <>
    <App />
  </>
);
