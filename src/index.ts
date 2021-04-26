import { CSSProperties, useCallback, useEffect, useState } from 'react';
import { useSpring } from 'react-spring';
import usePrefersReducedMotion from './use-prefers-reduced-motion';

interface Args {
  x?: number;
  y?: number;
  z?: number;
  rotation?: number;
  rx?: number;
  ry?: number;
  rz?: number;
  scale?: number;
  sx?: number;
  sy?: number;
  sz?: number;
  skewX?: number;
  skewY?: number;
  timing?: number;
  springConfig?: {
    tension?: number;
    friction?: number;
  };
  delay?: number;
}

export type BoopTuple = [CSSProperties, () => (() => void) | undefined];

const useBoop: (args: Args) => BoopTuple = function ({
  x = 0,
  y = 0,
  z = 0,
  rotation = 0,
  rx = 0,
  ry = 0,
  rz = rotation,
  scale = 1,
  sx = scale || 1,
  sy = scale || 1,
  sz = scale || 1,
  skewX = 0,
  skewY = 0,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
  delay = 0,
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isBooped, setIsBooped] = useState(false);
  let style: CSSProperties = useSpring({
    transform: isBooped
      ? `translate3D(${x}px, ${y}px, ${z}px)
         rotateX(${rx}deg) rotateY(${ry}deg) rotateZ(${rz}deg)
         scale3D(${sx},${sy},${sz})
         skew(${skewX}deg, ${skewY}deg)`
      : `translate3D(0px, 0px, 0px)
         rotateX(0deg) rotateY(0deg) rotateZ(0deg)
         scale3D(1, 1, 1)
         skew(0deg, 0deg)`,
    config: springConfig,
    immediate: prefersReducedMotion,
  });

  if (prefersReducedMotion) style = {};

  const trigger = useCallback(() => {
    if (prefersReducedMotion) return;
    const timeoutId = window.setTimeout(() => setIsBooped(true), delay);
    return () => window.clearTimeout(timeoutId);
  }, [prefersReducedMotion, delay]);

  useEffect(() => {
    if (!isBooped) return;
    const timeoutId = window.setTimeout(() => setIsBooped(false), timing);
    return () => window.clearTimeout(timeoutId);
  }, [timing, isBooped]);

  return [style, trigger];
};

export default useBoop;
