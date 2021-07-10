import React from 'react'
import IconLabel from './IconLabel'

function Contact({ extraStyle }) {
  return (
    <div className="section__wrapper section__wrapper--dark">
      <div className={"contact section " + extraStyle}>

        <h3>Don't Be a Stranger</h3>

        <div className="horizontal-grid">
          <IconLabel
            image="email"
            label="louis.earl.14@gmail.com"
            link="mailto: louis.earl.14@gmail.com"
          />

          <IconLabel
            image="linkedin"
            label="Linkedin"
            link="https://www.linkedin.com/in/louis-earl/"
          />

          <IconLabel
            image="github"
            label="GitHub"
            link="https://github.com/louis-earl"
          />

          <IconLabel
            image="phone"
            label="Available on Request"
          />
        </div>

      </div>
    </div>
  )
}

export default Contact
