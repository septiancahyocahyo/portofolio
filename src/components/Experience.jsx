import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    company: 'Kementerian Ketenagakerjaan',
    role: 'Web Developer Intern',
    period: 'Nov 2025 – May 2026',
    location: 'Jakarta, Indonesia',
    type: 'Government Sector',
    color: '#5692A9',
    glowColor: 'rgba(86,146,169,0.4)',
    bullets: [
      'Engineered and deployed 3 responsive web applications from scratch within a strict 6-month timeline using React.js and Tailwind CSS.',
      'Developed SINERGI (Government Risk Management System) — end-to-end risk lifecycle workflow with multi-role access control and dynamic data visualization using TypeScript, Zustand, and TanStack Query.',
      'Developed ETLHP (Audit Management System) using PHP MVC featuring custom Glassmorphism design system, REST API integrations, and interactive Chart.js dashboards.',
      'Architected a secure Admin Dashboard with advanced JWT token management (in-memory access tokens with silent refresh) and a highly modular component architecture.',
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'PHP MVC', 'JWT'],
  },
  {
    company: 'PT. Bank Syariah Indonesia',
    role: 'Web Developer (Front End) Intern',
    period: 'Sep 2024 – Mar 2025',
    location: 'Yogyakarta, Indonesia',
    type: 'Financial Sector',
    color: '#C774B2',
    glowColor: 'rgba(199,116,178,0.4)',
    bullets: [
      'Designed an intuitive, user-centric Umrah dashboard interface in Figma, transforming complex financial data into clear, accessible visual charts.',
      'Delivered pixel-perfect, highly responsive web interfaces by translating high-fidelity Figma designs into interactive frontend components using React.js and CoreUI.',
      'Integrated backend RESTful APIs to enable real-time, data-driven insights ensuring precise live-metric rendering for optimized user decision-making.',
      'Enhanced data accessibility for non-technical stakeholders through visually organized data tables and charts.',
    ],
    tags: ['React.js', 'CoreUI', 'Figma', 'RESTful API', 'Chart.js', 'Responsive Design'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1F3A 0%, #062B43 30%, #0A1F3A 100%)' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-nebula-deepest/15 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-5xl">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag mb-3">&gt;_ Work Experience</p>
          <h2 className="section-heading">
            My{' '}
            <span className="gradient-text">Journey</span>
            {' '}So Far
          </h2>
          <p className="text-space-pale/55 mt-4 max-w-lg mx-auto font-mono text-sm">
            Hands-on experience building production-grade systems in two different industries.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, transparent, #5692A9 15%, #5692A9 85%, transparent)' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                {/* Card */}
                <div className="flex-1 w-full lg:w-auto">
                  <div
                    className="glass-card rounded-2xl p-7 hover:scale-[1.01] transition-transform duration-300"
                    style={{ boxShadow: `0 0 30px ${exp.glowColor}20` }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 0 50px ${exp.glowColor}40`)}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = `0 0 30px ${exp.glowColor}20`)}
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between flex-wrap gap-3 mb-5">
                      <div>
                        <span
                          className="inline-block px-3 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider mb-3"
                          style={{ background: `${exp.color}22`, border: `1px solid ${exp.color}55`, color: exp.color }}
                        >
                          {exp.type}
                        </span>
                        <h3
                          className="text-xl font-sans font-bold text-white"
                          style={{ textShadow: `0 0 15px ${exp.glowColor}` }}
                        >
                          {exp.company}
                        </h3>
                        <p className="text-space-light font-semibold mt-1">{exp.role}</p>
                      </div>
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `linear-gradient(135deg, ${exp.color}33, ${exp.color}11)`, border: `1px solid ${exp.color}44` }}
                      >
                        <FiBriefcase size={20} style={{ color: exp.color }} />
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap gap-4 text-space-pale/50 font-mono text-xs mb-5">
                      <span className="flex items-center gap-1.5"><FiCalendar size={12} />{exp.period}</span>
                      <span className="flex items-center gap-1.5"><FiMapPin size={12} />{exp.location}</span>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3 mb-5">
                      {exp.bullets.map((b, bi) => (
                        <li key={bi} className="flex gap-3 text-space-pale/70 text-sm leading-relaxed">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: exp.color, boxShadow: `0 0 6px ${exp.color}` }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span
                          key={tag}
                          className="skill-tag"
                          style={{ borderColor: `${exp.color}44`, color: exp.color }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-5 h-5 rounded-full border-2 border-space-blue z-10"
                    style={{
                      background: '#0A1F3A',
                      boxShadow: `0 0 15px ${exp.glowColor}, 0 0 30px ${exp.glowColor}60`,
                    }}
                  />
                </div>

                {/* Year badge (opposite side) */}
                <div className="hidden lg:flex flex-1 justify-center">
                  <div
                    className="glass-card rounded-xl px-5 py-3 text-center"
                    style={{ boxShadow: `0 0 20px ${exp.glowColor}20` }}
                  >
                    <p className="font-mono text-xs text-space-blue mb-1">{exp.type}</p>
                    <p className="font-sans font-bold text-white text-sm">{exp.period.split('–')[0].trim()}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
