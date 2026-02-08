import React from 'react'
import devsecops from '../../images/devsecops.png'

const cards = [
  {
      title: 'Tech & The Cloud Life',
      items: ['Azure', 'Kubernetes', 'Terraform', 'CI/CD', 'Observability', 'Reliability']
    },
    {
      title: 'Two Wheels & Chaos',
      items: ['Long-distance riding','Mountain routes','Risk management','Surviving stupid plans']
    },
    {
      title: 'Becoming Unbreakable',
      items: ['Discipline','Learning hard','Making money','Organized chaos']
    }
  ]

function Card({card, image}){
  return (
    <article className="group bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-2xl card-shadow hover:-translate-y-2 transform transition">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center overflow-hidden">
          {image ? <img src={image} alt="icon" className="w-full h-full object-cover"/> : <span className="text-yellow-400">🔧</span>}
        </div>
        <h4 className="text-lg font-semibold">{card.title}</h4>
      </div>
      <ul className="mt-4 space-y-2 text-slate-300">
        {card.items.map(i => <li key={i} className="pl-2">{i}</li>)}
      </ul>
    </article>
  )
}

export default function Pillars(){
  return (
    <section id="pillars" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold">The unholy trinity</h2>
        <p className="text-slate-300 mt-2">Three obsessions. One person. Somehow this makes sense to me. (Your mileage may vary.)</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c,i) => (
            <Card key={c.title} card={c} image={i===0 ? devsecops : null} />
          ))}
        </div>
      </div>
    </section>
  )
}
