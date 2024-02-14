import S from './A11yHidden.module.css';
import { bool, oneOfType, string, elementType } from 'prop-types';

function A11yHidden({
  as: ComponentName = 'span',
  focusable = false,
  ...restProps
}) {
  const classNames = `${S.a11yHidden} ${focusable ? S.focusable : ''}`.trim();

  return (
    <ComponentName
      className={classNames}
      style={{
        fontSize: 100,
      }}
      {...restProps}
    />
  );
}

A11yHidden.propTypes = {
  as: oneOfType([string, elementType]),
  focusable: bool,
};

export default A11yHidden;
