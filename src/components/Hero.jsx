import React from 'react'
import himalayan from '../../images/himalayan-bike.jpg'

export default function Hero(){
  return (
    <section id="top" className="pt-24 md:pt-32 pb-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-4">
        <div className="md:col-span-7">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">I break systems professionally. I fix them on mountains for fun.</h1>
          <p className="mt-4 text-slate-300 text-lg">DevOps Engineer | SRE | Rider | Mountain addict — basically I wrangle Kubernetes clusters by day and gravel by night. One pays bills, the other saves my sanity.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#pillars" className="w-full sm:w-auto inline-block text-center px-5 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:scale-[1.01] transition">Explore My Journey</a>
            <a href="#contact" className="w-full sm:w-auto inline-block text-center px-5 py-3 rounded-lg border border-white/10 text-white hover:bg-white/5 transition">Get In Touch</a>
          </div>
        </div>

        <div className="md:col-span-5 flex justify-center md:justify-end">
          <div className="w-full max-w-md rounded-3xl overflow-hidden card-shadow relative">
            <img src={himalayan} alt="Royal Enfield Himalayan" className="w-full h-64 md:h-80 object-cover block" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" aria-hidden></div>
            {/* caption removed per request */}
          </div>
        </div>
      </div>
    </section>
  )
}
