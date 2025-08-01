import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Now we know we're on the client
    function handleResize() {
      setWidth(window.innerWidth);
    }

    // Set width on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}

export default useWindowWidth;
