import { useRouteError } from 'react-router-error';

function NotFound() {
  const error = useRouteError();

  console.log(error);

  return (
    <>
      <h2>찾을 수 없음 404</h2>
    </>
  );
}

export default NotFound;
