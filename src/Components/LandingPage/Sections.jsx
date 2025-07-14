import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
import Team from '../Team/Team'
import CTA from '../CTA/CTA'
import Testimonials from '../Testimonials/Testimonials'
import Contact from '../Contact/Contact'

const Sections = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Team/>
      <CTA/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default Sections
