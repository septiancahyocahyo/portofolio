import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

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
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled
        ? { background: 'rgba(6,43,67,0.75)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(86,146,169,0.2)', padding: '12px 0' }
        : { padding: '20px 0' }
      }
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-sm text-white transition-all duration-300 group-hover:scale-110"
            style={{ background: 'linear-gradient(135deg, #044568, #7B347E)', boxShadow: '0 0 15px rgba(86,146,169,0.4)' }}
          >
            SC
          </div>
          <span className="hidden sm:block font-sans font-semibold text-white text-sm tracking-wide">
            Septian Cahyo
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={id}
                href={link.href}
                className="font-mono text-xs transition-all duration-200 relative"
                style={{
                  color: isActive ? '#9DCDDC' : 'rgba(205,215,223,0.55)',
                  textShadow: isActive ? '0 0 12px rgba(157,205,220,0.7)' : 'none',
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, #9DCDDC, transparent)' }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="#contact"
            className="btn-primary !px-5 !py-2 !text-sm ml-2"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-space-light transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-space-light transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-space-light transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '400px' : '0' }}
      >
        <div className="mx-4 mt-2 rounded-2xl glass-card p-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 px-3 font-mono text-sm text-space-pale/70 hover:text-space-light rounded-lg hover:bg-space-medium/20 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
