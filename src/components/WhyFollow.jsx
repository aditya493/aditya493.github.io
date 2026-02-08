import React from 'react'

export default function WhyFollow(){
  const bullets = [
    'Raw incident stories — what actually happened',
    'DIY infrastructure patterns you can reuse',
    'Riding trips that double as engineering lessons',
    'Real talk: discipline, failure, growth',
    'No fluff. Just honest, field-tested insights'
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
