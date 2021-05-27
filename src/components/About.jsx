import React from 'react'

function About() {
  return (
    <div className="section">
      <h3>About Me</h3>
      <div className="about__grid">
        <div className="about__content">

          <p className="paragraph-break">
            Hello! I’m Louis (pronounced Louie, he/him). I’m currently living in Wellington and have called this place home for the last four years.
          </p>
          <p className="paragraph-break">
            I am a software developer with a passion for building all things fun and interactive. I was drawn to tech after the realisation that creativity can be utilised to a depth that I’m yet to find the end of.
          </p>
          <p className="paragraph-break">
            In development, I enjoy being creative as a way to build and design a visual experience. But also, I find myself endorsing the very same creative part of my brain when programming. I’m always excited to dig into the complex problem solving with the curiosity to learn how and why things work.
          </p>
          <p className="paragraph-break">
            For the past 4 years, I have been using code creatively for video game projects. In my final year at the College of Creative Arts, I worked on a year-long major project, One Way Wellington, a video game about building a spaceship and transporting creative talent from across the galaxy to the coolest little capital.
          </p>
          <p>
            This year I have extended my tool-belt into web development. I have recently completed study at Enspiral Dev Academy, where I worked in a team to build a web-based multiplayer Mafia game.
          </p>
        </div>

        <img
          className="about__image"
          src="./images/portrait-louis.jpg"
          alt="A portrait of Louis Earl"
        />

      </div>

    </div>
  )
}

export default About
