export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-8 px-6"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)', background: '#0a0a0a' }}
    >
      <div
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4"
      >
        {/* Name */}
        <span
          className="font-serif"
          style={{ fontSize: '14px', fontWeight: 400, color: '#333333', letterSpacing: '0.01em' }}
        >
          Septian Cahyo Saputro
        </span>

        {/* Copyright */}
        <span
          className="font-sans"
          style={{ fontSize: '10px', letterSpacing: '0.12em', color: '#333333' }}
        >
          © {year}
        </span>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/septian-cahyo"
            target="_blank"
            rel="noreferrer"
            className="font-sans hover:text-white transition-colors duration-200"
            style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#444444' }}
          >
            LinkedIn
          </a>
          <a
            href="mailto:septiancahyo67@gmail.com"
            className="font-sans hover:text-white transition-colors duration-200"
            style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#444444' }}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
