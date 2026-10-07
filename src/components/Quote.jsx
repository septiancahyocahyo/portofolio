import { motion } from 'framer-motion';

const quoteWords = [
  '“One',
  'life.',
  'Experience',
  'it',
  'fully.',
  'Fear',
  'no',
  'challenge.',
  'Regret',
  'no',
  'choice.”',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const lineVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const authorVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 1.1 },
  },
};

export default function Quote() {
  return (
    <section
      id="quote"
      className="min-h-screen px-6 flex items-center justify-center relative"
      style={{ background: '#0a0a0a' }}
    >
      <div className="max-w-5xl mx-auto text-center w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {/* Subtle Decorative Line top */}
          <motion.div
            variants={lineVariants}
            className="mx-auto mb-10"
            style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.2)', originX: 0.5 }}
          />

          {/* Staggered Word Quote */}
          <blockquote
            className="font-serif italic flex flex-wrap lg:flex-nowrap justify-center gap-x-[0.32em] gap-y-2"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              color: '#e5e5e5',
              fontWeight: 300,
              lineHeight: 1.5,
              letterSpacing: '-0.01em',
            }}
          >
            {quoteWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </blockquote>

          {/* Author attribution */}
          <motion.span
            variants={authorVariants}
            className="font-sans block mt-8"
            style={{
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#7c7c7cff',
            }}
          >
            — from me to myself
          </motion.span>

          {/* Subtle Decorative Line bottom */}
          <motion.div
            variants={lineVariants}
            className="mx-auto mt-10"
            style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.2)', originX: 0.5 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
