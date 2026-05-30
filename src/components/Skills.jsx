import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiPhp, SiHtml5, SiCss,
  SiReact, SiTailwindcss, SiChartdotjs,
  SiMysql, SiGit, SiFigma, SiCanva,
} from 'react-icons/si';
import { FiDatabase, FiCode, FiLayers, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: FiCode,
    color: '#9DCDDC',
    glow: 'rgba(157,205,220,0.35)',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E44D26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    icon: FiLayers,
    color: '#C774B2',
    glow: 'rgba(199,116,178,0.35)',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Chart.js', icon: SiChartdotjs, color: '#FF6384' },
      { name: 'Zustand', icon: null, color: '#9DCDDC' },
      { name: 'TanStack Query', icon: null, color: '#FF4154' },
      { name: 'CoreUI', icon: null, color: '#5692A9' },
    ],
  },
  {
    title: 'Tools & Databases',
    icon: FiTool,
    color: '#5692A9',
    glow: 'rgba(86,146,169,0.35)',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'REST API', icon: FiDatabase, color: '#9DCDDC' },
      { name: 'JWT Auth', icon: null, color: '#5692A9' },
    ],
  },
  {
    title: 'Design Tools',
    icon: FiTool,
    color: '#7B347E',
    glow: 'rgba(123,52,126,0.35)',
    skills: [
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Photoshop', icon: null, color: '#31A8FF' },
      { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
      { name: 'CorelDraw', icon: null, color: '#C774B2' },
    ],
  },
];

const softSkills = [
  'Problem Solving', 'Cross-functional Collaboration',
  'Adaptability', 'Fast Learner', 'Attention to Detail', 'Communication',
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1F3A 0%, #044568 40%, #0A1F3A 100%)' }}
    >
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-nebula-dark/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-space-medium/20 blur-[90px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag mb-3">&gt;_ Technical Arsenal</p>
          <h2 className="section-heading">
            My{' '}
            <span className="gradient-text">Skills</span>
            {' '}&amp; Expertise
          </h2>
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="glass-card rounded-2xl p-7"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: ci * 0.1 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: `${cat.color}22`, border: `1px solid ${cat.color}44` }}
                >
                  <cat.icon size={16} style={{ color: cat.color }} />
                </div>
                <h3 className="font-sans font-semibold text-white text-sm">{cat.title}</h3>
              </div>

              {/* Skills card grid */}
              <div className="grid grid-cols-3 gap-3">
                {cat.skills.map((skill, si) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl cursor-default overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, ${skill.color}18 0%, ${cat.color}10 100%)`,
                        border: `1px solid ${skill.color}30`,
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: ci * 0.08 + si * 0.06 }}
                      whileHover={{
                        scale: 1.07,
                        boxShadow: `0 0 22px ${skill.color}55`,
                        borderColor: `${skill.color}70`,
                      }}
                    >
                      {/* Subtle radial glow behind icon */}
                      <div
                        className="absolute inset-0 rounded-2xl pointer-events-none"
                        style={{ background: `radial-gradient(ellipse at 50% 40%, ${skill.color}22 0%, transparent 70%)` }}
                      />
                      {Icon
                        ? <Icon size={28} style={{ color: skill.color, filter: `drop-shadow(0 0 6px ${skill.color}99)` }} />
                        : <span style={{ fontSize: 22, color: skill.color, filter: `drop-shadow(0 0 6px ${skill.color}99)`, fontWeight: 700 }}>
                            {skill.name.slice(0, 2)}
                          </span>
                      }
                      <span
                        className="font-mono text-xs font-semibold text-center leading-tight"
                        style={{ color: '#e2e8f0' }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          className="glass-card rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-sans font-semibold text-white mb-6">
            <span className="text-space-light">Soft</span> Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((s, i) => (
              <motion.span
                key={s}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                ✦ {s}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

