import { EuidInput } from '@/components';
import { useRef, useEffect } from 'react';

function Exercise() {
  const inputHandleRef = useRef(null);

  useEffect(() => {
    console.log(inputHandleRef.current);
  });

  return (
    <form className="flex gap-5 flex-col my-10">
      <EuidInput
        ref={inputHandleRef}
        label="email"
        hiddenLabel
        placeholder="user@company.ui"
      />
    </form>
  );
}

export default Exercise;
