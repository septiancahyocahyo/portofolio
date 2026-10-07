import { FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-12 px-6 overflow-hidden bg-space-deepest"
      style={{ borderTop: '1px solid rgba(197, 168, 128, 0.1)' }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo / name */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 flex items-center justify-center font-serif text-sm text-space-blue border border-space-blue/20"
            >
              SC
            </div>
            <div>
              <p className="text-white font-serif text-sm">Septian Cahyo Saputro</p>
              <p className="text-space-blue font-mono text-[9px] uppercase tracking-wider">Frontend Developer</p>
            </div>
          </div>

          {/* Center */}
          <p className="text-space-pale/30 font-sans text-xs flex items-center gap-1.5 font-light">
            Crafted with passion using React &amp; Tailwind CSS
          </p>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/septian-cahyo"
              target="_blank"
              rel="noreferrer"
              className="text-space-pale/40 hover:text-space-light transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={16} />
            </a>
            <a
              href="mailto:septiancahyo67@gmail.com"
              className="text-space-pale/40 hover:text-space-light transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={16} />
            </a>
            <span className="text-space-pale/25 font-mono text-xs">
              © {year}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
