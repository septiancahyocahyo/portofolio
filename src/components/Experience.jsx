import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    company: 'Ministry of Manpower (Kemnaker)',
    role: 'Web Developer',
    period: 'Nov 2025 – May 2026',
    location: 'Jakarta, Indonesia',
    type: 'Government Sector',
    color: '#5692A9',
    glowColor: 'rgba(86,146,169,0.4)',
    bullets: [
      'Contributed to the development of 3 web applications for exposure management, risk management, and supervision & investigation processes.',
      'Developed a risk management system supporting 5-stage risk lifecycle processes, 4-level approval workflows, and 6 user roles using React, TypeScript, Zustand, and TanStack Query.',
      'Developed 16 application pages and integrated 11+ REST API endpoints with JWT authentication for an audit management system.',
      <span>Developed a company profile website using React and modular component architecture. <a href="https://itjen.kemnaker.go.id" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">itjen.kemnaker.go.id</a></span>,
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'JWT'],
  },
  {
    company: 'PT. Bank Syariah Indonesia',
    role: 'Web Developer',
    period: 'Sep 2024 – Mar 2025',
    location: 'Yogyakarta, Indonesia',
    type: 'Financial Sector',
    color: '#C774B2',
    glowColor: 'rgba(199,116,178,0.4)',
    bullets: [
      'Designed user interfaces and workflows for an Umrah management system using Figma.',
      'Implemented responsive dashboard interfaces using React and CoreUI, integrating 15+ REST API endpoints for transaction monitoring, approvals, and audit logs.',
      'Developed interactive analytics dashboards using Chart.js and managed application state with Redux and Jotai.',
    ],
    tags: ['React.js', 'CoreUI', 'Figma', 'Chart.js', 'Redux', 'Jotai'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #09090b 0%, #121215 30%, #09090b 100%)' }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-nebula-deepest/15 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-5xl">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.34, 1.56, 0.64, 1] }}
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

        {/* Timeline list */}
        <div className="space-y-16 border-l border-space-blue/10 pl-6 ml-4 lg:pl-10 lg:ml-8 relative">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative flex flex-col md:flex-row md:items-start gap-6"
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
            >
              {/* Dot */}
              <div 
                className="absolute -left-[31px] lg:-left-[47px] top-1.5 w-3 h-3 rounded-full border border-space-blue bg-space-deepest"
                style={{ boxShadow: '0 0 10px rgba(197, 168, 128, 0.4)' }}
              />

              {/* Left col: Date & Location */}
              <div className="w-full md:w-1/4 flex-shrink-0">
                <span className="font-mono text-xs text-space-blue uppercase tracking-widest">{exp.period}</span>
                <p className="text-space-pale/40 text-xs mt-1 font-light">{exp.location}</p>
              </div>

              {/* Right col: Details */}
              <div className="flex-1">
                <span className="text-[10px] font-mono text-space-blue/60 uppercase tracking-widest block mb-2">{exp.type}</span>
                <h3 className="text-2xl font-serif font-light text-white">{exp.company}</h3>
                <h4 className="text-base text-space-light font-medium mt-1 mb-4">{exp.role}</h4>
                
                {/* Bullets */}
                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-3 text-space-pale/70 text-sm leading-relaxed font-light">
                      <span className="mt-2 w-1 h-1 rounded-full bg-space-blue flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 font-mono text-[10px] text-space-light bg-space-medium/30 border border-space-blue/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
