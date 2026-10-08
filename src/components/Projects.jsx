import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    index: '01',
    name: 'SINERGI',
    subtitle: 'Government Risk Management System',
    sector: 'Government · Kemnaker · Deployed',
    description:
      'A comprehensive end-to-end risk lifecycle management system built for Kementerian Ketenagakerjaan. Features a complete workflow from Risk Identification to Monitoring, multi-role access control, and dynamic data visualization dashboards.',
    features: [
      '5-stage risk lifecycle workflow with 4-level approval chain',
      '6 distinct user roles and access control matrix',
      'Dynamic data visualization and reporting dashboards',
      'Real-time monitoring & automated alerts',
    ],
    tags: ['TypeScript', 'React.js', 'Zustand', 'TanStack Query', 'Tailwind CSS'],
    href: 'https://itjen.kemnaker.go.id/sinergi',
  },
  {
    index: '02',
    name: 'ETLHP',
    subtitle: 'Audit Management System',
    sector: 'Government · Kemnaker · Deployed',
    description:
      'A full-featured audit management platform built with PHP MVC architecture. Features a unified frontend design system, REST API integrations, and interactive Chart.js dashboards for audit analytics and reporting.',
    features: [
      '16 application pages with consistent design system',
      '11+ REST API endpoints with JWT authentication',
      'Interactive Chart.js analytics dashboards',
      'Role-based access and protected routes',
    ],
    tags: ['PHP', 'MVC', 'Chart.js', 'REST API', 'JWT'],
    href: 'https://itjen.kemnaker.go.id/sistem-pengawasan',
  },
  {
    index: '03',
    name: 'Itjen Kemnaker Portal',
    subtitle: 'Company Profile & Content Management System',
    sector: 'Government · Kemnaker · Deployed',
    description:
      'A responsive company profile website for the Inspectorate General of the Ministry of Manpower. Features public-facing pages (Home, News, Profile, Publications, Regulations) and a full admin CMS.',
    features: [
      'Public pages: Home, News, Profile, Publications',
      'Admin CMS with protected routing',
      'REST API integration and optimized load performance',
      'Fully responsive across all devices',
    ],
    tags: ['React.js', 'REST API', 'Tailwind CSS', 'CMS'],
    href: 'https://itjen.kemnaker.go.id',
  },
  {
    index: '04',
    name: 'Umrah Dashboard',
    subtitle: 'Financial Data Visualization Platform',
    sector: 'Banking · PT Bank Syariah Indonesia · Deployed',
    description:
      'A pixel-perfect Umrah financial dashboard for PT. Bank Syariah Indonesia. Translated high-fidelity Figma designs into interactive React components with live backend data integration.',
    features: [
      'Pixel-perfect Figma-to-code translation',
      'Real-time financial charts via Chart.js',
      'Integration with 15+ REST API endpoints',
      'Data tables optimized for non-technical users',
    ],
    tags: ['React.js', 'CoreUI', 'Figma', 'Chart.js', 'RESTful API'],
    href: null,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="projects"
      className="py-28 px-6"
      style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="mb-20" {...fadeUp(0)}>
          <span className="section-label">Featured Projects</span>
          <h2 className="section-title">
            Things I've{' '}
            <span style={{ color: '#a0a0a0', fontStyle: 'italic', fontWeight: 300 }}>Built</span>
          </h2>
          <div className="section-divider" />
          <p
            className="font-sans mt-4"
            style={{ fontSize: '13px', color: '#bebebeff', fontWeight: 300, maxWidth: '440px' }}
          >
            Production-deployed applications built during internships across government and financial sectors.
          </p>
        </motion.div>

        {/* Project accordion list */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          {projects.map((project, i) => {
            const isOpen = expanded === project.index;
            return (
              <motion.div
                key={project.index}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                {...fadeUp(i * 0.07)}
              >
                {/* Row header — clickable */}
                <button
                  onClick={() => setExpanded(isOpen ? null : project.index)}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '2rem 0',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', flex: 1 }}>
                    {/* Index */}
                    <span
                      className="font-sans"
                      style={{ fontSize: '10px', letterSpacing: '0.15em', color: '#7c7c7cff', flexShrink: 0 }}
                    >
                      {project.index}
                    </span>

                    {/* Name + subtitle */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', flexWrap: 'wrap', marginBottom: '4px' }}>
                        <h3
                          className="font-serif"
                          style={{
                            fontSize: 'clamp(1.25rem, 3.5vw, 2rem)',
                            fontWeight: 400,
                            color: isOpen ? '#ffffff' : '#c0c0c0',
                            lineHeight: 1.2,
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {project.name}
                        </h3>
                        {project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="font-sans inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                            style={{
                              fontSize: '11px',
                              letterSpacing: '0.12em',
                              textTransform: 'uppercase',
                              fontStyle: 'italic',
                              color: '#ffffffff',
                            }}
                          >
                            <FiExternalLink size={11} />
                            {project.href.replace('https://', '')}
                          </a>
                        )}
                      </div>
                      <p
                        className="font-sans"
                        style={{ fontSize: '11px', color: '#b3b3b3ff', fontWeight: 300 }}
                      >
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Sector badge + expand indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                    <span
                      className="font-sans hidden md:block"
                      style={{ fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7c7c7cff' }}
                    >
                      {project.sector}
                    </span>
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        flexShrink: 0,
                      }}
                    >
                      <div style={{ width: '12px', height: '1px', background: 'rgba(255,255,255,0.3)' }} />
                      <div
                        style={{
                          width: '1px',
                          height: '12px',
                          background: 'rgba(255,255,255,0.3)',
                          position: 'absolute',
                          transition: 'transform 0.3s ease, opacity 0.3s ease',
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0)',
                          opacity: isOpen ? 0 : 1,
                        }}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        style={{
                          paddingBottom: '2.5rem',
                          paddingLeft: '3.5rem',
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '2.5rem',
                        }}
                        className="grid-cols-1 md:grid-cols-2"
                      >
                        {/* Description */}
                        <div>
                          <p
                            className="font-sans mb-5"
                            style={{ fontSize: '13px', color: '#787878', lineHeight: 1.85, fontWeight: 300 }}
                          >
                            {project.description}
                          </p>

                          {/* Tags */}
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.25rem' }}>
                            {project.tags.map(tag => (
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

                          {project.href && (
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noreferrer"
                              className="font-sans inline-flex items-center gap-1.5 hover:text-white transition-colors duration-200"
                              style={{ fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ffffffff' }}
                            >
                              <FiExternalLink size={10} />
                              {project.href.replace('https://', '')}
                            </a>
                          )}
                        </div>

                        {/* Features list */}
                        <div>
                          <p
                            className="font-sans"
                            style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7c7c7cff', marginBottom: '1rem' }}
                          >
                            Key Features
                          </p>
                          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {project.features.map((f, fi) => (
                              <li
                                key={fi}
                                style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
                              >
                                <span style={{ marginTop: '9px', width: '4px', height: '1px', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
                                <span
                                  className="font-sans"
                                  style={{ fontSize: '12px', color: '#666666', lineHeight: 1.7, fontWeight: 300 }}
                                >
                                  {f}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
