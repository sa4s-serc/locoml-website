import { useState, useEffect } from 'react';

type Orientation = 'portrait' | 'landscape';

/**
 * Hook to detect the device orientation.
 * Useful for tablets and phones where layout behavior dramatically shifts.
 */
export function useOrientation(): Orientation {
  const [orientation, setOrientation] = useState<Orientation>('portrait');

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(window.innerHeight > window.innerWidth ? 'portrait' : 'landscape');
    };

    updateOrientation();
    window.addEventListener('resize', updateOrientation);
    return () => window.removeEventListener('resize', updateOrientation);
  }, []);

  return orientation;
}
