import { useState } from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'JavaScript', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'HTML5 / CSS3', level: 'Advanced' },
      { name: 'PHP', level: 'Intermediate' },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Tailwind CSS', level: 'Advanced' },
      { name: 'TanStack Query', level: 'Intermediate' },
      { name: 'Zustand', level: 'Intermediate' },
      { name: 'Redux / Jotai', level: 'Intermediate' },
      { name: 'CoreUI', level: 'Intermediate' },
      { name: 'Chart.js', level: 'Intermediate' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Infrastructure',
    skills: [
      { name: 'Git', level: 'Advanced' },
      { name: 'REST API', level: 'Advanced' },
      { name: 'JWT Auth', level: 'Intermediate' },
      { name: 'MySQL', level: 'Intermediate' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    skills: [
      { name: 'Figma', level: 'Intermediate' },
      { name: 'Adobe Photoshop', level: 'Intermediate' },
      { name: 'Canva', level: 'Advanced' },
      { name: 'CorelDraw', level: 'Intermediate' },
    ],
  },
];

const softSkills = [
  'Problem Solving',
  'Cross-functional Collaboration',
  'Adaptability',
  'Fast Learner',
  'Attention to Detail',
  'Communication',
];

const LEVEL_WIDTH = { Advanced: '100%', Intermediate: '62%', Beginner: '35%' };
const LEVEL_COLOR = { Advanced: 'rgba(255,255,255,0.55)', Intermediate: 'rgba(255,255,255,0.3)', Beginner: 'rgba(255,255,255,0.15)' };

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');
  const activeCat = skillCategories.find(c => c.id === activeTab);

  return (
    <section
      id="skills"
      className="py-28 px-6"
      style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="mb-20" {...fadeUp(0)}>
          <span className="section-label">Technical Arsenal</span>
          <h2 className="section-title">
            Skills &amp;{' '}
            <span style={{ color: '#a0a0a0', fontStyle: 'italic', fontWeight: 300 }}>Expertise</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Tab navigation + skill list */}
          <motion.div {...fadeUp(0.1)}>

            {/* Tab buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '2px',
                marginBottom: '2.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                paddingBottom: '0',
              }}
            >
              {skillCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className="font-sans"
                  style={{
                    fontSize: '9px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    padding: '10px 14px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: activeTab === cat.id ? '#ffffff' : '#444444',
                    borderBottom: activeTab === cat.id ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent',
                    marginBottom: '-1px',
                    transition: 'color 0.2s ease',
                  }}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Skill list with level bars */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0' }}
            >
              {activeCat.skills.map((skill, si) => (
                <div
                  key={skill.name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                  }}
                >
                  <span
                    className="font-sans"
                    style={{ fontSize: '13px', color: '#a0a0a0', fontWeight: 300 }}
                  >
                    {skill.name}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Level bar */}
                    <div
                      style={{
                        width: '64px',
                        height: '1px',
                        background: 'rgba(255,255,255,0.07)',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <motion.div
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: 0,
                          height: '1px',
                          background: LEVEL_COLOR[skill.level],
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: LEVEL_WIDTH[skill.level] }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: si * 0.06 }}
                      />
                    </div>
                    <span
                      className="font-sans"
                      style={{ fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#333333', minWidth: '70px', textAlign: 'right' }}
                    >
                      {skill.level}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: All categories overview + soft skills */}
          <motion.div {...fadeUp(0.2)}>

            {/* All skills overview */}
            <div style={{ marginBottom: '3rem' }}>
              {skillCategories.map((cat, ci) => (
                <div
                  key={cat.id}
                  style={{
                    marginBottom: '1.75rem',
                    paddingBottom: '1.75rem',
                    borderBottom: ci < skillCategories.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                  }}
                >
                  <p
                    className="font-sans"
                    style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#333333', marginBottom: '10px' }}
                  >
                    {cat.title}
                  </p>
                  <p
                    className="font-sans"
                    style={{ fontSize: '13px', color: '#555555', fontWeight: 300, lineHeight: 2 }}
                  >
                    {cat.skills.map(s => s.name).join('  ·  ')}
                  </p>
                </div>
              ))}
            </div>

            {/* Soft skills */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
              <p
                className="font-sans"
                style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#333333', marginBottom: '1rem' }}
              >
                Core Attributes
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {softSkills.map(s => (
                  <span
                    key={s}
                    className="font-sans"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      color: '#555555',
                      border: '1px solid rgba(255,255,255,0.07)',
                      padding: '6px 14px',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
