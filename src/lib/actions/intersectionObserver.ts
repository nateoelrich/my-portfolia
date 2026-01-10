import type { Action } from 'svelte/action';
import { ANIMATION_THRESHOLD } from '$lib/constants/animation';

/**
 * Svelte action that triggers a callback when an element becomes visible
 * using IntersectionObserver
 * 
 * @example
 * <div use:intersectionObserver={{ onIntersect: () => setVisible(true) }}>
 */
export const intersectionObserver: Action<
  HTMLElement,
  { onIntersect: () => void; threshold?: number }
> = (node, { onIntersect, threshold = ANIMATION_THRESHOLD }) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    },
  };
};
