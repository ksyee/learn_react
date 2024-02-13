import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import HomePage from '@/pages/Home';
import IntroPage from '@/pages/Intro';
import RootLayout from '@/layouts/RootLayout';

// 루트 구성(routes configuration)
const routes = [
  // route config object
  // { path, element, ... }
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/intro',
    element: <IntroPage />,
  },
];

const options = {
  // basename: '/euid'
};

// 라우터 인스턴스 생성
// const router = createBrowserRouter(routes, options);

// JSX 라우터 구성 + 라우터 인스턴스 생성
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="" element={<IntroPage />} />
      <Route path="intro" element={<IntroPage />} />
    </Route>
  )
);

// 라우터 인스턴스 기본 내보내기
export default router;
