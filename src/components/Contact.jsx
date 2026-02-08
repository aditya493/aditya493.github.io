import React, { useState } from 'react'
import myLogo from '../../images/my-logo.jpg'
import gmailIcon from '../../images/gmail-icon.jpg'
import instaIcon from '../../images/Instagram-icon.jpg'
import phoneIcon from '../../images/Phone-icon.jpg'
import xIcon from '../../images/x-icon.jpg'
import meetIcon from '../../images/Schedul-icon.jpg'
import portfolioIcon from '../../images/portfolio-icon.jpg'

export default function Contact(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e){
    e.preventDefault()
    // no backend — simulate success
    setSent(true)
    setTimeout(()=>{
      setName(''); setEmail(''); setMessage('')
    }, 600)
  }

  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-black">Let's Talk</h3>
          <p className="mt-4 text-slate-300 text-lg">Pick your poison. No auto-replies, no marketing calls. Just direct access to me.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100" />
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100" />
            <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100"></textarea>
            <div className="flex items-center gap-3">
              <button type="submit" className="px-5 py-3 rounded-lg bg-yellow-400 text-black font-semibold">Send message</button>
              {sent && <span className="text-yellow-300">Message sent — thanks.</span>}
            </div>
          </form>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {/* Email */}
              <a
                href="mailto:adityasaraf64@gmail.com"
                className="flex flex-col items-center justify-center p-6 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-105"
              >
                <img src={gmailIcon} alt="Email" className="w-14 h-14 object-contain mb-2" />
                <span className="text-xs font-semibold text-center">Email</span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/adityassaraf?igsh=MW1kb25sdDEwbGY3Mw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-105"
              >
                <img src={instaIcon} alt="Instagram" className="w-14 h-14 object-contain mb-2" />
                <span className="text-xs font-semibold text-center">Instagram</span>
              </a>

              {/* X */}
              <a
                href="https://x.com/AdityaS12084754"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-105"
              >
                <img src={xIcon} alt="X" className="w-14 h-14 object-contain mb-2" />
                <span className="text-xs font-semibold text-center">X</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+917204555215"
                className="flex flex-col items-center justify-center p-6 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-105"
              >
                <img src={phoneIcon} alt="Phone" className="w-14 h-14 object-contain mb-2" />
                <span className="text-xs font-semibold text-center">Call</span>
              </a>

              {/* Schedule */}
              <a
                href="https://calendar.app.google/EJ6NS95RmhnKDrNn6"
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center p-6 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all hover:scale-105"
              >
                <img src={meetIcon} alt="Schedule" className="w-14 h-14 object-contain mb-2" />
                <span className="text-xs font-semibold text-center">Schedule</span>
              </a>

              {/* Portfolio */}
              <a
                href="#portfolio"
                className="flex flex-col items-center justify-center p-6 bg-yellow-400 hover:bg-yellow-300 text-black rounded-xl transition-all hover:scale-105"
              >
                <img src={portfolioIcon} alt="Portfolio" className="w-14 h-14 object-contain mb-2" />
                <span className="text-xs font-semibold text-center">Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
