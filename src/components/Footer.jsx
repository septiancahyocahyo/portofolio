import { FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10 px-6 overflow-hidden"
      style={{ background: '#0A1F3A', borderTop: '1px solid rgba(86,146,169,0.15)' }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Logo / name */}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center font-mono font-bold text-xs text-white"
              style={{ background: 'linear-gradient(135deg, #044568, #7B347E)' }}
            >
              SC
            </div>
            <div>
              <p className="text-white font-sans font-semibold text-sm">Septian Cahyo Saputro</p>
              <p className="text-space-blue font-mono text-[10px]">Frontend Developer</p>
            </div>
          </div>

          {/* Center */}
          <p className="text-space-pale/40 font-mono text-xs flex items-center gap-1.5">
            Built with <FiHeart size={11} className="text-nebula-pink" /> using React &amp; Tailwind CSS
          </p>

          {/* Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/septian-cahyo"
              target="_blank"
              rel="noreferrer"
              className="text-space-pale/40 hover:text-space-light transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={17} />
            </a>
            <a
              href="mailto:septiancahyo67@gmail.com"
              className="text-space-pale/40 hover:text-space-light transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail size={17} />
            </a>
            <span className="text-space-pale/25 font-mono text-xs">
              © {year}
            </span>
          </div>
        </div>

        {/* Bottom star decoration */}
        <div className="flex justify-center mt-8 gap-2 opacity-30">
          {['✦', '·', '✦', '·', '✦', '·', '✦'].map((c, i) => (
            <span key={i} className="text-space-blue text-xs font-mono">{c}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
