import React from "react";
import ReactDOM from "react-dom";

// @ts-ignore
const { createRoot } = ReactDOM;

const createApp = () => {
  return (
    <div id="app">
      <h1>안녕</h1>
      <p>리액트는 어쩌구저쩌구</p>
    </div>
  );
};

const rootElement = document.querySelector("#root") as HTMLDivElement;
const root = createRoot(rootElement);

root.render(createApp());
