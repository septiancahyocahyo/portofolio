import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// ─── Isi dengan kredensial EmailJS kamu ──────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'porto_septian';   // contoh: 'service_xxxxxxx'
const EMAILJS_TEMPLATE_ID = 'porto_septian';  // contoh: 'template_xxxxxxx'
const EMAILJS_PUBLIC_KEY  = 'WFsAhumYnHFGyUhyB';   // contoh: 'xxxxxxxxxxxxxxxxxxxx'
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
    href: 'https://wa.me/6289671306514',
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
      style={{ background: 'linear-gradient(180deg, #09090b 0%, #121215 50%, #09090b 100%)' }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-nebula-deepest/20 blur-[140px] pointer-events-none" />

      <div className="container mx-auto relative z-10 max-w-5xl">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 60, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
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

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -70, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="border-b border-space-blue/10 pb-6 mb-8">
              <h3 className="font-serif font-light text-white text-2xl mb-4">
                Let's Build Something Together
              </h3>
              <p className="text-space-pale/60 text-sm leading-relaxed font-light">
                Seeking opportunities in Frontend Development or Full Stack engineering. 
                Whether you have a role available, a project in mind, or just want to connect, feel free to reach out.
              </p>
            </div>

            <div className="space-y-6">
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 py-2 border-b border-space-blue/5"
                  initial={{ opacity: 0, x: -30, scale: 0.92 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center border border-space-blue/20"
                  >
                    <item.icon size={15} className="text-space-blue" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-space-blue/50">
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
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 70, y: 20, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden field: send time */}
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

              <h3 className="font-serif font-light text-white text-xl border-b border-space-blue/10 pb-3">Send a Message</h3>

              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Your Email', type: 'email', placeholder: 'john@example.com' },
              ].map(field => (
                <div key={field.name} className="flex flex-col border-b border-space-blue/15 py-2">
                  <label className="font-mono text-[10px] text-space-blue/70 uppercase tracking-widest mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full bg-transparent text-sm text-white placeholder-space-pale/20 outline-none py-1"
                  />
                </div>
              ))}

              <div className="flex flex-col border-b border-space-blue/15 py-2">
                <label className="font-mono text-[10px] text-space-blue/70 uppercase tracking-widest mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Hi Septian, I'd like to..."
                  required
                  rows={4}
                  className="w-full bg-transparent text-sm text-white placeholder-space-pale/20 outline-none py-1 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed py-3 font-sans text-xs uppercase tracking-widest font-medium"
              >
                {status === 'sending' && <><span className="w-3.5 h-3.5 border-2 border-black/40 border-t-black rounded-full animate-spin" /> Sending...</>}
                {status === 'sent'    && <><FiCheck size={14} /> Message Sent!</>}
                {status === 'error'   && <><FiAlertCircle size={14} /> Failed — Try Again</>}
                {status === 'idle'    && <><FiSend size={14} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
