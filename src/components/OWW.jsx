import React from 'react'

import '../oww.css'
import Scroll3D from './Scroll3D'

function OWW() {

  const content = [

    <img className="oww-logo" src="./images/oww-logo.svg" alt="The logo for One Way Wellington." />,

    <div className="oww-card__outer">
      <div className="oww-card oww-card--text">
        <h3 className="oww-card__title">In A Galaxy, Not So Far Away...</h3>
        <p>
          Planet Wellington calls out to the galaxy in desperate need for artists - the world can only move forward with help from these creative thinkers! One Way Wellington is a 2D spaceship building/management game about transporting creative talent across the Milky Way to the ‘Coolest Little Capital’.
      </p>
      </div>
    </div>,

    <div className="oww-card__outer oww-card__outer--ship">
      <div className="oww-card">
        <img className="oww-ship" src="./images/oww-ship.jpg" alt="A spaceship flying through space, filled with passengers." />
      </div>
    </div >,

    <div className="oww-card__outer">
      <div className="oww-card oww-card--text">
        <h3 className="oww-card__title">My Involvement</h3>
        <p>
          As the Creator and Developer of One Way Wellington, I've been responsible for everything from ideation to production and release. This solo project has been an exciting venture because I’ve pursued what I love, designing and programming video games, while taking the project through the entire production pipeline alongside Wellington-based client, WellingtonNZ.
        </p>
      </div>
    </div>

  ]

  return (
    <div className="oww">
      <div className="starfield__wrapper">
      </div>
      <div className="corridor__wrapper">
        {/* <img className="corridor" src="./images/oww-corridor.svg" alt="A spaceship corridor fixed to the background of the webpage." /> */}
      </div>

      <div className="viewport">
        <Scroll3D content={content} />
      </div>

    </div>

  )
}

export default OWW
