import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const ROLES = [
  'Frontend Developer',
  'React.js Specialist',
  'UI/UX Craftsman',
  'Full Stack Explorer',
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const text = ROLES[roleIdx];
    let t;
    if (!deleting && display === text) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && display === '') {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    } else {
      t = setTimeout(
        () => setDisplay(s => (deleting ? s.slice(0, -1) : text.slice(0, s.length + 1))),
        deleting ? 55 : 105,
      );
    }
    return () => clearTimeout(t);
  }, [display, deleting, roleIdx]);

  const socials = [
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/septian-cahyo', label: 'LinkedIn' },
    { icon: FiMail, href: 'mailto:septiancahyo67@gmail.com', label: 'Email' },
    { icon: FiPhone, href: 'tel:+6289671306514', label: 'Phone' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Layered space background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 30% 45%, rgba(4,69,104,0.8) 0%, rgba(6,43,67,0.9) 35%, rgba(10,31,58,1) 65%, rgba(33,5,53,0.6) 100%)',
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(157,205,220,1) 1px, transparent 1px), linear-gradient(90deg, rgba(157,205,220,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-24 left-8 w-80 h-80 rounded-full bg-space-medium/20 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-16 right-8 w-72 h-72 rounded-full bg-nebula-dark/25 blur-[90px] pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-12 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[calc(100vh-6rem)]">

          {/* ── TEXT ── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              className="section-tag mb-5"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              &gt;_ Hello, Universe! I'm
            </motion.p>

            <motion.h1
              className="mb-5 font-sans font-bold leading-none"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span
                className="block text-6xl md:text-8xl gradient-text"
              >
                Septian
              </span>
              <span className="block text-4xl md:text-6xl text-white mt-1">
                Cahyo Saputro
              </span>
            </motion.h1>

            <motion.div
              className="h-9 mb-8 font-mono text-xl md:text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span className="text-space-light">{display}</span>
              <span className="text-nebula-pink animate-pulse ml-0.5">▌</span>
            </motion.div>

            <motion.p
              className="text-space-pale/65 text-lg max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              IT graduate crafting pixel-perfect interfaces & data dashboards.
              Transforming complex systems into beautiful, user-centric digital experiences
              across financial and government sectors.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
            >
              <a href="#projects" className="btn-primary">
                View My Work →
              </a>
              <a href="#contact" className="btn-outline">
                Let's Connect
              </a>
            </motion.div>

            <motion.div
              className="flex gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-space-light transition-all duration-300 hover:bg-space-blue/20 hover:scale-110"
                  style={{ border: '1px solid rgba(86,146,169,0.4)' }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── PLANET ── */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            <PlanetScene />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(86,146,169,0.5)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-mono text-[10px] tracking-[0.4em]">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <FiArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function PlanetScene() {
  const particles = [
    { size: 5, top: '12%', right: '6%', color: '#9DCDDC', delay: '0s' },
    { size: 3, bottom: '18%', right: '8%', color: '#C774B2', delay: '1s' },
    { size: 4, top: '65%', left: '4%', color: '#5692A9', delay: '2s' },
    { size: 3, top: '28%', left: '7%', color: '#9DCDDC', delay: '1.5s' },
    { size: 4, bottom: '35%', right: '3%', color: '#9DCDDC', delay: '0.8s' },
  ];

  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: 340, height: 340 }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(86,146,169,0.1) 0%, rgba(66,13,74,0.07) 55%, transparent 80%)',
        }}
      />

      {/* Tilted ring outer */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '90%', height: '90%', top: '5%', left: '5%',
          border: '1px solid rgba(157,205,220,0.18)',
          transform: 'rotateX(72deg) rotateZ(22deg)',
          boxShadow: '0 0 18px rgba(157,205,220,0.12)',
        }}
      />

      {/* Tilted ring inner (nebula) */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '68%', height: '68%', top: '16%', left: '16%',
          border: '2px solid rgba(199,116,178,0.22)',
          transform: 'rotateX(68deg) rotateZ(-18deg)',
          boxShadow: '0 0 14px rgba(199,116,178,0.15)',
        }}
      />

      {/* Planet body */}
      <div
        className="relative rounded-full z-10"
        style={{
          width: '52%', height: '52%',
          background:
            'radial-gradient(circle at 36% 32%, #5692A9 0%, #044568 35%, #062B43 65%, #210535 100%)',
          boxShadow:
            '0 0 60px rgba(86,146,169,0.28), 0 0 110px rgba(33,5,53,0.45), inset -18px -14px 35px rgba(0,0,0,0.7)',
          animation: 'floatAnim 6s ease-in-out infinite',
        }}
      >
        {/* Surface stripes */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div
            className="absolute rounded-full"
            style={{ height: 9, width: '60%', top: '26%', left: '17%', background: 'rgba(255,255,255,0.07)', transform: 'rotate(10deg)' }}
          />
          <div
            className="absolute rounded-full"
            style={{ height: 6, width: '40%', top: '50%', left: '28%', background: 'rgba(199,116,178,0.1)', transform: 'rotate(-5deg)' }}
          />
          <div
            className="absolute rounded-full"
            style={{ height: 6, width: '48%', bottom: '26%', left: '10%', background: 'rgba(255,255,255,0.04)', transform: 'rotate(3deg)' }}
          />
        </div>
        {/* Atmosphere highlight */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle at 68% 65%, transparent 52%, rgba(157,205,220,0.13) 73%, transparent 90%)',
          }}
        />
      </div>

      {/* Orbiting moon 1 */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ animation: 'orbit1 9s linear infinite' }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 13, height: 13,
            top: '7%', left: '50%', transform: 'translateX(-50%)',
            background: '#9DCDDC',
            boxShadow: '0 0 12px #9DCDDC, 0 0 24px rgba(157,205,220,0.4)',
          }}
        />
      </div>

      {/* Orbiting moon 2 */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ animation: 'orbit2 14s linear infinite' }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 7, height: 7,
            top: '5%', left: '50%', transform: 'translateX(-50%)',
            background: '#C774B2',
            boxShadow: '0 0 10px #C774B2',
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size, height: p.size,
            top: p.top, bottom: p.bottom, right: p.right, left: p.left,
            background: p.color,
            boxShadow: `0 0 8px ${p.color}`,
            animation: `floatParticle 4s ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
