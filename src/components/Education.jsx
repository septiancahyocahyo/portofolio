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
      style={{ background: 'linear-gradient(180deg, rgba(10,31,58,0.55) 0%, rgba(6,43,67,0.45) 50%, rgba(10,31,58,0.55) 100%)' }}
    >
      <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-nebula-dark/15 blur-[100px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-4xl">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag mb-3">&gt;_ Education</p>
          <h2 className="section-heading">
            Academic{' '}
            <span className="gradient-text">Background</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Education card */}
          <motion.div
            className="glass-card rounded-2xl p-8"
            style={{ boxShadow: '0 0 40px rgba(86,146,169,0.15)' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ boxShadow: '0 0 60px rgba(86,146,169,0.3)', y: -4 }}
          >
            {/* Top line */}
            <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, #5692A9, #9DCDDC, transparent)' }} />

            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #044568, #5692A9)', boxShadow: '0 0 20px rgba(86,146,169,0.4)' }}
              >
                <FiBook size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-white text-lg leading-snug">
                  Universitas Negeri Yogyakarta
                </h3>
                <p className="text-space-blue text-sm mt-1">Yogyakarta, Indonesia</p>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-space-pale/80 font-semibold">Bachelor of Engineering (B.Eng.)</p>
              <p className="text-space-light text-sm">Information Technology</p>
              <p className="text-space-pale/45 font-mono text-xs mt-1">Aug 2021 – Aug 2025</p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <AchievementBadge
                label="GPA"
                value="3.78 / 4.00"
                color="#9DCDDC"
                description="Cumulative Grade Point Average"
              />
              <AchievementBadge
                label="ProTEFL UNY"
                value="563 / 677"
                color="#C774B2"
                description="English Proficiency Test"
              />
            </div>
          </motion.div>

          {/* Organization card */}
          <motion.div
            className="glass-card-nebula rounded-2xl p-8"
            style={{ boxShadow: '0 0 40px rgba(123,52,126,0.15)' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ boxShadow: '0 0 60px rgba(199,116,178,0.25)', y: -4 }}
          >
            {/* Top line */}
            <div className="h-px mb-6" style={{ background: 'linear-gradient(90deg, #C774B2, #7B347E, transparent)' }} />

            <div className="flex items-start gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #420D4A, #7B347E)', boxShadow: '0 0 20px rgba(123,52,126,0.4)' }}
              >
                <FiAward size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-white text-sm leading-snug">
                  {org.name}
                </h3>
                <p className="text-nebula-pink text-sm mt-1">{org.role}</p>
                <p className="text-space-pale/45 font-mono text-xs mt-0.5">{org.period}</p>
              </div>
            </div>

            <ul className="space-y-3">
              {org.highlights.map((h, i) => (
                <li key={i} className="flex gap-3 text-space-pale/65 text-sm leading-relaxed">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#C774B2', boxShadow: '0 0 6px #C774B2' }}
                  />
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

function AchievementBadge({ label, value, color, description }) {
  return (
    <div
      className="flex items-center justify-between p-4 rounded-xl"
      style={{ background: `${color}12`, border: `1px solid ${color}30` }}
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-wider" style={{ color: `${color}99` }}>{label}</p>
        <p className="text-xs text-space-pale/50 mt-0.5">{description}</p>
      </div>
      <p
        className="text-2xl font-bold font-mono"
        style={{ color, textShadow: `0 0 15px ${color}80` }}
      >
        {value}
      </p>
    </div>
  );
}
