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

        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
          <input value={name} onChange={e=>setName(e.target.value)} placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100" />
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" type="email" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100" />
          <textarea value={message} onChange={e=>setMessage(e.target.value)} placeholder="Message" rows={5} className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-white/6 text-slate-100"></textarea>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-5 py-3 rounded-lg bg-emerald-500 text-black font-semibold">Send message</button>
            {sent && <span className="text-emerald-300">Message sent — thanks.</span>}
          </div>
        </form>
      </div>
    </section>
  )
}
