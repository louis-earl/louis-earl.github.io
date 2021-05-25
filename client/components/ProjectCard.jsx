import React from 'react'
import TechLabel from './TechLabel'

function ProjectCard({ projectType, image, title, year, tech }) {
  return (
    <div className={"project-card project-card--" + projectType}>
      <img
        className="project-card__poster"
        src={"./images/" + image + ".jpg"}
        alt={"Poster for " + projectType + " project, " + title}
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
  )
}

export default ProjectCard
