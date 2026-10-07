import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#home',       label: 'Home' },
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#education',  label: 'Education' },
  { href: '#contact',    label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active, setActive]       = useState('home');
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = NAV_LINKS.map(l => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              background: 'rgba(10,10,10,0.92)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              padding: '14px 0',
            }
          : { padding: '22px 0' }
      }
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">

        {/* Name — left */}
        <a
          href="#home"
          className="font-serif text-white text-sm tracking-wide transition-opacity duration-200 hover:opacity-70"
          style={{ fontWeight: 400, fontSize: '15px', letterSpacing: '0.02em' }}
        >
          Septian Cahyo Saputro
        </a>

        {/* Desktop links — right */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => {
            const id       = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={id}
                href={link.href}
                className="relative font-sans text-[10px] uppercase tracking-[0.18em] transition-colors duration-200"
                style={{ color: isActive ? '#ffffff' : '#555555' }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px bg-white"
                    style={{ opacity: 0.25 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-white transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? 'rotate(45deg) translate(3px, 3px)' : 'none', opacity: menuOpen ? 1 : 0.6 }}
          />
          <span
            className="block w-5 h-px bg-white transition-all duration-300"
            style={{ opacity: menuOpen ? 0 : 0.6 }}
          />
          <span
            className="block w-5 h-px bg-white transition-all duration-300 origin-center"
            style={{ transform: menuOpen ? 'rotate(-45deg) translate(3px, -3px)' : 'none', opacity: menuOpen ? 1 : 0.6 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '360px' : '0' }}
      >
        <div
          className="max-w-5xl mx-auto px-6 py-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-sans text-[10px] uppercase tracking-[0.18em] text-mono-muted hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
