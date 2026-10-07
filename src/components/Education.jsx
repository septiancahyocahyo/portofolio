import { motion } from 'framer-motion';
import { FiAward, FiBook } from 'react-icons/fi';

const org = {
  name: 'Himpunan Mahasiswa Elektronika dan Informatika FT UNY',
  role: 'Public Relations',
  period: 'Mar 2023 – Dec 2023',
  highlights: [
    'Managed strategic collaborations with student organizations at inter-faculty and inter-university levels.',
    'Spearheaded planning and execution of multi-city industrial visits across Jakarta and Bandung.',
    'Secretary for "Bureaucracy Dialogue" — facilitated high-level discussions between students and department leadership.',
  ],
};

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #09090b 0%, #121215 50%, #09090b 100%)' }}
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-nebula-dark/15 blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-4xl">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <p className="section-tag mb-3">&gt;_ Education</p>
          <h2 className="section-heading">
            Academic{' '}
            <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-12">

          {/* Education column */}
          <motion.div
            className="lg:border-r border-space-blue/10 lg:pr-16"
            initial={{ opacity: 0, x: -70, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FiBook size={16} className="text-space-blue" />
              <h3 className="font-serif font-light text-white text-xl">Academic Qualification</h3>
            </div>

            <div className="mb-6">
              <h4 className="text-2xl font-serif font-light text-white leading-tight">Universitas Negeri Yogyakarta</h4>
              <p className="text-space-blue text-sm mt-1">Yogyakarta, Indonesia</p>
              <p className="text-space-pale/80 font-medium mt-3">Bachelor of Engineering (B.Eng.)</p>
              <p className="text-space-light text-sm">Information Technology &bull; Aug 2021 – Aug 2025</p>
            </div>

            {/* Achievements */}
            <div className="space-y-4 mt-8">
              <AchievementBadge
                label="GPA"
                value="3.78/4.00"
                color="#e2d1bc"
                description="Cumulative Grade Point Average"
              />
              <AchievementBadge
                label="ProTEFL Score"
                value="563/677"
                color="#b39274"
                description="English Proficiency Test"
              />
            </div>
          </motion.div>

          {/* Organization column */}
          <motion.div
            initial={{ opacity: 0, x: 70, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FiAward size={16} className="text-space-blue" />
              <h3 className="font-serif font-light text-white text-xl">Leadership Experience</h3>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-serif font-light text-white leading-snug">
                {org.name}
              </h4>
              <p className="text-space-blue text-sm mt-1">{org.role}</p>
              <p className="text-space-pale/45 font-mono text-xs mt-0.5">{org.period}</p>
            </div>

            <ul className="space-y-3">
              {org.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-space-pale/65 text-sm leading-relaxed font-light">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-space-blue flex-shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AchievementBadge({ label, value, description }) {
  return (
    <div
      className="flex items-center justify-between p-4 border border-space-blue/10 bg-space-medium/10"
    >
      <div>
        <p className="font-mono text-[9px] uppercase tracking-wider text-space-blue/70">{label}</p>
        <p className="text-[11px] text-space-pale/50 mt-0.5 font-light">{description}</p>
      </div>
      <p
        className="text-xl font-serif font-light text-white"
      >
        {value}
      </p>
    </div>
  );
}
