import classes from './Graph.module.css';
import { range } from '../../utils/range';

function Graph({ start, end, step = 1 }) {
  if (start >= end) {
    throw new Error('start가 end보다 작아야 합니다.');
  }

  return (
    <figure className={classes.Graph}>
      <span className={classes.peg}>0</span>
      <span className={classes.peg}>25</span>
      <span className={classes.peg}>50</span>
      <span className={classes.peg}>75</span>
      <span className={classes.peg}>100</span>
    </figure>
  );
}

export default Graph;
