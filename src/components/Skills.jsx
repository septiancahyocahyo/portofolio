import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript, SiTypescript, SiPhp, SiHtml5, SiCss,
  SiReact, SiTailwindcss, SiChartdotjs,
  SiMysql, SiGit, SiFigma, SiCanva, SiRedux,
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
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Jotai', icon: null, color: '#3178C6' },
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
      style={{ background: 'linear-gradient(180deg, #09090b 0%, #121215 50%, #09090b 100%)' }}
    >
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-nebula-dark/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-space-medium/20 blur-[90px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.75, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-tag mb-3">&gt;_ Technical Arsenal</p>
          <h2 className="section-heading">
            My{' '}
            <span className="gradient-text">Skills</span>
            {' '}& Expertise
          </h2>
        </motion.div>

        {/* Skill categories grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="border-b border-space-blue/15 pb-8"
              initial={{ opacity: 0, scale: 0.88, y: 30, filter: 'blur(6px)' }}
              whileInView={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: ci * 0.18 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <cat.icon size={15} style={{ color: cat.color }} />
                <h3 className="font-serif font-light text-white text-lg tracking-wide">{cat.title}</h3>
              </div>

              {/* Skills text list */}
              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 group cursor-default"
                  >
                    <span
                      className="w-1 h-1 rounded-full transition-transform duration-300 group-hover:scale-150"
                      style={{ background: skill.color || '#c5a880' }}
                    />
                    <span className="font-sans text-sm text-space-pale/80 hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft skills */}
        <motion.div
          className="border-t border-space-blue/10 pt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-serif font-light text-white text-xl mb-6">
            Core <span className="text-space-light">Attributes</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((s, i) => (
              <motion.span
                key={s}
                className="skill-tag"
                initial={{ opacity: 0, scale: 0.6, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
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

