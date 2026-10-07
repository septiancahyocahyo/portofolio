import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCheck, FiAlertCircle, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = 'porto_septian';
const EMAILJS_TEMPLATE_ID = 'porto_septian';
const EMAILJS_PUBLIC_KEY  = 'WFsAhumYnHFGyUhyB';

const contactInfo = [
  { label: 'Email',            value: 'septiancahyo67@gmail.com',     href: 'mailto:septiancahyo67@gmail.com' },
  { label: 'Phone / WhatsApp', value: '+62 896-7130-6514',             href: 'https://wa.me/6289671306514' },
  { label: 'LinkedIn',         value: 'linkedin.com/in/septian-cahyo', href: 'https://www.linkedin.com/in/septian-cahyo' },
  { label: 'Location',         value: 'Yogyakarta, Indonesia',         href: null },
];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: '-80px' },
  transition:  { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
});

const fieldBorderStyle = {
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  paddingBottom: '6px',
  marginBottom: '28px',
};

const labelStyle = {
  display: 'block',
  fontSize: '9px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: '#333333',
  fontFamily: 'Inter, sans-serif',
  marginBottom: '6px',
};

const inputStyle = {
  display: 'block',
  width: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontSize: '13px',
  color: '#ffffff',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 300,
  padding: '4px 0',
  lineHeight: 1.6,
};

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [focus, setFocus]   = useState(null);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
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
      className="py-28 px-6"
      style={{ background: '#0a0a0a', borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <motion.div className="mb-20" {...fadeUp(0)}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's{' '}
            <span style={{ color: '#a0a0a0', fontStyle: 'italic', fontWeight: 300 }}>Connect</span>
          </h2>
          <div className="section-divider" />
          <p
            className="font-sans mt-4"
            style={{ fontSize: '13px', color: '#555555', fontWeight: 300, maxWidth: '440px' }}
          >
            Open to new opportunities, collaborations, or just a conversation about technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ── Contact info ── */}
          <motion.div {...fadeUp(0.1)}>
            <h3
              className="font-serif mb-5"
              style={{ fontSize: '1.4rem', fontWeight: 400, color: '#ffffff', lineHeight: 1.3 }}
            >
              Let's Build Something<br />Together
            </h3>
            <p
              className="font-sans mb-10"
              style={{ fontSize: '13px', color: '#787878', lineHeight: 1.85, fontWeight: 300 }}
            >
              Seeking opportunities in Frontend Development or Full Stack engineering.
              Whether you have a role available, a project in mind, or just want to connect —
              feel free to reach out through any channel below.
            </p>

            {/* Contact table */}
            <div>
              {contactInfo.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '1.5rem',
                    padding: '13px 0',
                    borderBottom: i < contactInfo.length - 1
                      ? '1px solid rgba(255,255,255,0.04)'
                      : 'none',
                  }}
                >
                  <span
                    className="font-sans"
                    style={{
                      fontSize: '9px',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: '#333333',
                      minWidth: '80px',
                      flexShrink: 0,
                    }}
                  >
                    {item.label}
                  </span>

                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="font-sans hover:text-white transition-colors duration-200"
                      style={{ fontSize: '12px', color: '#787878', fontWeight: 300 }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="font-sans"
                      style={{ fontSize: '12px', color: '#787878', fontWeight: 300 }}
                    >
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Contact form ── */}
          <motion.div {...fadeUp(0.2)}>
            <h3
              className="font-serif mb-8"
              style={{
                fontSize: '1.1rem',
                fontWeight: 400,
                color: '#ffffff',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
              }}
            >
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit}>
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

              {/* Name */}
              <div style={{ ...fieldBorderStyle, borderColor: focus === 'name' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)', transition: 'border-color 0.2s ease' }}>
                <label htmlFor="name" style={labelStyle}>Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocus('name')}
                  onBlur={() => setFocus(null)}
                  placeholder="John Doe"
                  required
                  style={inputStyle}
                />
              </div>

              {/* Email */}
              <div style={{ ...fieldBorderStyle, borderColor: focus === 'email' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)', transition: 'border-color 0.2s ease' }}>
                <label htmlFor="email" style={labelStyle}>Your Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocus('email')}
                  onBlur={() => setFocus(null)}
                  placeholder="john@example.com"
                  required
                  style={inputStyle}
                />
              </div>

              {/* Message */}
              <div style={{ ...fieldBorderStyle, borderColor: focus === 'message' ? 'rgba(255,255,255,0.25)' : 'rgba(255,255,255,0.08)', transition: 'border-color 0.2s ease', marginBottom: '32px' }}>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocus('message')}
                  onBlur={() => setFocus(null)}
                  placeholder="Hi Septian, I'd like to..."
                  required
                  rows={5}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center"
                style={{
                  opacity: status === 'sending' ? 0.65 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  transition: 'opacity 0.2s ease',
                }}
              >
                {status === 'sending' && (
                  <>
                    <span style={{
                      width: 12, height: 12,
                      border: '1px solid rgba(0,0,0,0.35)',
                      borderTopColor: '#000',
                      borderRadius: '50%',
                      animation: '_spin 0.7s linear infinite',
                      display: 'inline-block',
                    }} />
                    Sending...
                  </>
                )}
                {status === 'sent'  && <><FiCheck size={13} /> Message Sent!</>}
                {status === 'error' && <><FiAlertCircle size={13} /> Failed — Try Again</>}
                {status === 'idle'  && <><FiSend size={13} /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes _spin { to { transform: rotate(360deg); } }
        input::placeholder, textarea::placeholder { color: #2a2a2a; font-family: Inter, sans-serif; }
      `}</style>
    </section>
  );
}
