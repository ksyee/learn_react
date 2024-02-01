import classes from './Stack.module.css';

export default function Stack({
  as: Component = 'div',
  className: customClassNames = '',
  style: customStyles,
  vertical = false,
  gap,
  my: marginBlock,
  mx: marginInline,
  ...restProps
}) {
  const componentClassNames = `${classes.Stack} ${customClassNames}`.trim();

  const developerStyles = {};

  if (vertical) {
    developerStyles['--direction'] = 'column';
  }

  if (gap || gap === 0) {
    developerStyles['--gap'] = `${gap}px`;
  }

  if (marginBlock || marginBlock === 0) {
    developerStyles['--marginBlock'] = `${marginBlock}px`;
  }

  if (marginInline || marginInline === 0) {
    developerStyles['--marginInline'] = `${marginInline}px`;
  }

  const componentStyles = {
    ...developerStyles,
    ...customStyles,
  };

  return <Component className={componentClassNames} {...restProps} />;
}
