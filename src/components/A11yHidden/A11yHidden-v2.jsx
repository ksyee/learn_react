function A11yHidden({ as: ComponentName = 'span', ...restProps }) {
  return <ComponentName className="sr-only" {...restProps} />;
}

/* const styles = {
  overflow: 'hidden',
  position: 'absolute',
  clip: 'rect(0, 0, 0, 0)',
  clipPath: 'circle(0)',
  width: 1,
  height: 1,
  margin: -1,
  padding: 0,
  border: 0,
  whiteSpace: 'nowrap',
}; */

export default A11yHidden;
