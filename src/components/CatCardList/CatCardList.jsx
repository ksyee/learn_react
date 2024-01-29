import CatCardItem from './CatCardItem';
import classes from './CatCardList.module.css';
import catsData from '../../data/cats.json';

function CatCardList() {
  const renderCatsList = catsData.map((cat) => {
    return <CatCardItem key={cat.id} cat={cat} />;
  });

  return (
    <section className={classes.component} aria-label="사랑스런 고양이 가족">
      {renderCatsList}
    </section>
  );
}

export default CatCardList;
