import { motion } from 'framer-motion';
import { FiCode, FiShield, FiBarChart2 } from 'react-icons/fi';

const projects = [
  {
    name: 'SINERGI',
    subtitle: 'Government Risk Management System',
    description:
      'A comprehensive end-to-end risk lifecycle management system built for Kementerian Ketenagakerjaan. Features a full workflow from Risk Identification to Monitoring, multi-role access control, and dynamic data visualization dashboards.',
    icon: FiShield,
    accentColor: '#9DCDDC',
    glowColor: 'rgba(157,205,220,0.3)',
    gradient: 'linear-gradient(135deg, rgba(4,69,104,0.6), rgba(10,31,58,0.8))',
    features: [
      'End-to-end risk lifecycle workflow',
      'Multi-role access control system',
      'Dynamic data visualization dashboards',
      'Real-time monitoring & alerts',
    ],
    tags: ['TypeScript', 'React.js', 'Zustand', 'TanStack Query', 'Tailwind CSS'],
    badge: 'Government · Deployed',
  },
  {
    name: 'ETLHP',
    subtitle: 'Audit Management System',
    description:
      'A full-featured audit management platform built with PHP MVC architecture. Features a custom Glassmorphism design system, unified frontend architecture, REST API integrations, and interactive Chart.js dashboards for audit analytics.',
    icon: FiBarChart2,
    accentColor: '#C774B2',
    glowColor: 'rgba(199,116,178,0.3)',
    gradient: 'linear-gradient(135deg, rgba(33,5,53,0.6), rgba(10,31,58,0.8))',
    features: [
      'Custom Glassmorphism design system',
      'Interactive Chart.js dashboards',
      'REST API integrations',
      'Unified frontend architecture',
    ],
    tags: ['PHP', 'MVC', 'Chart.js', 'Glassmorphism', 'REST API'],
    badge: 'Government · Deployed',
  },
  {
    name: 'Admin Dashboard',
    subtitle: 'Secure React Admin Panel',
    description:
      'A highly secure admin dashboard built with React.js featuring advanced JWT token management with in-memory access tokens and silent refresh mechanism. Implements cursor-based pagination and a modular component architecture for scalability.',
    icon: FiCode,
    accentColor: '#5692A9',
    glowColor: 'rgba(86,146,169,0.3)',
    gradient: 'linear-gradient(135deg, rgba(6,43,67,0.7), rgba(10,31,58,0.8))',
    features: [
      'JWT in-memory token + silent refresh',
      'Cursor-based pagination',
      'Modular component architecture',
      'Role-based access control',
    ],
    tags: ['React.js', 'JWT Auth', 'Tailwind CSS', 'REST API'],
    badge: 'Government · Deployed',
  },
  {
    name: 'Umrah Dashboard',
    subtitle: 'Financial Data Visualization',
    description:
      'A pixel-perfect Umrah financial dashboard for PT. Bank Syariah Indonesia. Translated high-fidelity Figma designs into interactive React components, integrating backend APIs for real-time financial metric rendering and intuitive data tables.',
    icon: FiBarChart2,
    accentColor: '#7B347E',
    glowColor: 'rgba(123,52,126,0.3)',
    gradient: 'linear-gradient(135deg, rgba(66,13,74,0.5), rgba(10,31,58,0.8))',
    features: [
      'Pixel-perfect Figma translation',
      'Real-time financial data charts',
      'Backend REST API integration',
      'Data tables for non-technical users',
    ],
    tags: ['React.js', 'CoreUI', 'Figma', 'Chart.js', 'RESTful API'],
    badge: 'Banking · Deployed',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0A1F3A 0%, #062B43 40%, #0A1F3A 100%)' }}
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-nebula-deepest/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag mb-3">&gt;_ Featured Projects</p>
          <h2 className="section-heading">
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p className="text-space-pale/50 mt-4 max-w-lg mx-auto font-mono text-sm">
            Production-deployed applications built during internships in government and financial sectors.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden cursor-default"
      style={{
        background: project.gradient,
        border: `1px solid ${project.accentColor}33`,
        boxShadow: `0 0 30px ${project.glowColor}`,
      }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        boxShadow: `0 0 60px ${project.glowColor}, 0 20px 60px rgba(0,0,0,0.4)`,
        y: -6,
      }}
    >
      {/* Top accent line */}
      <div
        className="h-px w-full"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
      />

      <div className="p-7">
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <span
              className="inline-block px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider mb-3"
              style={{ background: `${project.accentColor}18`, border: `1px solid ${project.accentColor}40`, color: project.accentColor }}
            >
              {project.badge}
            </span>
            <h3
              className="text-2xl font-sans font-bold text-white"
              style={{ textShadow: `0 0 20px ${project.glowColor}` }}
            >
              {project.name}
            </h3>
            <p className="text-space-pale/60 text-sm mt-1">{project.subtitle}</p>
          </div>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ml-3 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{
              background: `linear-gradient(135deg, ${project.accentColor}28, ${project.accentColor}10)`,
              border: `1px solid ${project.accentColor}44`,
              boxShadow: `0 0 20px ${project.glowColor}`,
            }}
          >
            <Icon size={22} style={{ color: project.accentColor }} />
          </div>
        </div>

        <p className="text-space-pale/65 text-sm leading-relaxed mb-6">{project.description}</p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {project.features.map((f, fi) => (
            <div key={fi} className="flex items-start gap-2 text-xs text-space-pale/60">
              <span
                className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: project.accentColor, boxShadow: `0 0 5px ${project.accentColor}` }}
              />
              {f}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg font-mono text-[11px] transition-all duration-200"
              style={{
                background: `${project.accentColor}14`,
                border: `1px solid ${project.accentColor}30`,
                color: project.accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom accent line on hover */}
      <div
        className="h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}, transparent)` }}
      />
    </motion.div>
  );
}
