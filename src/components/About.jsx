import { motion } from 'framer-motion';

const stats = [
  { value: '3.78', label: 'GPA / 4.00' },
  { value: '3+', label: 'Apps Shipped' },
  { value: '2', label: 'Internships' },
  { value: '563', label: 'ProTEFL Score' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
});

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
      style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="mb-16" {...fadeUp(0)}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            The Developer<br />
            <span style={{ color: '#a0a0a0', fontStyle: 'italic', fontWeight: 300 }}>
              Behind the Code
            </span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div className="relative inline-block">
              {/* Photo */}
              <div
                style={{
                  width: '280px',
                  height: '340px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                <img
                  src="/me.jpeg"
                  alt="Septian Cahyo Saputro"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(15%)' }}
                />
              </div>

              {/* Static badge — bottom right */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-1px',
                  right: '-1px',
                  background: '#111111',
                  border: '1px solid rgba(255,255,255,0.08)',
                  padding: '10px 14px',
                }}
              >
                <p
                  className="font-sans"
                  style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#bebebeff', marginBottom: '2px' }}
                >
                  Fresh Grad
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: '11px', fontWeight: 500, color: '#ffffff' }}
                >
                  Frontend Dev
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Text ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h3
              className="font-serif mb-6"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 1.85rem)', fontWeight: 400, color: '#ffffff', lineHeight: 1.3 }}
            >
              Crafting digital experiences,{' '}
              <span style={{ color: '#a0a0a0', fontStyle: 'italic' }}>
                one component at a time
              </span>
            </h3>

            <p
              className="font-sans mb-5"
              style={{ fontSize: '13px', color: '#787878', lineHeight: 1.85, fontWeight: 300 }}
            >
              An Information Technology graduate from{' '}
              <span style={{ color: '#a0a0a0', fontWeight: 400 }}>Universitas Negeri Yogyakarta</span>{' '}
              with hands-on experience building robust, scalable web applications across both the
              financial sector (PT. Bank Syariah Indonesia) and government sector (Kementerian
              Ketenagakerjaan).
            </p>

            <p
              className="font-sans mb-10"
              style={{ fontSize: '13px', color: '#787878', lineHeight: 1.85, fontWeight: 300 }}
            >
              Specializing in modern React.js ecosystems — I translate complex business logic into
              pixel-perfect, intuitive interfaces. From dynamic data dashboards to secure admin
              systems, I build with precision and a user-first mindset.
            </p>

            {/* Contact info — text list */}
            <div className="mb-10" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem' }}>
              {[
                { label: 'Email', value: 'septiancahyo67@gmail.com', href: 'mailto:septiancahyo67@gmail.com' },
                { label: 'Phone', value: '+62 896-7130-6514', href: 'https://wa.me/6289671306514' },
                { label: 'Location', value: 'Yogyakarta, Indonesia', href: null },
              ].map(({ label, value, href }) => (
                <div
                  key={label}
                  className="flex items-baseline gap-6 mb-3"
                >
                  <span
                    className="font-sans"
                    style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b3b3b3ff', minWidth: '56px' }}
                  >
                    {label}
                  </span>
                  {href
                    ? (
                      <a
                        href={href}
                        className="font-sans hover:text-white transition-colors duration-200"
                        style={{ fontSize: '12px', color: '#787878', fontWeight: 300 }}
                      >
                        {value}
                      </a>
                    )
                    : (
                      <span
                        className="font-sans"
                        style={{ fontSize: '12px', color: '#787878', fontWeight: 300 }}
                      >
                        {value}
                      </span>
                    )
                  }
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a href="#experience" className="btn-primary">My Journey</a>
              <a
                href="https://www.linkedin.com/in/septian-cahyo"
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* ── Stats ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 mt-20"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="py-8 px-6"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              }}
            >
              <div
                className="font-serif mb-1"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 300, color: '#ffffff', letterSpacing: '-0.02em' }}
              >
                {s.value}
              </div>
              <div
                className="font-sans"
                style={{ fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b3b3b3ff' }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
