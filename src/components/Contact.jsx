import React, { useState } from 'react'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e){
    e.preventDefault()
    setSent(true)
    setTimeout(()=>{
      setName(''); setEmail(''); setMessage('')
    }, 600)
  }

  const contacts = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 4L12 13L2 4" />
        </svg>
      ),
      label: 'Email',
      value: 'adityasaraf64@gmail.com',
      href: 'mailto:adityasaraf64@gmail.com'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 7204555215',
      href: 'tel:+917204555215'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
        </svg>
      ),
      label: 'X',
      value: 'X Profile',
      href: 'https://x.com/AdityaS12084754'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      href: 'https://linkedin.com/in/adityasaraf'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: 'GitHub',
      value: 'GitHub Profile',
      href: 'https://github.com/aditya493'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      label: 'Schedule',
      value: 'Schedule a Meeting',
      href: 'https://calendar.app.google/EJ6NS95RmhnKDrNn6'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
          <polyline points="13 2 13 9 20 9" />
          <line x1="9" y1="15" x2="15" y2="15" />
        </svg>
      ),
      label: 'Portfolio',
      value: 'My Portfolio',
      href: 'https://portfolio.mynameisadityassaraf.com/'
    }
  ]

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-black">Let's Connect</h3>
          <p className="mt-4 text-slate-300 text-lg">Pick your way. No corporate nonsense. Just direct access to me.</p>
        </div>

        {/* Contact Cards - Horizontal Layout */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex flex-col items-center px-6 py-4 rounded-2xl border border-yellow-400/30 bg-slate-900/50 hover:bg-slate-800 hover:border-yellow-400 transition-all"
            >
              <div className="text-yellow-400 mb-2">
                {contact.icon}
              </div>
              <div className="text-sm font-semibold text-slate-100 text-center">{contact.value}</div>
            </a>
          ))}
        </div>

        {/* Message Form */}
        <form onSubmit={onSubmit} className="mt-12 grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100" />
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your Email" type="email" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100" />
          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Your Message" rows={5} className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100"></textarea>
          <div className="flex items-center gap-3">
            <button type="submit" className="px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition">Send</button>
            {sent && <span className="text-yellow-300">Message sent — thanks!</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
