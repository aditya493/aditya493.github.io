import React, { useState, useEffect } from 'react'

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    {label:'Home', href:'#top'},
    {label:'About', href:'#about'},
    {label:'What I Do', href:'#pillars'},
    {label:'Philosophy', href:'#philosophy'},
    {label:'Contact', href:'#contact'},
  ]

  return (
    <header className={`fixed w-full z-30 transition-all ${scrolled ? 'backdrop-blur bg-black/30' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#top" className="text-yellow-400 font-extrabold text-2xl md:text-3xl">Aditya</a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l=> (
            <a key={l.href} href={l.href} className="text-slate-200 hover:text-yellow-300 transition">{l.label}</a>
          ))}
        </div>

        <div className="md:hidden">
          <button aria-label="menu" onClick={()=>setOpen(v=>!v)} className="p-2 rounded-md bg-white/3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="#E6EEF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div className={`md:hidden px-4 ${open ? 'block' : 'hidden'}`}>
        <div className="flex flex-col gap-3 pb-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block py-2 text-slate-200 border-b border-white/3">{l.label}</a>
          ))}
        </div>
      </div>
    </header>
  )
}
