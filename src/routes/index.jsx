import {
  createBrowserRouter,
  createRoutesFormElements,
  Route,
} from 'react-router-dom';

// 레이아웃(Layouts)
import RootLayout from '@/pages/layouts/RootLayout';

// 페이지(Pages)
import NotFound from '@/pages/NotFound';

// 내비게이션(Navigation)
import navigationItems from './navigation';

// 루트 구성(routes configuration)
const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: navigationItems,
  },
];

const options = {
  // basename: '/euid'
};

// 라우터 인스턴스 생성
let router = createBrowserRouter(routes, options);

// JSX 라우터 구성 + 라우터 인스턴스 생성
router = createBrowserRouter(
  createRoutesFormElements(
    <Route>
      <Route></Route>
    </Route>
  )
);

// 라우터 인스턴스 기본 내보내기
export default router;
