import React from 'react'
import About from './About'
import Contact from '../Contact'
import Footer from './FootNote'
import Hero from './Hero'
import Projects from './Projects'

function Home() {
  return (
    <>
      <Hero />

      <div className="section__wrapper section__wrapper--dark">
        <Projects />
      </div>

      <div className="about__fixed-bg">
        <div className="section__wrapper section__wrapper--blur">
          <About />
        </div>
      </div>

      <Contact />

      <Footer />
    </>
  )
}

export default Home
