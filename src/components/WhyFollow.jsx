import React from 'react'

export default function WhyFollow(){
  const bullets = [
    'War stories from prod disasters (the honest versions)',
    'Patterns that actually work (not LinkedIn nonsense)',
    'Riding adventures that somehow teach you about systems',
    'Brutal honesty about failure, discipline, and growth',
    'No buzzwords, no corporate speak. Just what works.'
  ]

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-bold">Why follow me</h3>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
          {bullets.map(b => <li key={b} className="flex items-start gap-3"><span className="text-yellow-400">•</span><span>{b}</span></li>)}
        </ul>
      </div>
    </section>
  )
}
