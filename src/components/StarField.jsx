import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let shootingStars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const stars = Array.from({ length: 280 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.8 + 0.2,
      alpha: Math.random() * 0.7 + 0.2,
      speed: (Math.random() - 0.5) * 0.012,
      color: (() => {
        const n = Math.random();
        if (n > 0.88) return '#9DCDDC';
        if (n > 0.75) return '#C774B2';
        return '#ffffff';
      })(),
    }));

    const addShootingStar = () => {
      if (shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * canvas.width * 0.75,
          y: Math.random() * canvas.height * 0.35,
          vx: Math.random() * 9 + 7,
          vy: Math.random() * 6 + 3,
          len: Math.random() * 130 + 70,
          alpha: 1,
        });
      }
    };
    const shootInterval = setInterval(addShootingStar, 4500);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach(s => {
        s.alpha += s.speed;
        if (s.alpha > 1 || s.alpha < 0.1) s.speed *= -1;
        ctx.save();
        ctx.globalAlpha = Math.min(1, Math.max(0, s.alpha));
        ctx.fillStyle = s.color;
        if (s.r > 1.3) { ctx.shadowBlur = 8; ctx.shadowColor = s.color; }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      shootingStars = shootingStars.filter(s => s.alpha > 0.04);
      shootingStars.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;
        s.alpha -= 0.016;
        const angle = Math.atan2(s.vy, s.vx);
        const grad = ctx.createLinearGradient(
          s.x, s.y,
          s.x - Math.cos(angle) * s.len,
          s.y - Math.sin(angle) * s.len,
        );
        grad.addColorStop(0, `rgba(157,205,220,${s.alpha})`);
        grad.addColorStop(0.4, `rgba(157,205,220,${s.alpha * 0.4})`);
        grad.addColorStop(1, 'rgba(157,205,220,0)');
        ctx.save();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(157,205,220,0.8)';
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(angle) * s.len, s.y - Math.sin(angle) * s.len);
        ctx.stroke();
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      clearInterval(shootInterval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
