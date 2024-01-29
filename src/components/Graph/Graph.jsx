import classes from './Graph.module.css';

function Graph() {
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
