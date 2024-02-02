import { Stack } from '@/components';

let renderCount = 0;

export default function Exercise() {
  // 순수하게 리액트 렌더링에 관한 코드만 사용되어야 한다.

  const buttonElements = document.querySelectorAll('.button');

  renderCount += 1;

  // [2] DOM 요소 접근, 조작

  // [3] 비동기 처리
  // - setTimeout, setInterval, Promise, async/await 등의 비동기 처리 함수를 사용하면 부수 효과가 발생한다.
  setTimeout(() => {
    renderCount += 10;
    console.log('1초가 지났습니다.');
  }, 1000);

  // [4] 네트워크 요청
  const data = fetch(
    `${import.meta.env.VITE_PB_API}/api/collections/original_contents/records`
  ).then((res) => res.json());

  console.log(data);

  return (
    <Stack vertical className="mx-6">
      <h2 className="text-2xl mt-4">부수 효과(Side Effects)</h2>
      <Button
        className="button"
        renderCount={renderCount}
        onClick={() => {
          buttonElements.forEach((button) => {
            button.style.cssText = `
              color: #14a256;
            `;

            button.addEventListener('click', (e) => {
              const color = getComputedStyle(e.target, null).color;
              console.log(color);
            });
          });
        }}
      >
        순수 효과
      </Button>
      <Button className="button" renderCount={renderCount}>
        부수 효과
      </Button>
      <ul>
        <li>
          리액트의 컴포넌트는 [ <strong>순수</strong> ] 해야 한다.
        </li>
        <li>리액트 컴포넌트는 오직 렌더링 프로세스에만 관여해야 한다.</li>
        <li>
          리액트 컴포넌트 함수 내부에는 순수하게 렌더링에만 관여하는 코드가
          사용되어야 한다.
        </li>
      </ul>
    </Stack>
  );
}

function Button({ children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  );
}
