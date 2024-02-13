import Exercise from '@/lecture/48-1-client-side-routing';
import { app as appClasName } from './App.module.css';

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
