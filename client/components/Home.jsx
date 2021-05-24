import React from 'react'
import About from './About'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'

function Home() {
  return (
    <div>
      <Hero />
      <div className="section__wrapper section__wrapper--dark">
        <Projects />
      </div>
      <div className="section__wrapper section__wrapper--blur">
        <About />
      </div>
      <div className="section__wrapper section__wrapper--dark">
        <Contact />
      </div>
    </div>
  )
}

export default Home
