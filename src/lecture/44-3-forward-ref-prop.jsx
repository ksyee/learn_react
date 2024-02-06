import { AppInput } from '@/components';
import { useEffect, useRef } from 'react';

function Exercise() {
  const emailRef = useRef();

  useEffect(() => {
    emailRef.current.value = 'yamoo9@naver.com';
    setTimeout(() => emailRef.current.focus(), 2000);
  });

  return (
    <form>
      <AppInput forwardRef={emailRef} label="이메일" type="email" />
    </form>
  );
}

export default Exercise;
