import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Disable browser scroll restoration globally when this file is imported
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    console.log("Route changed:", pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
