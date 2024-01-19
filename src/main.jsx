import React, { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

// 1. 데이터 분리
// 2. 데이터 공급(전달) + createApp 함수 작성
// 3. 리액트 돔 루트 리-렌더링 + render 함수 작성
// 4. 버튼으로 리-렌더링 제어 (이벤트 핸들링)
// 5. JSX 내부에서 사용되는 데이터를 끼워넣는 슬롯(slot, {})
// 6. JSX 슬롯에는 값을 끼워넣어서 마크업 구조 완성 렌더링
// 7. 그러므로 슬롯에는 꼭 `값`이 필요하다.
//    (문은 사용할 수 없다. 이유는 함수 실행 또는 식은 값으로 처리된다.)

const data = {
  greetingMessage: ["hello!", "react."],
  message:
    "리액트는 사용자 인터페이스 구축을 위한 JavaScript 오픈소스 라이브러리입니다.",
};

const anotherData = {
  greetingMessage: ["행복한 아침이야", "오늘도 좋은 하루 되렴~"],
  message: "나날이 성장하는 여러분을 보는 즐거움이 쏠쏠~ 😉",
};

const getGreetMessage = (condition = true) => {
  let greet = "";

  if (condition) {
    greet = data.greetingMessage[0].toUpperCase();
  } else {
    greet = data.greetingMessage[0].toLowerCase();
  }

  return greet;
};

const createApp = (
  { greetingMessage: [firstMessage, lastMessage], message, min, max, step },
  options = {}
) => {
  return (
    <div id="app">
      <h1>
        {firstMessage.toUpperCase()}
        <br />
        {lastMessage.toUpperCase()}
      </h1>
      <p>{message}</p>

      <form>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          aria-label="중요도"
          disabled={options.isDisabled}
        ></input>
        <button type="submit">보내기</button>
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
const reactDomRoot = createRoot(rootElement);

reactDomRoot.render(
  createApp(data, { isDisabled: false, min: 0, max: 20, step: 1 })
);
