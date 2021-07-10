import React from 'react'

import '../../css/smtm.css'
import Contact from '../Contact'

function MidnightMysteries() {


  return (
    <div className="smtm">

      <div className="smtm-hero">
        <div className="smtm-title__wrapper">
          <h1 className="smtm-title">$how Me The Money</h1>
        </div>
      </div>

      <div className="project__content" >


        <div className="project-card__outer project-card__outer--smtm">
          <div className="project-card">
            <h3 className="smtm-card__title">An App To Track The Cost Of Your Meetings</h3>
            <p className="add-break">
              $how Me The Money is an app designed to save time and money in meetings. It displays the cost of your meetings in real time, calculated based on the hourly wages of the meeting's attendees and the current duration of the meeting.
            </p>
            <p>
              The app keeps a record of your meeting history, and can display useful statistics to track the cost of your meetings over time.
            </p>
          </div>
        </div>

        <div className="project-card__outer project-card__outer--smtm">
          <div className="project-card">
            <h3 className="smtm-card__title">My Involvement</h3>
            <p className="add-break">
              $how Me The Money was originally developed during study at Enspiral Dev Academy. I worked in a six-person team to develop the core functionality of the app. In two days, we successfully met our MVP goals before presenting to our cohort. 
            </p>
            <p>
              After graduation, I continued to improve the app as an interest project. I overhauled the app style, then substantially expanded and improved upon the functionality to provide a more useful (and stable) product. 
            </p>

          </div>
        </div>

        <div className="project-card__outer project-card__outer--smtm">
          <div className="project-card">

            <h3 className="smtm-card__title">The App</h3>

            <p>$how Me The Money is currently live - try it out on the link below!</p>
            <p>The page may take some time to load while the server wakes up (approx. 20 secs).</p>

            <a href="https://show-me-the-money-le.herokuapp.com/">
              <button className="smtm-button">Open App</button>
            </a>

            <a href="https://github.com/louis-earl/show-me-the-money">
              <button className="smtm-button">View GitHub</button>
            </a>

          </div>
        </div>

      </div>
      <Contact extraStyle={"contact--smtm"} />
    </div>

  )
}

export default MidnightMysteries
