import { useState } from 'react';
import useToggle from '@/hooks/useToggle';

function Exercise() {
  // const [theme, setTheme] = useState('light');

  // const handleChangeTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  //   console.log('change theme');
  // };

  // const backgroundColor = theme === 'dark' ? 'bg-stone-950' : 'bg-white';
  // const textColor = theme === 'dark' ? 'text-white' : 'text-black';

  const [toDarkTheme, setToDarkTheme] = useToggle();

  const backgroundColor = toDarkTheme ? 'bg-stone-950' : 'bg-white';
  const textColor = toDarkTheme ? 'text-white' : 'text-black';

  return (
    <div>
      <button
        type="button"
        className={`${backgroundColor} ${textColor} p-6 rounded border border-zinc-500`}
        onClick={setToDarkTheme}
      >
        {toDarkTheme ? '다크 테마' : '라이트 테마'}
      </button>

      <ToggleButtonPlayground />
    </div>
  );
}

function ToggleButtonPlayground() {
  <button
    type="button"
    onClick={() => {
      setToDarkTheme;
    }}
  >
    {toDarkTheme ? 'true' : 'false'}
  </button>;
}

export default Exercise;
