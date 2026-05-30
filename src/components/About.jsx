import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const stats = [
  { value: '3.78', label: 'GPA / 4.00', emoji: '🎓' },
  { value: '3+', label: 'Apps Shipped', emoji: '🚀' },
  { value: '2', label: 'Internships', emoji: '💼' },
  { value: '563', label: 'ProTEFL Score', emoji: '🌐' },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(10,31,58,0.55) 0%, rgba(6,43,67,0.45) 50%, rgba(10,31,58,0.55) 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-nebula-deepest/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-space-medium/15 blur-[90px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Section header */}
        <motion.div className="text-center mb-16" {...fadeUp()}>
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
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Spinning rings */}
              <div
                className="absolute rounded-full border border-space-blue/20 animate-spin-slow pointer-events-none"
                style={{ inset: -32 }}
              />
              <div
                className="absolute rounded-full border border-nebula-medium/25 animate-spin-reverse pointer-events-none"
                style={{ inset: -20 }}
              />

              {/* Avatar container */}
              <div
                className="relative w-64 h-64 rounded-full overflow-hidden"
                style={{
                  border: '3px solid rgba(86,146,169,0.5)',
                  boxShadow: '0 0 50px rgba(86,146,169,0.3), 0 0 90px rgba(33,5,53,0.4)',
                }}
              >
                <div
                  className="w-full h-full flex flex-col items-center justify-center"
                  style={{ background: 'linear-gradient(145deg, #044568, #210535)' }}
                >
                  <span className="text-7xl mb-2" role="img" aria-label="developer">👨‍💻</span>
                  <p className="text-space-light font-mono text-xs opacity-60">Photo Coming Soon</p>
                </div>
              </div>

              {/* Badge */}
              <motion.div
                className="absolute -bottom-3 -right-3 glass-card px-4 py-2.5 rounded-xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              >
                <p className="text-space-blue font-mono text-[10px] uppercase tracking-wider">Fresh Grad</p>
                <p className="text-white font-bold text-sm">Frontend Dev</p>
              </motion.div>

              {/* Top badge */}
              <motion.div
                className="absolute -top-3 -left-3 glass-card-nebula px-3 py-2 rounded-xl"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
              >
                <p className="text-nebula-pink font-mono text-[10px]">React.js ⚛️</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── TEXT ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-sans font-bold text-white mb-5">
              Crafting Digital Universes,{' '}
              <span className="text-space-light">One Component at a Time</span>
            </h3>
            <p className="text-space-pale/70 leading-relaxed mb-5">
              An Information Technology graduate from{' '}
              <span className="text-space-light font-semibold">Universitas Negeri Yogyakarta</span>{' '}
              with hands-on experience building robust, scalable web applications across both the
              financial sector (PT. Bank Syariah Indonesia) and government sector (Kementerian
              Ketenagakerjaan).
            </p>
            <p className="text-space-pale/70 leading-relaxed mb-8">
              Specializing in modern React.js ecosystems — I translate complex business logic into
              pixel-perfect, intuitive interfaces. From dynamic data dashboards to secure admin
              systems, I build with precision and a user-first mindset.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-8">
              {[
                { icon: FiMail, text: 'septiancahyo67@gmail.com', href: 'mailto:septiancahyo67@gmail.com' },
                { icon: FiPhone, text: '+62 896-7130-6514', href: 'tel:+6289671306514' },
                { icon: FiMapPin, text: 'Yogyakarta, Indonesia', href: null },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3 text-space-pale/65">
                  <Icon size={15} className="text-space-blue flex-shrink-0" />
                  {href
                    ? <a href={href} className="font-mono text-sm hover:text-space-light transition-colors">{text}</a>
                    : <span className="font-mono text-sm">{text}</span>
                  }
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#experience" className="btn-primary !px-6 !py-2.5 !text-sm">
                My Journey →
              </a>
              <a
                href="https://www.linkedin.com/in/septian-cahyo"
                target="_blank"
                rel="noreferrer"
                className="btn-outline !px-6 !py-2.5 !text-sm"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300"
              style={{ animation: 'borderGlow 4s ease-in-out infinite', animationDelay: `${i * 0.5}s` }}
              {...fadeUp(i * 0.1)}
            >
              <div className="text-3xl mb-2">{s.emoji}</div>
              <div
                className="text-3xl font-bold mb-1"
                style={{ color: '#9DCDDC', textShadow: '0 0 20px rgba(157,205,220,0.5)' }}
              >
                {s.value}
              </div>
              <div className="text-space-pale/55 text-xs font-mono">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
