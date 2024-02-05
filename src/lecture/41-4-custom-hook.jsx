import { A11yHidden } from '@/components';
import { useToggle } from '@/hooks';
import { useState } from 'react';
import useToggle from '@/hooks/useToggle';

function Exercise() {
  return (
    <>
      <ThemeButtonPlayground />
      <ToggleButtonPlayground />
    </>
  );
}

function ThemeButtonPlayground() {
  const [theme, setTheme] = useState('dark');

  const handleChangeTheme = () => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  };

  const isDarkTheme = theme === 'dark';

  const backgroundColor = isDarkTheme ? 'bg-stone-950' : 'bg-white';
  const forgroundColor = isDarkTheme ? 'text-white' : 'text-stone-950';

  const classNames = `${backgroundColor} ${forgroundColor} p-6 rounded border border-solid border-stone-400`;

  return (
    <div className={classNames}>
      <button type="button" onClick={handleChangeTheme}>
        {theme === 'dark' ? '라이트' : '다크'} 테마{' '}
        <A11yHidden>전환</A11yHidden>
      </button>
    </div>
  );
}

function ToggleButtonPlayground() {
  const [isVisible, setToggle] = useToggle(['light', 'dark']);

  return (
    <div>
      <button type="button" onClick={setToggle}>
        {isVisible ? 'true' : 'false'}
      </button>
      {isVisible && (
        <>
          <p className="p-5 border border-stone-500 text-stone-700">
            현재 박스의 표시 상태는 {isVisible ? '표시' : '감춤'} 입니다
          </p>
          <button type="button" onClick={off} aria-label="박스 감춤 버튼">
            x
          </button>
        </>
      )}
    </div>
  );
}

export default Exercise;
