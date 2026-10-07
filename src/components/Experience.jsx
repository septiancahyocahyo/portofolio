import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Ministry of Manpower',
    companyFull: 'Kementerian Ketenagakerjaan RI',
    role: 'Web Developer — Intern',
    period: 'Nov 2025 – May 2026',
    location: 'Jakarta, Indonesia',
    type: 'Government Sector',
    bullets: [
      'Contributed to the development of 3 web applications for exposure management, risk management, and supervision & investigation processes.',
      'Developed a risk management system supporting 5-stage risk lifecycle processes, 4-level approval workflows, and 6 user roles using React, TypeScript, Zustand, and TanStack Query.',
      'Developed 16 application pages and integrated 11+ REST API endpoints with JWT authentication for an audit management system.',
      <span key="kemnaker-link">Developed a company profile website using React and modular component architecture — <a href="https://itjen.kemnaker.go.id" target="_blank" rel="noopener noreferrer" style={{ color: '#a0a0a0', textDecoration: 'underline', textUnderlineOffset: '3px' }}>itjen.kemnaker.go.id</a></span>,
    ],
    tags: ['React.js', 'TypeScript', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'JWT'],
  },
  {
    company: 'PT. Bank Syariah Indonesia',
    companyFull: 'BSI — Financial Technology Division',
    role: 'Web Developer — Intern',
    period: 'Sep 2024 – Mar 2025',
    location: 'Yogyakarta, Indonesia',
    type: 'Financial Sector',
    bullets: [
      'Designed user interfaces and workflows for an Umrah management system using Figma.',
      'Implemented responsive dashboard interfaces using React and CoreUI, integrating 15+ REST API endpoints for transaction monitoring, approvals, and audit logs.',
      'Developed interactive analytics dashboards using Chart.js and managed application state with Redux and Jotai.',
    ],
    tags: ['React.js', 'CoreUI', 'Figma', 'Chart.js', 'Redux', 'Jotai'],
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Experience() {
  return (
    <section
      id="experience"
      className="pb-28 px-6"
      style={{ background: '#0a0a0a',  }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="mb-10" {...fadeUp(0)}>
          <span className="section-label">Work Experience</span>
          <h2 className="section-title">
            My Journey<br />
            <span style={{ color: '#a0a0a0', fontStyle: 'italic', fontWeight: 300 }}>So Far</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Timeline entries */}
        <div className="relative">
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '0',
              top: '8px',
              bottom: '8px',
              width: '1px',
              background: 'rgba(255,255,255,0.06)',
            }}
          />

          <div style={{ paddingLeft: '2.5rem' }}>
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                style={{
                  position: 'relative',
                  marginBottom: i < experiences.length - 1 ? '5rem' : 0,
                }}
                {...fadeUp(i * 0.15)}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: 'absolute',
                    left: '-2.6rem',
                    top: '7px',
                    width: '7px',
                    height: '7px',
                    background: '#0a0a0a',
                    border: '1px solid rgba(255,255,255,0.25)',
                  }}
                />

                {/* Top row: period / location / sector */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px 20px',
                    marginBottom: '1.25rem',
                    alignItems: 'center',
                  }}
                >
                  <span
                    className="font-sans"
                    style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#bebebeff' }}
                  >
                    {exp.period}
                  </span>
                  <span style={{ width: '1px', height: '10px', background: 'rgba(255,255,255,0.1)' }} />
                  <span
                    className="font-sans"
                    style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c7c7cff' }}
                  >
                    {exp.location}
                  </span>
                  <span style={{ width: '1px', height: '10px', background: 'rgba(255,255,255,0.1)' }} />
                  <span
                    className="font-sans"
                    style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c7c7cff' }}
                  >
                    {exp.type}
                  </span>
                </div>

                {/* Company heading */}
                <h3
                  className="font-serif"
                  style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2rem)', fontWeight: 400, color: '#ffffff', lineHeight: 1.2, marginBottom: '4px' }}
                >
                  {exp.company}
                </h3>
                <p
                  className="font-sans"
                  style={{ fontSize: '11px', color: '#b3b3b3ff', fontWeight: 300, letterSpacing: '0.04em', marginBottom: '4px' }}
                >
                  {exp.companyFull}
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: '12px', color: '#787878', fontWeight: 400, letterSpacing: '0.06em', marginBottom: '1.5rem' }}
                >
                  {exp.role}
                </p>

                {/* Bullet points */}
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '1.5rem' }}>
                  {exp.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          marginTop: '9px',
                          width: '4px',
                          height: '1px',
                          background: 'rgba(255,255,255,0.15)',
                        }}
                      />
                      <span
                        className="font-sans"
                        style={{ fontSize: '13px', color: '#787878', lineHeight: 1.85, fontWeight: 300 }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {exp.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-sans"
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#b3b3b3ff',
                        border: '1px solid rgba(255,255,255,0.07)',
                        padding: '4px 10px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
