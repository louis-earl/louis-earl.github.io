import React from 'react'

import '../../css/smtm.css'
import Contact from '../Contact'

function MidnightMysteries() {


  return (
    <div className="smtm">
      <div className="project__background project__background--smtm" />

      <div className="project__content" >

        <div className="smtm-title__wrapper">
          <h1 className="smtm-title">$how Me The Money</h1>
        </div>

        <div className="project-card__outer project-card__outer--smtm">
          <div className="project-card">
            <h3 className="smtm-card__title">An app for meetings to save you time and money</h3>
            <p className="add-break">
              Midnight Mysteries is a battle of deception for four or more players. Avoid elimination each round while taking out the opposition to win this game!
            </p>
            <p>
              The game is played by two teams: the <span className="mafia">Mafia</span> and the <span className="innocent">Innocent</span>. The objective of the game is for the Mafia to “kill off” the Innocent until they are the majority, or for the Innocent to collectively vote off the entire Mafia.
            </p>
          </div>
        </div>

        <div className="project-card__outer project-card__outer--smtm">
          <div className="project-card">
            <h3 className="smtm-card__title">My Involvement</h3>
            <p className="add-break">
              Midnight Mysteries was developed by an eight-person team within one week. This was our final project while studying at Enspiral Dev Academy, and the completed product was presented at our graduation.
            </p>

            <img className="project-image add-break" src="./images/smtm-present-1.jpg" alt="Louis Earl presenting Midnight Mysteries at his graduation." />

            <div className="grid__2-3">
              <div>
                <p className="add-break">
                  As the Product Owner of Midnight Mysteries, I was responsible for the overall vision and direction of the project - to ensure the whole team was working on the same page.
                </p>
                <p className="add-break">
                  My role evolved into a Team Lead position during development, where I regularly checked in across the team to establish and assist with any blocks or needs.
                </p>
                <p className="add-break">
                  I maintained the team Kanban Board between daily sprints. This involved breaking up big tasks into a series of smaller 'cards'. Team members could then self-allocate tasks using the cards, which prevented overlapping work and minimised Git merge conflicts.
                </p>
                <p>
                  Because the team was well organised to follow an agile workflow, I could also spend time doing what I love, prograsmtming for games. With my previous prograsmtming experience, I was happy to offer technical assistance when requested by the team.
                </p>
              </div>
              <img className="project-image" src="./images/smtm-present-2.jpg" alt="Louis Earl laughing with his team." />
            </div>
          </div>
        </div>

        <div className="project-card__outer project-card__outer--smtm">
          <div className="project-card">

            <h3 className="smtm-card__title">The Game</h3>

            <p>Midnight Mysteries is currently live - play with your friends on the link below!</p>
            <p>The page may take some time to load while the server wakes up (approx. 20 secs).</p>

            <a href="https://midnight-mysteries.herokuapp.com/">
              <button className="smtm-button">Check It Out!</button>
            </a>

          </div>
        </div>

      </div>
      <Contact extraStyle={"contact--smtm"} />
    </div>

  )
}

export default MidnightMysteries
