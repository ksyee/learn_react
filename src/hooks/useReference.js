import { useState } from 'react';

// 첫 번째 커스텀(사용자 정의) 훅
// 리액트의 useRef 훅의 작동 원리 살펴보기
function useReference(initialValue) {
  // 함수 컴포넌트 안에서 사용할 때 값을 기억하기 위함
  // 값을 업데이트 할 필요는 없음
  const [refObject] = useState({ current: initialValue });

  return refObject;
}

export default useReference;
