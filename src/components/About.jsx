import React from 'react'
import devsecops from '../../images/devsecops.webp'

export default function About(){
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-bold">Who I am</h2>
          <p className="mt-4 text-slate-300">I’m Aditya — a DevOps engineer and SRE who treats infrastructure like an expedition. Over the past five years I’ve focused on building predictable production systems: scaling Kubernetes clusters, automating infrastructure with Terraform, and instilling observability so incidents become lessons, not mysteries.</p>
        </div>

        <div className="space-y-4">
          <figure className="rounded-xl overflow-hidden card-shadow">
            <img src={devsecops} alt="DevOps illustration" className="w-full h-48 object-cover block" />
          </figure>
          <div>
            <h3 className="text-lg font-semibold">Beyond the console</h3>
            <p className="mt-4 text-slate-300">Outside work I ride a Royal Enfield Himalayan across long routes and mountains. Long rides sharpen judgment: planning, risk assessment, and resilience — the same habits I bring to production incidents. Discipline and a growth mindset sit at the center of everything I build.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
