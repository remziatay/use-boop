import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';
const getInitialState = () =>
  typeof window === 'undefined' ? true : !window.matchMedia(QUERY).matches;

const usePrefersReducedMotion = () => {
  const [reduceMotion, setReduceMotion] = useState(getInitialState);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(
      '(prefers-reduced-motion: no-preference)'
    );
    const listener = (event: MediaQueryListEvent) => {
      setReduceMotion(!event.matches);
    };
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, []);

  return reduceMotion;
};

export default usePrefersReducedMotion;
