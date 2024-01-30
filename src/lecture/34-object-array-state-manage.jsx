// [학습 주제] 프리미티브 상태 vs. 객체형(배열, 객체) 상태

import { useState } from 'react';
import catsData from '../data/cats.json';
import { getStaticImage } from '../utils';

// function callBook() {
//   console.log('call book')
// }

// function run() {
//   callBook(); // 바로 실행??? 이벤트 의해 실행
//   globalThis.addEventListener('click', callBook); // 바로 실행? 이벤트에 의해 실행
//   globalThis.addEventListener('click', callBook()); // 바로 실행? 이벤트에 의해 실행
//   globalThis.addEventListener('click', () => callBook()); // 바로 실행? 이벤트에 의해 실행
// }

// run();

const newCat = catsData[2];

const createCatsList = () => () => {
  catsData.map((cat) => {
    const [year] = cat.birth.split('-');
    const age = new Date().getFullYear() - year;
    return { ...cat, age };
  });
};

function CatsList() {
  // 어떤 상태 ?
  // 고양이 집합(catsData) : Array
  // 함수를 실행해 반환된 값이 초깃값으로 설정
  const [cats, setCats] = useState(createCatsList);

  const handleDeleteCat = (deleteCatId) => () => {
    setCats((cats) => cats.filter((cat) => cat.id !== deleteCatId));
  };

  // const handleDeleteCat = (deleteCatId) => {
  // setCats(cats.filter((cat) => cat.id !== deleteCatId));
  // };

  const handleAddCat = () => {
    const newCatId = crypto.randomUUID();
    setCats([{ ...newCat, id: newCatId }, ...cats]);
  };

  return (
    <>
      <button type="button" onClick={handleAddCat} style={{ marginBlock: 20 }}>
        NEW CAT
      </button>
      <ul
        style={{
          listStyle: 'none',
          paddingInlineStart: 0,
          marginBlock: 0,
        }}
      >
        {cats.map((cat) => (
          <li key={cat.id}>
            <img
              height={100}
              src={getStaticImage(cat.imageSrc)}
              alt={cat.imageAlt}
            />
            <button
              type="button"
              aria-label="삭제"
              title="삭제"
              // 일반적으로 리액트 사용 시, 개발자가 주로 하는 방식
              onClick={() => handleDeleteCat(cat.id)}
              // JS 클로저 활용 시
              // onClick={handleDeleteCat(cat.id)}
            >
              ⅹ (<span>{cat}</span>)
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default function Exercise() {
  return (
    <div>
      <h2>객체형 상태 관리</h2>
      <CatsList></CatsList>
    </div>
  );
}
