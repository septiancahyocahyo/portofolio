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
      style={{ background: 'linear-gradient(180deg, rgba(10,31,58,0.55) 0%, rgba(4,69,104,0.45) 50%, rgba(10,31,58,0.55) 100%)' }}
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
                    <HoloSkillCard key={skill.name} skill={skill} cat={cat} ci={ci} si={si} Icon={Icon} />
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

function HoloSkillCard({ skill, cat, ci, si, Icon }) {
  const cardRef = useRef(null);
  const shineRef = useRef(null);

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotY =  (x - 0.5) * 22;
    const rotX = -(y - 0.5) * 18;
    el.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.1) translateZ(10px)`;
    el.style.transition = 'transform 0.05s linear';
    el.style.boxShadow = `0 0 28px ${skill.color}77, 0 0 60px ${skill.color}33`;
    el.style.borderColor = `${skill.color}90`;
    if (shineRef.current) {
      shineRef.current.style.background =
        `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.18) 0%, transparent 60%)`;
    }
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = '';
    el.style.transition = 'transform 0.6s cubic-bezier(.23,1,.32,1), box-shadow 0.4s ease, border-color 0.3s ease';
    el.style.boxShadow = '';
    el.style.borderColor = '';
    if (shineRef.current) shineRef.current.style.background = 'none';
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative flex flex-col items-center justify-center gap-2 p-4 rounded-2xl cursor-default overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${skill.color}18 0%, ${cat.color}10 100%)`,
        border: `1px solid ${skill.color}30`,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: ci * 0.08 + si * 0.06 }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 50% 40%, ${skill.color}22 0%, transparent 70%)` }}
      />
      {/* Mouse-tracking shine */}
      <div ref={shineRef} className="absolute inset-0 rounded-2xl pointer-events-none" />

      {Icon
        ? <Icon size={30} style={{ color: skill.color, filter: `drop-shadow(0 0 8px ${skill.color}cc)` }} />
        : <span style={{ fontSize: 22, color: skill.color, filter: `drop-shadow(0 0 8px ${skill.color}cc)`, fontWeight: 800, lineHeight: 1 }}>
            {skill.name.slice(0, 2)}
          </span>
      }
      <span className="font-mono text-xs font-semibold text-center leading-tight" style={{ color: '#e2e8f0' }}>
        {skill.name}
      </span>
    </motion.div>
  );
}

