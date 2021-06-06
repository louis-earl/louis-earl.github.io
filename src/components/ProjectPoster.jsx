import React from 'react'
import { Link } from 'react-router-dom'

import TechLabel from './TechLabel'

function ProjectPoster({ image, title, year, tech, route }) {
  return (
    <Link to={route}>
      <div className={"project-poster"}>
        <img
          className="project-poster__image"
          src={"./images/" + image + ".jpg"}
          alt={"Poster for " + title}
        />
        <div className="project-poster__info">
          <h4>{title}</h4>
          <p>{year}</p>
          <div className="tech-list">
            {tech &&
              tech.map((e, i) => <TechLabel key={i} label={e} />)
            }
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectPoster
