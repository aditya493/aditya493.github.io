import React, { useState } from 'react'

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
      <div className="max-w-3xl mx-auto px-4">
        <h3 className="text-2xl font-bold">Let’s build something that lasts</h3>
        <p className="mt-2 text-slate-300">Build boldly. Ride responsibly. Ship reliably.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100" />
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100" />
            <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100"></textarea>
            <div className="flex items-center gap-3">
              <button type="submit" className="px-5 py-3 rounded-lg bg-yellow-400 text-black font-semibold">Send message</button>
              {sent && <span className="text-yellow-300">Message sent — thanks.</span>}
            </div>
          </form>

          <aside className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="flex flex-col gap-2">
              <a className="inline-flex items-center gap-3 px-4 py-3 bg-slate-800 rounded-lg" href="mailto:adityasaraf64@gmail.com">
                <span className="text-yellow-400">✉️</span>
                <span className="text-slate-100">adityasaraf64@gmail.com</span>
              </a>

              <a className="inline-flex items-center gap-3 px-4 py-3 bg-slate-800 rounded-lg" href="https://www.instagram.com/adityassaraf?igsh=MW1kb25sdDEwbGY3Mw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                <span className="text-yellow-400">📷</span>
                <span className="text-slate-100">Instagram</span>
              </a>

              <a className="inline-flex items-center gap-3 px-4 py-3 bg-slate-800 rounded-lg" href="https://x.com/AdityaS12084754" target="_blank" rel="noreferrer">
                <span className="text-yellow-400">✖️</span>
                <span className="text-slate-100">X</span>
              </a>

              <a className="inline-flex items-center gap-3 px-4 py-3 bg-slate-800 rounded-lg" href="tel:+917204555215">
                <span className="text-yellow-400">📞</span>
                <span className="text-slate-100">+91 72045 55215</span>
              </a>

              <a className="inline-flex items-center gap-3 px-4 py-3 bg-slate-800 rounded-lg" href="https://calendar.app.google/EJ6NS95RmhnKDrNn6" target="_blank" rel="noreferrer">
                <span className="text-yellow-400">📅</span>
                <span className="text-slate-100">Schedule a meeting</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
