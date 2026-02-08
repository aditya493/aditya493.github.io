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
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-black">Let's Talk</h3>
          <p className="mt-4 text-slate-300 text-lg">Pick your poison. No auto-replies, no marketing calls. Just direct access to me.</p>
          
          {/* Contact Icons Row */}
          <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">
            <a href="mailto:adityasaraf64@gmail.com" className="w-14 h-14 rounded-full bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110" title="Email">
              <img src={gmailIcon} alt="Email" className="w-8 h-8 object-contain" />
            </a>
            <a href="https://www.instagram.com/adityassaraf?igsh=MW1kb25sdDEwbGY3Mw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110" title="Instagram">
              <img src={instaIcon} alt="Instagram" className="w-8 h-8 object-contain" />
            </a>
            <a href="https://x.com/AdityaS12084754" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110" title="X">
              <img src={xIcon} alt="X" className="w-8 h-8 object-contain" />
            </a>
            <a href="tel:+917204555215" className="w-14 h-14 rounded-full bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110" title="Call">
              <img src={phoneIcon} alt="Phone" className="w-8 h-8 object-contain" />
            </a>
            <a href="https://calendar.app.google/EJ6NS95RmhnKDrNn6" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110" title="Schedule">
              <img src={meetIcon} alt="Schedule" className="w-8 h-8 object-contain" />
            </a>
            <a href="#portfolio" className="w-14 h-14 rounded-full bg-yellow-400 hover:bg-yellow-300 transition-all flex items-center justify-center hover:scale-110" title="Portfolio">
              <img src={portfolioIcon} alt="Portfolio" className="w-8 h-8 object-contain" />
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-12 grid grid-cols-1 gap-4 max-w-xl mx-auto">
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
