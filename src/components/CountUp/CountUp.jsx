import classes from './CountUp.module.css';

function CountUp({ count = 0 }) {
  return (
    <div className={classes.CountUp}>
      <output>{count}</output>
      <button type="button" className={classes.button}>
        +1
      </button>
    </div>
  );
}

export default CountUp;
