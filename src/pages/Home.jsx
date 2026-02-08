import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Pillars from '../components/Pillars'
import Philosophy from '../components/Philosophy'
import WhyFollow from '../components/WhyFollow'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <main>
      <Hero />
      <About />
      <Pillars />
      <Philosophy />
      <WhyFollow />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}
