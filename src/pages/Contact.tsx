import { useState, type FormEvent } from 'react'

const contactLinks = [
  {
    label: 'Email',
    value: 'snehapal4559@gmail.com',
    href: 'mailto:snehapal4559@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 78907 74559',
    href: 'tel:+917890774559',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sneha-pal',
    href: 'https://linkedin.http://www.linkedin.com/in/contact-sneha-pal',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/sneha-pal',
    href: 'https://https://github.com/snehapal4559-hub.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Barasat, Kolkata, West Bengal',
    href: null,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // In production: connect EmailJS or Formspree here
    setSent(true)
  }

  return (
    <main className="min-h-screen pt-[60px]">
      <div className="max-w-[1200px] mx-auto px-8 py-20">
        {/* Header */}
        <div className="mb-12 animate-fade-up">
          <p className="font-mono text-[10px] tracking-[0.15em] text-gold uppercase mb-2">Let's Connect</p>
          <h1 className="font-playfair text-[clamp(2.2rem,4vw,3.2rem)] text-navy leading-tight tracking-tight mb-4">
            Get in Touch
          </h1>
          <div className="w-12 h-[3px] bg-gold rounded-full mb-6" />
          <p className="text-text-muted text-[16px] leading-[1.8] max-w-[520px]">
            Open to research collaborations, academic opportunities, data science roles, and
            professional networking. Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="animate-fade-up-1 flex flex-col gap-3">
            {contactLinks.map((item) => {
              const inner = (
                <div className="flex items-center gap-4 bg-cream border border-navy/8 rounded-xl px-5 py-4 hover:bg-cream-dark transition-colors duration-200">
                  <div className="w-9 h-9 rounded-lg bg-navy flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.1em] text-text-muted uppercase mb-0.5">{item.label}</p>
                    <p className="font-[500] text-navy text-[14px]">{item.value}</p>
                  </div>
                </div>
              )
              return item.href ? (
                <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={item.label}>{inner}</div>
              )
            })}

            {/* Availability note */}
            <div className="mt-4 p-5 rounded-xl bg-navy text-cream">
              <p className="font-mono text-[9px] tracking-[0.1em] text-white/50 uppercase mb-2">Current Status</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[13px] font-[500]">Available for opportunities</span>
              </div>
              <p className="text-[12px] text-white/60 leading-[1.6]">
                Looking for research collaborations, data science internships, and academic
                partnerships. Response time: within 48 hours.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="animate-fade-up-2">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 bg-white border border-navy/8 rounded-2xl px-8">
                <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-5">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-playfair text-[1.5rem] text-navy mb-2">Message Sent!</h3>
                <p className="text-text-muted text-[14px] leading-[1.7] max-w-[300px]">
                  Thank you for reaching out. I'll get back to you within 48 hours.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                  className="mt-6 text-[12px] font-[500] text-gold underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-navy/8 rounded-2xl p-7 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    label="Your Name"
                    type="text"
                    placeholder="Ravi Kumar"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    required
                  />
                  <FormField
                    label="Email Address"
                    type="email"
                    placeholder="ravi@university.edu"
                    value={form.email}
                    onChange={(v) => setForm({ ...form, email: v })}
                    required
                  />
                </div>
                <FormField
                  label="Subject"
                  type="text"
                  placeholder="Research Collaboration Inquiry"
                  value={form.subject}
                  onChange={(v) => setForm({ ...form, subject: v })}
                  required
                />
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[0.08em] text-text-muted uppercase">Message</label>
                  <textarea
                    rows={5}
                    placeholder="I came across your work on statistical modeling and would love to connect about..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full border border-navy/15 rounded-xl px-4 py-3 font-outfit text-[14px] text-text-main bg-cream placeholder:text-text-muted/50 focus:outline-none focus:border-navy/40 focus:bg-white resize-y transition-colors duration-200"
                  />
                </div>
                <button
                  type="submit"
                  className="self-start px-8 py-3.5 rounded-full bg-navy text-cream text-[13px] font-[500] tracking-wide hover:bg-navy-mid transition-all duration-200 hover:-translate-y-px"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

function FormField({
  label, type, placeholder, value, onChange, required,
}: {
  label: string; type: string; placeholder: string; value: string; onChange: (v: string) => void; required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-mono text-[10px] tracking-[0.08em] text-text-muted uppercase">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full border border-navy/15 rounded-xl px-4 py-3 font-outfit text-[14px] text-text-main bg-cream placeholder:text-text-muted/50 focus:outline-none focus:border-navy/40 focus:bg-white transition-colors duration-200"
      />
    </div>
  )
}
