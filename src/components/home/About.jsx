import React from 'react'

function About() {
  return (
    <div className="section">

      <div className="grid__2-3 grid__2-3--add-margin">
        <div className="about__content">

          <h3 className="about__title">Creator of All Things Fun and Interactive</h3>

          <p className="add-break">
            Hello! I’m Louis (pronounced Louie, he/him). I am a software developer with a passion for creative tech.
          </p>
          <p>
            I was drawn to tech because I love designing and building visual experiences with code. When programming, I find it exciting to dig into a complex problem because I'm curious to learn why and how things work. Problem-solving with code endorses the creative part of my brain, so the development process is as enjoyable as reaching the end result.
          </p>

        </div>

        <img
          className="about__image"
          src="./images/portrait-louis.jpg"
          alt="A portrait of Louis Earl"
        />

      </div>

      <div className="horizontal-grid horizontal-grid--about">
        <div className="about__bullet">
          <img className="about__icon" src="./images/icon-welly.png" alt="Wellington beehive icon." />
          <h4>Wellington Based</h4>
        </div>

        <div className="about__bullet">
          <img className="about__icon" src="./images/icon-massey.png" alt="Massey University icon." />
          <h4>Graduate</h4>
          <h4>Creative Media Production</h4>
        </div>

        <div className="about__bullet">
          <img className="about__icon" src="./images/icon-eda.png" alt="Enspiral Dev Academy icon."/>
          <h4>Graduate</h4>
          <h4>EDA Bootcamp</h4>
        </div>
      </div>

    </div >
  )
}

export default About
