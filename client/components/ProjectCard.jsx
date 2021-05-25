import React from 'react'
import { Link } from 'react-router-dom'

import TechLabel from './TechLabel'

function ProjectCard({ image, title, year, tech, route }) {
  return (
    <Link to={route}>
      <div className={"project-card"}>
        <img
          className="project-card__poster"
          src={"./images/" + image + ".jpg"}
          alt={"Poster for " + title}
        />
        <div className="project-card__info">
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

export default ProjectCard
