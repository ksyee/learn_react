const styles = {
  overflow: 'hidden',
  position: 'absolute',
  clip: 'rect(0, 0, 0, 0)',
  'clip-path': 'circle(0)',
  width: 1,
  height: 1,
  margin: '-1px',
  padding: 0,
  border: 0,
  whiteSpace: 'nowrap',
};

export default function A11yHidden({ as: As = 'span', children }) {
  return <As className={styles}>{children}</As>;
}
