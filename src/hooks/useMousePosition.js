import { useEffect, useState } from 'react';

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    globalThis.window.addEventListener('mousemove', handleMouseMove);

    return () => {
      globalThis.window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return [position.x, position.y];
}

export default useMousePosition;
