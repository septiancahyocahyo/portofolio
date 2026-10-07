import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const pos = useRef({ x: -200, y: -200 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const onEnterLink = () => setHovered(true);
    const onLeaveLink = () => setHovered(false);

    const updateLinks = () => {
      const links = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      links.forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };

    updateLinks();
    
    const observer = new MutationObserver(updateLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', onMove, { passive: true });
    
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', onMove);
      observer.disconnect();
      document.body.style.cursor = '';
      
      const links = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      links.forEach(el => {
        el.removeEventListener('mouseenter', onEnterLink);
        el.removeEventListener('mouseleave', onLeaveLink);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        width: 24,
        height: 24,
        transform: 'translate(-2px, -2px)',
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: hovered 
            ? 'drop-shadow(0 0 8px rgba(226, 209, 188, 0.95)) drop-shadow(0 0 2px rgba(197, 168, 128, 0.8))' 
            : 'drop-shadow(0 0 5px rgba(197, 168, 128, 0.7))',
          transition: 'filter 0.3s ease',
        }}
      >
        <path
          d="M2 2 L18 8 L12 12 L8 18 Z"
          fill={hovered ? '#e2d1bc' : '#c5a880'}
          stroke={hovered ? '#fff' : 'rgba(255,255,255,0.4)'}
          strokeWidth="0.8"
          style={{ transition: 'fill 0.3s, stroke 0.3s' }}
        />
      </svg>
    </div>
  );
}

