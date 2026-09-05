import React from 'react';

/**
 * Executes a circular ripple theme transition originating from the button coordinates
 */
export const toggleThemeWithCircularReveal = (
  e: React.MouseEvent<HTMLElement> | null,
  isDark: boolean,
  onThemeChange: (nextDark: boolean) => void
) => {
  const nextDark = !isDark;

  let x = window.innerWidth - 40;
  let y = 30;

  if (e && e.currentTarget) {
    const rect = e.currentTarget.getBoundingClientRect();
    x = rect.left + rect.width / 2;
    y = rect.top + rect.height / 2;
  } else if (e && typeof e.clientX === 'number') {
    x = e.clientX;
    y = e.clientY;
  }

  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  );

  const isViewTransitionSupported = 
    typeof document !== 'undefined' && 
    'startViewTransition' in document &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isViewTransitionSupported) {
    const transition = (document as any).startViewTransition(() => {
      onThemeChange(nextDark);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 550,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      );
    });
  } else {
    // Fallback expanding circular ripple for browsers without View Transitions API
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = `${y}px`;
    overlay.style.left = `${x}px`;
    overlay.style.width = '0px';
    overlay.style.height = '0px';
    overlay.style.borderRadius = '50%';
    overlay.style.transform = 'translate(-50%, -50%)';
    overlay.style.backgroundColor = nextDark ? '#09090b' : '#fafafa';
    overlay.style.zIndex = '99999';
    overlay.style.pointerEvents = 'none';
    overlay.style.transition = 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1), height 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease 0.35s';
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      const diameter = endRadius * 2.2;
      overlay.style.width = `${diameter}px`;
      overlay.style.height = `${diameter}px`;
    });

    setTimeout(() => {
      onThemeChange(nextDark);
    }, 280);

    setTimeout(() => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        if (overlay.parentNode) {
          overlay.parentNode.removeChild(overlay);
        }
      }, 350);
    }, 550);
  }
};
