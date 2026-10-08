import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiMaximize2, FiChevronLeft, FiChevronRight, FiX, FiImage } from 'react-icons/fi';

import sinergi1 from '../image/sinergi1.png';
import sinergi2_1 from '../image/sinergi2.1.png';
import sinergi2_2 from '../image/sinergi2.2.png';
import sinergi3 from '../image/sinergi3.png';
import sinergi4 from '../image/sinergi4.png';
import sinergi5 from '../image/sinergi5.png';
import itjen1 from '../image/itjen1.png';
import itjen2 from '../image/itjen2.png';
import itjen3 from '../image/itjen3.png';
import itjen4 from '../image/itjen4.png';
import itjen5 from '../image/itjen5.png';
import itjen6 from '../image/itjen6.png';

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
    images: [
      { src: sinergi1, name: 'sinergi1.png', label: 'Login' },
      { src: sinergi2_1, name: 'sinergi2.1.png', label: 'Dashboard' },
      { src: sinergi2_2, name: 'sinergi2.2.png', label: 'Dashboard' },
      { src: sinergi3, name: 'sinergi3.png', label: 'Notification' },
      { src: sinergi4, name: 'sinergi4.png', label: 'Kegiatan' },
      { src: sinergi5, name: 'sinergi5.png', label: 'Credits' },
    ],
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
    images: [],
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
    images: [
      { src: itjen1, name: 'itjen1.png', label: 'Home' },
      { src: itjen2, name: 'itjen2.png', label: 'News' },
      { src: itjen3, name: 'itjen3.png', label: 'Profile' },
      { src: itjen4, name: 'itjen4.png', label: 'Regulations' },
      { src: itjen5, name: 'itjen5.png', label: 'Admin' },
      { src: itjen6, name: 'itjen6.png', label: 'Admin' },
    ],
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
    images: [],
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
  const [lightbox, setLightbox] = useState(null); // { images: [], index: number, projectName: string }

  const handleNextImage = useCallback(() => {
    if (!lightbox) return;
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }));
  }, [lightbox]);

  const handlePrevImage = useCallback(() => {
    if (!lightbox) return;
    setLightbox((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }));
  }, [lightbox]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, handleNextImage, handlePrevImage]);

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
            const hasImages = project.images && project.images.length > 0;

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
                        {hasImages && (
                          <span
                            className="font-sans inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full"
                          >
                            <FiImage size={10} />
                            {project.images.length} Screenshots
                          </span>
                        )}
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
                      <div className="pb-10 pl-0 md:pl-14 space-y-8">
                        {/* Description & Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                              {project.tags.map((tag) => (
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

                        {/* Screenshots Gallery Section */}
                        {hasImages && (
                          <div className="pt-4 border-t border-white/5">
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <FiImage className="text-gray-400" size={14} />
                                <span
                                  className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 font-medium"
                                >
                                  Project Screenshots
                                </span>
                              </div>
                              <span className="font-sans text-[10px] text-gray-500 tracking-wider">
                                Klik gambar untuk memperbesar
                              </span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {project.images.map((img, imgIdx) => (
                                <motion.button
                                  key={imgIdx}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  onClick={() =>
                                    setLightbox({
                                      images: project.images,
                                      index: imgIdx,
                                      projectName: project.name,
                                    })
                                  }
                                  className="group relative rounded-lg overflow-hidden border border-white/10 bg-neutral-900 aspect-[16/10] text-left focus:outline-none transition-all duration-300 hover:border-white/30 hover:shadow-xl hover:shadow-white/5"
                                >
                                  <img
                                    src={img.src}
                                    alt={`${project.name} - ${img.label}`}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                                  
                                  {/* Zoom Overlay Icon */}
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform">
                                      <FiMaximize2 size={14} />
                                    </div>
                                  </div>

                                  {/* Bottom Label Badge */}
                                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                                    <span className="font-sans text-[11px] font-medium tracking-wide drop-shadow-md bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10">
                                      {img.label}
                                    </span>
                                  </div>
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-between p-4 md:p-8"
          >
            {/* Top Bar */}
            <div className="w-full max-w-6xl flex items-center justify-between text-white border-b border-white/10 pb-4">
              <div>
                <span className="font-sans text-xs tracking-widest uppercase text-gray-400">
                  {lightbox.projectName}
                </span>
                <h4 className="font-sans text-sm font-medium text-white">
                  {lightbox.images[lightbox.index].label}
                  {/* ({lightbox.images[lightbox.index].name}) */}
                </h4>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-sans text-xs tracking-wider text-gray-400">
                  {lightbox.index + 1} / {lightbox.images.length}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightbox(null);
                  }}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <FiX size={18} />
                </button>
              </div>
            </div>

            {/* Main Image Container */}
            <div
              className="relative flex-1 w-full max-w-6xl flex items-center justify-center py-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-2 md:left-4 z-10 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all shadow-2xl"
                aria-label="Previous image"
              >
                <FiChevronLeft size={22} />
              </button>

              {/* Image */}
              <motion.img
                key={lightbox.index}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                src={lightbox.images[lightbox.index].src}
                alt={lightbox.images[lightbox.index].label}
                className="max-h-[75vh] max-w-full object-contain rounded-lg border border-white/10 shadow-2xl"
              />

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-2 md:right-4 z-10 p-3 rounded-full bg-black/60 border border-white/20 text-white hover:bg-white/20 hover:scale-110 transition-all shadow-2xl"
                aria-label="Next image"
              >
                <FiChevronRight size={22} />
              </button>
            </div>

            {/* Bottom Thumbnail Bar */}
            <div
              className="w-full max-w-4xl flex items-center justify-center gap-2 overflow-x-auto pt-2"
              onClick={(e) => e.stopPropagation()}
            >
              {lightbox.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightbox((prev) => ({ ...prev, index: idx }))}
                  className={`relative rounded overflow-hidden border transition-all h-12 w-20 flex-shrink-0 ${
                    idx === lightbox.index
                      ? 'border-white ring-2 ring-white/50 scale-105 opacity-100'
                      : 'border-white/20 opacity-50 hover:opacity-80'
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

