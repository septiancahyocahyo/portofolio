import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiShield, FiBarChart2, FiExternalLink } from 'react-icons/fi';

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
    href: null,
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
    href: null,
  },
  {
    name: 'Itjen Kemnaker Portal',
    subtitle: 'Company Profile & CMS',
    description:
      'A responsive Company Profile website for the Inspectorate General of the Ministry of Manpower (Itjen Kemnaker). Features public-facing pages (Home, News, Profile, Publications, Regulations) and a full Content Management System for administrators.',
    icon: FiCode,
    accentColor: '#5692A9',
    glowColor: 'rgba(86,146,169,0.3)',
    gradient: 'linear-gradient(135deg, rgba(6,43,67,0.7), rgba(10,31,58,0.8))',
    features: [
      'Public pages: Home, News, Profile',
      'Publications & Regulations pages',
      'Admin CMS with protected routing',
      'REST API integration & optimized performance',
    ],
    tags: ['React.js', 'REST API', 'Tailwind CSS', 'CMS', 'Protected Routing'],
    badge: 'Government · Deployed',
    href: 'https://itjen.kemnaker.go.id',
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
    href: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-28 px-6 lg:px-40 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #09090b 0%, #121215 40%, #09090b 100%)' }}
    >
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-nebula-deepest/20 blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -40, clipPath: 'inset(100% 0 0 0)' }}
          whileInView={{ opacity: 1, y: 0, clipPath: 'inset(0% 0 0 0)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Projects list */}
        <div className="flex flex-col mt-12 border-t border-space-blue/10">
          {projects.map((project, i) => (
            <ProjectRow key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }) {
  return (
    <motion.div
      className="py-12 border-b border-space-blue/10 flex flex-col lg:flex-row gap-8 items-start justify-between group"
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
        rotateX: 8,
        scale: 0.97,
      }}
      whileInView={{ opacity: 1, x: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
    >
      {/* Left Column: Number and Name */}
      <div className="flex-1 min-w-[280px]">
        <div className="font-mono text-[10px] text-space-blue/50 uppercase tracking-widest mb-3">
          0{index + 1} &mdash; {project.badge}
        </div>
        <h3 className="text-3xl md:text-4xl font-serif font-light text-white group-hover:text-space-light transition-colors duration-300">
          {project.name}
        </h3>
        <p className="text-space-pale/50 text-sm mt-2 font-light">{project.subtitle}</p>
      </div>

      {/* Right Column: Details */}
      <div className="flex-[1.5] max-w-2xl w-full">
        <p className="text-space-pale/75 text-base leading-relaxed mb-6 font-light">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 font-mono text-[10px] text-space-light bg-space-medium/30 border border-space-blue/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Visit link */}
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-space-blue hover:text-white transition-colors duration-200"
          >
            <FiExternalLink size={13} />
            {project.href.replace('https://', '')}
          </a>
        )}
      </div>
    </motion.div>
  );
}
