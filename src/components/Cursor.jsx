import { useEffect, useRef, useState } from 'react';

const TRAIL = 14;

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRefs = useRef([]);
  const pos = useRef({ x: -200, y: -200 });
  const trailPos = useRef(Array(TRAIL).fill({ x: -200, y: -200 }));
  const [bursts, setBursts] = useState([]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let raf;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const animate = () => {
      trailPos.current = [{ ...pos.current }, ...trailPos.current.slice(0, TRAIL - 1)];
      trailRefs.current.forEach((el, i) => {
        if (!el) return;
        const p = trailPos.current[i];
        el.style.left = p.x + 'px';
        el.style.top = p.y + 'px';
        el.style.opacity = String(((TRAIL - i) / TRAIL) * 0.75);
        const s = Math.max(1.5, 9 - i * 0.55);
        el.style.width = s + 'px';
        el.style.height = s + 'px';
      });
      // Ring lags behind with lerp
      if (ringRef.current) {
        const r = ringRef.current;
        const rx = parseFloat(r.dataset.x || pos.current.x);
        const ry = parseFloat(r.dataset.y || pos.current.y);
        const nx = rx + (pos.current.x - rx) * 0.12;
        const ny = ry + (pos.current.y - ry) * 0.12;
        r.dataset.x = nx;
        r.dataset.y = ny;
        r.style.left = nx + 'px';
        r.style.top = ny + 'px';
      }
      raf = requestAnimationFrame(animate);
    };

    const onClick = (e) => {
      const id = Date.now() + Math.random();
      setBursts(prev => [...prev, { x: e.clientX, y: e.clientY, id }]);
      setTimeout(() => setBursts(prev => prev.filter(b => b.id !== id)), 900);
    };

    const onEnterLink = () => setHovered(true);
    const onLeaveLink = () => setHovered(false);

    const links = document.querySelectorAll('a, button, [role="button"]');
    links.forEach(el => { el.addEventListener('mouseenter', onEnterLink); el.addEventListener('mouseleave', onLeaveLink); });

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('click', onClick);
    document.body.style.cursor = 'none';
    animate();

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      cancelAnimationFrame(raf);
      document.body.style.cursor = '';
      links.forEach(el => { el.removeEventListener('mouseenter', onEnterLink); el.removeEventListener('mouseleave', onLeaveLink); });
    };
  }, []);

  return (
    <>
      {/* Core dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          width: hovered ? 12 : 7,
          height: hovered ? 12 : 7,
          transform: 'translate(-50%,-50%)',
          background: '#fff',
          boxShadow: '0 0 8px #9DCDDC, 0 0 20px #9DCDDC88',
          transition: 'width 0.2s, height 0.2s',
        }}
      />

      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9998] rounded-full"
        style={{
          width: hovered ? 48 : 32,
          height: hovered ? 48 : 32,
          transform: 'translate(-50%,-50%)',
          border: hovered ? '1.5px solid #C774B2cc' : '1.5px solid #9DCDDC66',
          boxShadow: hovered ? '0 0 20px #C774B255, inset 0 0 10px #C774B222' : '0 0 14px #9DCDDC33',
          transition: 'width 0.3s, height 0.3s, border 0.3s, box-shadow 0.3s',
        }}
      />

      {/* Colourful trail */}
      {Array(TRAIL).fill(0).map((_, i) => (
        <div
          key={i}
          ref={el => { trailRefs.current[i] = el; }}
          className="fixed pointer-events-none rounded-full"
          style={{
            zIndex: 9997 - i,
            width: 9, height: 9,
            transform: 'translate(-50%,-50%)',
            background: i % 3 === 0 ? '#9DCDDC' : i % 3 === 1 ? '#C774B2' : '#5692A9',
            boxShadow: i < 5 ? `0 0 6px currentColor` : 'none',
          }}
        />
      ))}

      {/* Click bursts */}
      {bursts.map(b => <ClickBurst key={b.id} x={b.x} y={b.y} />)}
    </>
  );
}

function ClickBurst({ x, y }) {
  return (
    <div className="fixed pointer-events-none z-[9999]" style={{ left: x, top: y }}>
      {Array(10).fill(0).map((_, i) => {
        const angle = (i / 10) * 360;
        const color = i % 2 === 0 ? '#9DCDDC' : '#C774B2';
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 5, height: 5,
              borderRadius: '50%',
              background: color,
              boxShadow: `0 0 8px ${color}`,
              transform: 'translate(-50%,-50%)',
              animation: 'burstParticle 0.75s ease-out forwards',
              '--deg': `${angle}deg`,
            }}
          />
        );
      })}
    </div>
  );
}
