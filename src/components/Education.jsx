import { motion } from 'framer-motion';

const education = {
  institution: 'Universitas Negeri Yogyakarta',
  location: 'Yogyakarta, Indonesia',
  degree: 'Bachelor of Engineering (B.Eng.)',
  major: 'Information Technology',
  period: 'Aug 2021 – Aug 2025',
  achievements: [
    { label: 'GPA', value: '3.78', suffix: '/ 4.00', desc: 'Cumulative Grade Point Average' },
    { label: 'ProTEFL', value: '563', suffix: '/ 677', desc: 'English Proficiency Test Score' },
  ],
};

const org = {
  name: 'Himpunan Mahasiswa Elektronika dan Informatika',
  sub: 'FT UNY — Student Association',
  role: 'Public Relations',
  period: 'Mar 2023 – Dec 2023',
  highlights: [
    'Managed strategic collaborations with student organizations at inter-faculty and inter-university levels.',
    'Spearheaded planning and execution of multi-city industrial visits across Jakarta and Bandung.',
    'Secretary for "Bureaucracy Dialogue" — facilitated high-level discussions between students and department leadership.',
  ],
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Education() {
  return (
    <section
      id="education"
      className="py-28 px-6"
      style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="mb-20" {...fadeUp(0)}>
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic{' '}
            <span style={{ color: '#a0a0a0', fontStyle: 'italic', fontWeight: 300 }}>Background</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Education column ── */}
          <motion.div {...fadeUp(0.1)}>
            <span className="section-label" style={{ marginBottom: '1.75rem', display: 'block' }}>
              Academic Qualification
            </span>

            {/* Institution */}
            <h3
              className="font-serif mb-1"
              style={{ fontSize: 'clamp(1.35rem, 3vw, 1.9rem)', fontWeight: 400, color: '#ffffff', lineHeight: 1.2 }}
            >
              {education.institution}
            </h3>
            <p
              className="font-sans mb-6"
              style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b3b3b3ff' }}
            >
              {education.location}
            </p>

            {/* Degree info */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.06)',
                background: '#0a0a0a',
                marginBottom: '1.5rem',
              }}
            >
              <p
                className="font-sans mb-1"
                style={{ fontSize: '13px', color: '#a0a0a0', fontWeight: 400 }}
              >
                {education.degree}
              </p>
              <p
                className="font-sans"
                style={{ fontSize: '12px', color: '#bebebeff', fontWeight: 300 }}
              >
                {education.major}
              </p>
              <p
                className="font-sans mt-3"
                style={{ fontSize: '10px', letterSpacing: '0.1em', color: '#7c7c7cff' }}
              >
                {education.period}
              </p>
            </div>

            {/* Achievement blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
              {education.achievements.map((ach) => (
                <div
                  key={ach.label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '1rem 1.5rem',
                    border: '1px solid rgba(255,255,255,0.06)',
                    background: '#0a0a0a',
                    marginBottom: '6px',
                  }}
                >
                  <div>
                    <p
                      className="font-sans"
                      style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7c7c7cff', marginBottom: '3px' }}
                    >
                      {ach.label}
                    </p>
                    <p
                      className="font-sans"
                      style={{ fontSize: '11px', color: '#b3b3b3ff', fontWeight: 300 }}
                    >
                      {ach.desc}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span
                      className="font-serif"
                      style={{ fontSize: '2rem', fontWeight: 300, color: '#ffffff', letterSpacing: '-0.02em' }}
                    >
                      {ach.value}
                    </span>
                    <span
                      className="font-sans"
                      style={{ fontSize: '11px', color: '#b3b3b3ff', marginLeft: '4px' }}
                    >
                      {ach.suffix}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Leadership column ── */}
          <motion.div {...fadeUp(0.2)}>
            <span className="section-label" style={{ marginBottom: '1.75rem', display: 'block' }}>
              Leadership Experience
            </span>

            {/* Org name */}
            <h3
              className="font-serif mb-1"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: 400, color: '#ffffff', lineHeight: 1.35 }}
            >
              {org.name}
            </h3>
            <p
              className="font-sans mb-6"
              style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#b3b3b3ff' }}
            >
              {org.sub}
            </p>

            {/* Role info box */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                border: '1px solid rgba(255,255,255,0.06)',
                background: '#0a0a0a',
                marginBottom: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <div>
                <p
                  className="font-sans mb-1"
                  style={{ fontSize: '13px', color: '#a0a0a0', fontWeight: 400 }}
                >
                  {org.role}
                </p>
                <p
                  className="font-sans"
                  style={{ fontSize: '10px', color: '#7c7c7cff', letterSpacing: '0.08em' }}
                >
                  {org.period}
                </p>
              </div>
            </div>

            {/* Highlights */}
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {org.highlights.map((h, i) => (
                <li
                  key={i}
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
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
