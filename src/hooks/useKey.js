import { useEffect } from 'react';

function useKey(key, callback, eventType = 'keydown') {
  useEffect(() => {
    const handler = (e) => e.code.toLowerCase() && callback?.(e);

    globalThis.addEventListener(eventType, handler);

    return () => {
      globalThis.removeEventListener(eventType, handler);
    };
  }, [key, callback, eventType]);

  // return undefined;
}

export default useKey;
