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
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl font-black">Let's Connect</h3>
          <p className="mt-4 text-slate-300 text-lg">Pick your way. No corporate nonsense. Just direct access to me.</p>
          
          {/* Contact Icons Grid - Large Layout */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
            {/* Email */}
            <a 
              href="mailto:adityasaraf64@gmail.com" 
              className="w-20 h-20 rounded-2xl bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110 group"
              title="Email"
            >
              <img src={gmailIcon} alt="Email" className="w-10 h-10 object-contain group-hover:brightness-75" />
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/adityassaraf?igsh=MW1kb25sdDEwbGY3Mw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="w-20 h-20 rounded-2xl bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110 group"
              title="Instagram"
            >
              <img src={instaIcon} alt="Instagram" className="w-10 h-10 object-contain group-hover:brightness-75" />
            </a>

            {/* Portfolio */}
            <a 
              href="https://portfolio.mynameisadityassaraf.com/"
              target="_blank"
              rel="noreferrer"
              className="w-20 h-20 rounded-2xl bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110 group"
              title="Portfolio"
            >
              <img src={portfolioIcon} alt="Portfolio" className="w-10 h-10 object-contain group-hover:brightness-75" />
            </a>

            {/* X */}
            <a 
              href="https://x.com/AdityaS12084754"
              target="_blank"
              rel="noreferrer"
              className="w-20 h-20 rounded-2xl bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110 group"
              title="X"
            >
              <img src={xIcon} alt="X" className="w-10 h-10 object-contain group-hover:brightness-75" />
            </a>

            {/* Phone */}
            <a 
              href="tel:+917204555215"
              className="w-20 h-20 rounded-2xl bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110 group"
              title="Call"
            >
              <img src={phoneIcon} alt="Phone" className="w-10 h-10 object-contain group-hover:brightness-75" />
            </a>

            {/* Schedule */}
            <a 
              href="https://calendar.app.google/EJ6NS95RmhnKDrNn6"
              target="_blank"
              rel="noreferrer"
              className="w-20 h-20 rounded-2xl bg-slate-800 hover:bg-yellow-400 transition-all flex items-center justify-center hover:scale-110 group"
              title="Schedule"
            >
              <img src={meetIcon} alt="Schedule" className="w-10 h-10 object-contain group-hover:brightness-75" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
