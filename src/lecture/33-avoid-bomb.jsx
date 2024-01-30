import { useState } from 'react';
import classes from './33-avoid-bomb.modules.css';

function Exercise() {
  const gameClassNames = `${classes.game} ${classes.gameStarted}`.trim();
  return (
    <>
      <div className={gameClassNames}>
        <button className={classes.ball} aria-label="공(ball)"></button>
        <button className={classes.bomb} aria-label="폭탄(bomb)">
          <span role="img">💣</span>
        </button>
      </div>
      <div className={classes.gameControls} role="group">
        <button type="button" aria-label="게임 시작" disabled>
          start
        </button>
        <button type="button" aria-label="게임 일시정지">
          pause
        </button>
      </div>
    </>
  );
}

export default Exercise;
