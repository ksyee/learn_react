// [학습 주제] 프리미티브 상태 vs. 객체형(배열, 객체) 상태

import catsData from '../data/cats.json';
import { getStaticImage } from '../utils';
import { useState } from 'react';

function CatsList() {
  const [cats, setCats] = useState(catsData);

  const handleDeleteCat = (deleteCatId) => () => {
    setCats((prevCats) => {
      return prevCats.filter((cat) => cat.id !== deleteCatId);
    });
  };

  return (
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
            onClick={handleDeleteCat(cat.id)}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
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
