import { useState } from 'react';

export default function useToggle() {
  const [value, setValue] = useState(false);

  const toggle = () => {
    setValue((prevValue) => !prevValue);
  };

  return [value, toggle];
}

export function useToggleByValues(initialValue = [true, false]) {
  const [toggleValue, setToggleValue] = useState(initialValue[0]);

  const changeToggleValue = () => {
    setToggleValue((prevValue) =>
      prevValue === initialValue[0] ? initialValue[1] : initialValue[0]
    );
  };

  return [toggleValue, changeToggleValue];
}
