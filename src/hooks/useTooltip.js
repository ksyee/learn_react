import { useState } from 'react';

function useTooltip() {
  const [isShow, setIsShow] = useState(false);
  const show = () => setIsShow(true);
  const hide = () => setIsShow(false);
  const toggle = () => setIsShow(!isShow);

  return {
    isShow,
    show,
    hide,
    toggle,
  };
}

export default useTooltip;
