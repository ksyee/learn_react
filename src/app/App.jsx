import { app as appClasName } from './App.module.css';
import Exercise from '@/lecture/48-1-client-side-routing';
import { RouterProvider } from 'react-router-dom';
import router from '@/routes';

function App() {
  return (
    <div className={appClasName}>
      <RouterProvider>
        <Exercise />
      </RouterProvider>
    </div>
  );
}

export default App;
