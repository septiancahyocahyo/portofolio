import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ROLES = [
  'Frontend Developer',
  'React.js Specialist',
  'UI Engineer',
  'Full Stack Explorer',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  /* Typing animation */
  useEffect(() => {
    const text = ROLES[roleIdx];
    let t;
    if (!deleting && display === text) {
      t = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && display === '') {
      setDeleting(false);
      setRoleIdx(i => (i + 1) % ROLES.length);
    } else {
      t = setTimeout(
        () => setDisplay(s => (deleting ? s.slice(0, -1) : text.slice(0, s.length + 1))),
        deleting ? 45 : 90,
      );
    }
    return () => clearTimeout(t);
  }, [display, deleting, roleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Subtle top horizontal rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      />

      <div className="max-w-3xl mx-auto px-6 z-10">

        {/* Label */}
        <motion.span
          className="section-label"
          {...fadeUp(0.3)}
        >
          Portfolio of
        </motion.span>

        {/* Name */}
        <motion.h1
          className="font-serif text-white leading-none mb-2"
          style={{
            fontSize: 'clamp(3rem, 10vw, 6.5rem)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
        >
          Septian Cahyo
          <br />
          <span style={{ color: '#a0a0a0', fontStyle: 'italic' }}>Saputro</span>
        </motion.h1>

        {/* Divider line */}
        <motion.div
          className="mx-auto my-8"
          style={{ width: 40, height: 1, background: 'rgba(255,255,255,0.15)' }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        />

        {/* Typing role */}
        <motion.div
          className="h-6 mb-6"
          {...fadeUp(0.95)}
        >
          <span
            className="font-sans text-mono-secondary"
            style={{ fontSize: '13px', letterSpacing: '0.08em' }}
          >
            {display}
          </span>
          <span
            className="font-sans text-mono-muted"
            style={{ fontSize: '13px', animation: 'blink 1.1s step-end infinite' }}
          >
            |
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="font-sans text-mono-muted leading-relaxed mb-10 mx-auto"
          style={{ fontSize: '13px', maxWidth: '480px', fontWeight: 300 }}
          {...fadeUp(1.1)}
        >
          IT graduate crafting clean, precise user interfaces and data dashboards
          across financial and government sectors.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          {...fadeUp(1.25)}
        >
          <a href="#projects" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-outline">Contact</a>
        </motion.div>

        {/* Social links — text only */}
        <motion.div
          className="flex gap-6 justify-center"
          {...fadeUp(1.4)}
        >
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/septian-cahyo' },
            { label: 'Email', href: 'mailto:septiancahyo67@gmail.com' },
            { label: 'WhatsApp', href: 'https://wa.me/6289671306514' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="font-sans transition-colors duration-200 hover:text-white"
              style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#bebebeff' }}
            >
              {label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >

        <motion.div
          style={{ width: 1, height: 40, background: 'rgba(255,255,255,0.12)', originY: 0 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        />
      </motion.div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
