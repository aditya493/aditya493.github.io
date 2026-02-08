import React from 'react'

export default function Portfolio(){
  const portfolioItems = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
        </svg>
      ),
      title: 'DevOps Projects',
      description: 'Infrastructure, automation & reliability',
      href: 'https://portfolio.mynameisadityassaraf.com/'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
          <line x1="12" y1="12" x2="20" y2="7.5"></line>
          <line x1="12" y1="12" x2="12" y2="21"></line>
          <line x1="12" y1="12" x2="4" y2="7.5"></line>
        </svg>
      ),
      title: 'Cloud & K8s',
      description: 'Azure, Kubernetes, containerization',
      href: 'https://portfolio.mynameisadityassaraf.com/'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="19" cy="12" r="1"></circle>
          <circle cx="5" cy="12" r="1"></circle>
        </svg>
      ),
      title: 'Open Source',
      description: 'Contributions & tools I\'ve built',
      href: 'https://github.com/aditya493'
    }
  ]

  return (
    <section id="portfolio" className="py-16 bg-slate-900/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black">My Work</h2>
          <p className="mt-4 text-slate-300 text-lg">Real projects. Real solutions. Real problems solved.</p>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {portfolioItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center px-6 py-8 rounded-2xl border border-yellow-400/30 bg-slate-900/50 hover:bg-slate-800 hover:border-yellow-400 transition-all group"
            >
              <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-100 text-center">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400 text-center">{item.description}</p>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://portfolio.mynameisadityassaraf.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          >
            View Full Portfolio →
          </a>
        </div>
      </div>
    </section>
  )
}
