// [학습 주제] 프리미티브 상태 vs. 객체형(배열, 객체) 상태

import catsData from '../data/cats.json';
import { getStaticImage } from '../utils';

function CatsList() {
  const handleDeleteCat = () => {
    // console.log('delete cat');
    catsData.pop();
    console.log(catsData.length, catsData);
  };

  return (
    <ul
      style={{
        listStyle: 'none',
        paddingInlineStart: 0,
        marginBlock: 0,
      }}
    >
      {catsData.map((cat) => (
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
            onClick={handleDeleteCat}
          >
            ⅹ
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
