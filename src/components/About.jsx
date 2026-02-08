import React from 'react'
import devsecops from '../../images/devsecops.png'

export default function About(){
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold">Who I am (the real version)</h2>
          <p className="mt-4 text-slate-300">I'm Aditya — professionally, I'm a DevOps engineer wrestling Azure, Kubernetes, and Terraform into doing sensible things. Personally, I'm obsessed with riding my Royal Enfield Himalayan to sketchy mountain passes, camping with questionable food choices, and proving that code disasters and hiking breakdowns follow the same recovery playbook. I genuinely believe the best engineers are the ones who've been lost in the mountains and had to think their way out.</p>
        </div>

        <div className="space-y-4">
          <figure className="rounded-xl overflow-hidden card-shadow">
            <img src={devsecops} alt="DevOps illustration" className="w-full h-48 object-cover block" />
          </figure>
          <div>
            <h3 className="text-lg font-semibold">When I'm not staring at logs</h3>
            <p className="mt-4 text-slate-300">I ride 500+ km stretches hoping my bike doesn't betray me. I camp under stars with instant noodles and a prayer. I test myself on passes steep enough to make me question my life choices. Turns out, when your headlight dies at 10 PM on a mountain, you learn discipline real quick. Everything I know about resilience, I learned from long rides, failed attempts, and terrible decisions in the middle of nowhere. Those same lessons? They ship zero-downtime deployments.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
