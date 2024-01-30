import catData from '../data/cats.json';
import {getStaticImage} from '../utils'

function CatList() {
  return (
    <ul style={{
      listStyle: 'none',
      paddingInlineStart: 0,
      marginBlock: 0,
    }}>
      {catData.map((cat) => (
        <li key={cat.id}>
          <img src={getStaticImage(cat.imageSrc)} alt={cat.imageAlt} />
        </li>
      )}}
    </ul>
  )
}

function Exercise() {
  return (
    <>
      <h2>Exercise</h2>
    </>
  );
}

export default Exercise;
