// createElement 함수
// DOM 노드: HTMLElement 반환
export function createElement(type, props = {}, ...children) {
  // type - DOM 요소 노드 생성
  const element = document.createElement(type);

  // props - 생성한 DOM 요소 노드에 속성 설정
  for (const key in props) {
    if (Object.hasOwnProperty.call(props, key)) {
      const value = props[key];
      element.setAttribute(key, value);
    }
  }

  for (const [key, value] of Object.entries(props)) {
    element.setAttribute(key, value);
  }
  // ...children - 생성한 DOM 요소 노드의 자식으로 구성
  // 생성한 DOM 요소 노드 반환

  return element;
}

// createRoot 함수
// 객체: { render, unmount }
export function createRoot(domNode /* container */) {
  return {};
}

export const EUID = Object.freeze({
  createElement,
});

// 모듈 기본 내보내기

export default EUID;
