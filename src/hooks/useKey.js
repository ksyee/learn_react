import { useEffect } from 'react';

function useKey(key, callback, eventType = 'keydown') {
  useEffect(() => {
    const handler = (e) => callback?.(e);

    globalThis.addEventListener(eventType, handler);

    return () => {
      globalThis.removeEventListener(eventType, handler);
    };
  }, [key, eventType]);

  // return undefined
}

export default useKey;
