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
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

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
    { icon: FiPhone, href: 'https://wa.me/6289671306514', label: 'Phone' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-space-deepest"
    >
      {/* Layered luxury background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, rgba(197, 168, 128, 0.06) 0%, transparent 60%)',
        }}
      />

      {/* Elegant Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(197, 168, 128, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197, 168, 128, 0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Subtle luxury blobs — react to mouse */}
      <div
        className="absolute top-24 left-8 w-96 h-96 rounded-full blur-[110px] pointer-events-none aurora-blob"
        style={{
          background: 'radial-gradient(circle, rgba(197, 168, 128, 0.05) 0%, transparent 70%)',
          transform: `translate(${mouse.x * 20}px, ${mouse.y * 15}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
      <div
        className="absolute bottom-16 right-8 w-80 h-80 rounded-full blur-[100px] pointer-events-none aurora-blob"
        style={{
          background: 'radial-gradient(circle, rgba(179, 146, 116, 0.04) 0%, transparent 70%)',
          transform: `translate(${mouse.x * -15}px, ${mouse.y * -10}px)`,
          transition: 'transform 0.5s ease-out',
          animationDelay: '2s',
        }}
      />

      <div className="container mx-auto px-6 pt-24 pb-2 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 min-h-[calc(100vh-6rem)]">

          {/* ── TEXT ── */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              className="section-tag mb-5"
              initial={{ opacity: 0, scale: 0.7, y: -15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            >
              Portfolio of
            </motion.p>

            <div className="mb-6 font-serif font-light leading-none text-white">
              <motion.span
                className="block text-6xl md:text-8xl font-serif text-white tracking-tight"
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Septian
              </motion.span>
              <motion.span
                className="block text-4xl md:text-6xl text-space-blue font-serif tracking-tight mt-2"
                initial={{ opacity: 0, scale: 0.85, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                Cahyo Saputro
              </motion.span>
            </div>

            <motion.div
              className="h-9 mb-8 font-serif italic text-xl md:text-2xl text-space-blue font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <span className="tracking-wide">{display}</span>
              <span className="text-space-light font-sans font-light animate-pulse ml-1">|</span>
            </motion.div>

            <motion.p
              className="text-space-pale/60 text-base max-w-xl leading-relaxed mb-10 mx-auto lg:mx-0 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              IT graduate crafting clean, premium user interfaces & data dashboards.
              Designing and developing digital solutions across financial and government sectors.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <a href="#projects" className="btn-primary">
                Explore Work →
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
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
                  className="w-10 h-10 rounded-none flex items-center justify-center text-space-light transition-all duration-300 hover:bg-space-blue/10 hover:text-white"
                  style={{ border: '1px solid rgba(197, 168, 128, 0.2)' }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* ── LUXURY MONOGRAM ART ── */}
          <motion.div
            className="flex-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.6, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              transform: `translate(${mouse.x * 12}px, ${mouse.y * 8}px)`,
              transition: 'transform 0.2s ease-out',
            }}
          >
            <LuxuryArtpiece mouse={mouse} />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: 'rgba(197, 168, 128, 0.35)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <span className="font-sans text-[9px] tracking-[0.6em]">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <FiArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function LuxuryArtpiece({ mouse }) {
  return (
    <div className="relative flex items-center justify-center w-72 h-72 md:w-96 md:h-96 pointer-events-none">
      {/* Golden thin ring */}
      <div
        className="absolute rounded-full border border-space-blue/30 w-[85%] h-[85%] animate-spin-slow"
        style={{
          boxShadow: '0 0 30px rgba(197, 168, 128, 0.03)',
        }}
      />
      {/* Inner thin ring */}
      <div
        className="absolute rounded-full border border-space-blue/10 w-[70%] h-[70%] animate-spin-reverse"
        style={{ animationDuration: '24s' }}
      />
      {/* Monogram */}
      <div className="font-serif text-[110px] md:text-[140px] font-extralight text-space-blue/15 select-none tracking-widest">
        SCS
      </div>
      {/* Fine floating dots */}
      <div
        className="absolute w-1.5 h-1.5 rounded-full bg-space-blue/40"
        style={{
          top: '25%',
          right: '25%',
          transform: `translate(${mouse.x * 12}px, ${mouse.y * 12}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="absolute w-1 h-1 rounded-full bg-space-light/25"
        style={{
          bottom: '28%',
          left: '24%',
          transform: `translate(${mouse.x * -8}px, ${mouse.y * -8}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      />
    </div>
  );
}


