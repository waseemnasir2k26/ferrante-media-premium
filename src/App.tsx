import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import TrustBar from './sections/TrustBar'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Showcase from './sections/Showcase'
import Services from './sections/Services'
import Process from './sections/Process'
import Calculator from './sections/Calculator'
import Industries from './sections/Industries'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import Footer from './components/Footer'
import './index.css'

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const href = anchor.getAttribute('href')
        if (href) {
          document.querySelector(href)?.scrollIntoView({
            behavior: 'smooth'
          })
        }
      })
    })
  }, [])

  return (
    <div className="min-h-screen bg-dark-950 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Showcase />
        <Services />
        <Process />
        <Calculator />
        <Industries />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
