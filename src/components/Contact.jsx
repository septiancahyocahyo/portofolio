import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// ─── Isi dengan kredensial EmailJS kamu ──────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'porto_septian';   // contoh: 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // contoh: 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // contoh: 'xxxxxxxxxxxxxxxxxxxx'
// ─────────────────────────────────────────────────────────────────────────────

const contactItems = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'septiancahyo67@gmail.com',
    href: 'mailto:septiancahyo67@gmail.com',
    color: '#9DCDDC',
  },
  {
    icon: FiPhone,
    label: 'Phone / WhatsApp',
    value: '+62 896-7130-6514',
    href: 'tel:+6289671306514',
    color: '#C774B2',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/septian-cahyo',
    href: 'https://www.linkedin.com/in/septian-cahyo',
    color: '#5692A9',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Yogyakarta, Indonesia',
    href: null,
    color: '#7B347E',
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(10,31,58,0.55) 0%, rgba(6,43,67,0.4) 35%, rgba(33,5,53,0.45) 80%, rgba(10,31,58,0.55) 100%)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-nebula-deepest/20 blur-[140px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-5xl">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag mb-3">&gt;_ Get In Touch</p>
          <h2 className="section-heading">
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-space-pale/55 mt-4 max-w-md mx-auto font-mono text-sm">
            Open to new opportunities, collaborations, or just a friendly chat about tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact info */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="glass-card rounded-2xl p-8 mb-6"
              style={{ boxShadow: '0 0 40px rgba(86,146,169,0.1)' }}
            >
              <h3 className="font-sans font-bold text-white text-lg mb-2">
                Available for Opportunities 🚀
              </h3>
              <p className="text-space-pale/60 text-sm leading-relaxed">
                Fresh graduate seeking roles in Frontend Development, Full Stack Development,
                or any IT-related field. Let's build something great together!
              </p>
            </div>

            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                className="glass-card rounded-xl p-5 flex items-center gap-4 group transition-all duration-300"
                style={{ boxShadow: `0 0 20px ${item.color}10` }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  boxShadow: `0 0 35px ${item.color}30`,
                  x: 4,
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}40`,
                    boxShadow: `0 0 15px ${item.color}25`,
                  }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: `${item.color}90` }}>
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-sm text-space-pale/80 hover:text-white transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-space-pale/80">{item.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 space-y-5"
              style={{ boxShadow: '0 0 40px rgba(86,146,169,0.1)' }}
            >
              <div className="h-px" style={{ background: 'linear-gradient(90deg, #5692A9, #C774B2, transparent)' }} />

              {/* Hidden field: send time — auto-populated on submit */}
              <input
                type="hidden"
                name="send_time"
                value={new Date().toLocaleString('id-ID', {
                  weekday: 'long', year: 'numeric', month: 'long',
                  day: 'numeric', hour: '2-digit', minute: '2-digit',
                  timeZone: 'Asia/Jakarta', timeZoneName: 'short',
                })}
                readOnly
              />

              <h3 className="font-sans font-bold text-white">Send a Message</h3>

              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
              ].map(field => (
                <div key={field.name}>
                  <label className="block font-mono text-xs text-space-blue uppercase tracking-wider mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl font-mono text-sm text-space-pale placeholder-space-pale/30 outline-none transition-all duration-300 focus:border-space-blue"
                    style={{
                      background: 'rgba(4,69,104,0.2)',
                      border: '1px solid rgba(86,146,169,0.25)',
                    }}
                    onFocus={e => (e.target.style.boxShadow = '0 0 20px rgba(86,146,169,0.25)')}
                    onBlur={e => (e.target.style.boxShadow = '')}
                  />
                </div>
              ))}

              <div>
                <label className="block font-mono text-xs text-space-blue uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Septian, I'd like to..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl font-mono text-sm text-space-pale placeholder-space-pale/30 outline-none transition-all duration-300 resize-none"
                  style={{
                    background: 'rgba(4,69,104,0.2)',
                    border: '1px solid rgba(86,146,169,0.25)',
                  }}
                  onFocus={e => (e.target.style.boxShadow = '0 0 20px rgba(86,146,169,0.25)')}
                  onBlur={e => (e.target.style.boxShadow = '')}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                style={status === 'sent' ? { background: 'linear-gradient(135deg, #044568, #9DCDDC)' } : status === 'error' ? { background: 'linear-gradient(135deg, #7B347E, #C774B2)' } : {}}
              >
                {status === 'sending' && <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending...</>}
                {status === 'sent'    && <><FiCheck size={16} /> Message Sent!</>}
                {status === 'error'   && <><FiAlertCircle size={16} /> Failed — Try Again</>}
                {status === 'idle'    && <><FiSend size={16} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
