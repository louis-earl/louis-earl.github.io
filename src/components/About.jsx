import React from 'react'

function About() {
  return (
    <div className="section">
      <div className="about__grid about__grid--add-break">
        <div className="about__content">

          <h3>Creator of All Things Fun and Interactive</h3>

          <p className="paragraph-break">
            Hello! I’m Louis (pronounced Louie, he/him). I am a software developer with a passion for creative tech.
          </p>
          <p>
            I was drawn to tech because I love designing and building visual experiences with code. When programming, I find it exciting to dig into a complex problem because I have the curiosity to learn why and how things work. That's why problem-solving with code endorses the creative part of my brain, so the development process is as enjoyable as reaching the end result.  
          </p>
        </div>

        <img
          className="about__image"
          src="./images/portrait-louis.jpg"
          alt="A portrait of Louis Earl"
        />

      </div>

      <div className="about__grid about__grid--add-break">
        <div className="about__content">

          <h3>The Wellingtonian</h3>

          <p>
            Born and raised in the South Island, I was attracted to Wellington for its promise as the Creative Capital, but I stayed because of the soul this city provided - and I got to meet some of the most amazing, vibrant people along the way. I'm proud to have called this place home for the last four years (and counting!).
            </p>

        </div>
      </div>

      <div className="about__grid">
        <div className="about__content">

          <h3>The Graduate</h3>

          <p className="paragraph-break">
            Since moving to Welly, I've been using code creatively for video game projects. In my final year at the College of Creative Arts, I worked on a year-long major project, One Way Wellington, a video game about building a spaceship and transporting creative talent from across the galaxy to the coolest little capital.
          </p>
          <p>
            This year I have extended my tool-belt into web development. I have recently completed study at Enspiral Dev Academy, where I worked in a team to build Midnight Mysteries, a web-based multiplayer Mafia game.
          </p>

        </div>
        <img
          className="about__image"
          src="./images/education.png"
          alt="Logo for Massey University and Enspiral Dev Academy"
        />



      </div>

    </div >
  )
}

export default About
