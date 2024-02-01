import classes from './Stack.module.css';

export default function Stack({
  as: Component = 'div',
  className: customClassNames = '',
  ...restProps
}) {
  const classNames = `${classes.Stack} ${customClassNames}`.trim();

  return <Component className={classNames} {...restProps} />;
}
