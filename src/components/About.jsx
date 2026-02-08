import React from 'react'
import devsecops from '../../images/devsecops.png'

export default function About(){
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold">Who I am</h2>
          <p className="mt-4 text-slate-300">I'm Aditya — a DevOps engineer and rider who works with Azure, Kubernetes, and Terraform. But mostly, I love riding my Royal Enfield Himalayan to remote mountain passes, breaking through comfort zones, and learning systems thinking from both production incidents and long solo routes. I believe the best engineers are also adventurers.</p>
        </div>

        <div className="space-y-4">
          <figure className="rounded-xl overflow-hidden card-shadow">
            <img src={devsecops} alt="DevOps illustration" className="w-full h-48 object-cover block" />
          </figure>
          <div>
            <h3 className="text-lg font-semibold">Life off the keyboard</h3>
            <p className="mt-4 text-slate-300">I ride 500+ km stretches on my Himalayan. I camp under stars. I test myself on steep passes. This isn't a side gig — it's how I stay sharp, humble, and real. Long rides teach you what matters: discipline, preparation, and showing up when it's hard. Same skills I bring to production.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
