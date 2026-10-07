import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const stats = [
  { value: '3.78', label: 'GPA / 4.00' },
  { value: '3+', label: 'Apps Shipped' },
  { value: '2', label: 'Internships' },
  { value: '563', label: 'ProTEFL Score' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

// Clip-path curtain: text reveals by widening from center
const curtainReveal = (delay = 0) => ({
  initial: { opacity: 0, clipPath: 'inset(0 50% 0 50%)' },
  whileInView: { opacity: 1, clipPath: 'inset(0 0% 0 0%)' },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function About() {
  return (
    <section
      id="about"
      className="relative py-0 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #09090b 0%, #121215 50%, #09090b 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-nebula-deepest/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-space-medium/15 blur-[90px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Section header */}
        <motion.div className="text-center mb-16" {...curtainReveal()}>
          <p className="section-tag mb-3">&gt;_ About Me</p>
          <h2 className="section-heading">
            The{' '}
            <span className="gradient-text">Developer</span>
            {' '}Behind the Code
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── AVATAR ── */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.7, rotate: -4 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <div className="relative">
              {/* Avatar container */}
              <div
                className="relative w-64 h-64 rounded-full overflow-hidden"
                style={{
                  border: '1px solid rgba(197, 168, 128, 0.4)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
                }}
              >
                <img
                  src="/me.jpeg"
                  alt="Septian Cahyo Saputro"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 glass-card px-4 py-2.5 rounded-none"
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              >
                <p className="text-space-blue font-mono text-[9px] uppercase tracking-wider">Fresh Grad</p>
                <p className="text-white font-bold text-xs">Frontend Dev</p>
              </motion.div>

              {/* Top badge */}
              <motion.div
                className="absolute -top-3 -left-3 glass-card-nebula px-3 py-2 rounded-none"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
              >
                <p className="text-nebula-pink font-mono text-[9px]">React.js</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── TEXT ── */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <h3 className="text-3xl font-serif font-light text-white mb-5">
              Crafting Digital Experiences,{' '}
              <span className="text-space-light">One Component at a Time</span>
            </h3>
            <p className="text-space-pale/70 leading-relaxed mb-5 font-light">
              An Information Technology graduate from{' '}
              <span className="text-space-light font-semibold">Universitas Negeri Yogyakarta</span>{' '}
              with hands-on experience building robust, scalable web applications across both the
              financial sector (PT. Bank Syariah Indonesia) and government sector (Kementerian
              Ketenagakerjaan).
            </p>
            <p className="text-space-pale/70 leading-relaxed mb-8 font-light">
              Specializing in modern React.js ecosystems — I translate complex business logic into
              pixel-perfect, intuitive interfaces. From dynamic data dashboards to secure admin
              systems, I build with precision and a user-first mindset.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: FiMail, text: 'septiancahyo67@gmail.com', href: 'mailto:septiancahyo67@gmail.com' },
                { icon: FiPhone, text: '+62 896-7130-6514', href: 'https://wa.me/6289671306514' },
                { icon: FiMapPin, text: 'Yogyakarta, Indonesia', href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3 text-space-pale/60">
                  <Icon size={14} className="text-space-blue flex-shrink-0" />
                  {href
                    ? <a href={href} className="font-mono text-xs hover:text-space-light transition-colors">{text}</a>
                    : <span className="font-mono text-xs">{text}</span>
                  }
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#experience" className="btn-primary !px-6 !py-2.5 !text-xs uppercase tracking-wider">
                My Journey →
              </a>
              <a
                href="https://www.linkedin.com/in/septian-cahyo"
                target="_blank"
                rel="noreferrer"
                className="btn-outline !px-6 !py-2.5 !text-xs uppercase tracking-wider"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 border-t border-b border-space-blue/10 py-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="text-center md:text-left group md:border-r border-space-blue/15 last:border-0 px-4"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1], delay: i * 0.12 }}
            >
              <div className="text-[10px] font-mono text-space-blue/60 uppercase tracking-widest mb-2">
                {s.label}
              </div>
              <div className="text-3xl font-serif font-light text-white flex items-center justify-center md:justify-start">
                {s.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
