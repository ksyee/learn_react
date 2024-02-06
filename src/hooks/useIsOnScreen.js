import { useState, useLayoutEffect, useRef } from 'react';

export default function useIsOnScreen() {
  const [isOnScreen, setIsOnScreen] = useState(false);
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsOnScreen(entry.isIntersecting);
    });
  }, []);
}
