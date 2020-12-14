import usePrefersReducedMotion from '../use-prefers-reduced-motion';
import { renderHook } from '@testing-library/react-hooks';

const fakeMatchMedia = override =>
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: true,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
      ...override,
    })),
  });

describe('usePrefersReducedMotion', () => {
  it('returns correct initial value', () => {
    fakeMatchMedia({ matches: false });
    expect(renderHook(usePrefersReducedMotion).result.current).toBe(true);

    fakeMatchMedia({ matches: true });
    expect(renderHook(usePrefersReducedMotion).result.current).toBe(false);
  });
});
