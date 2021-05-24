
import React from 'react'

function ProjectCard({ projectType, image, title, year, tech }) {
  return (
    <div className={"project-card project-card--" + projectType}>
      <img
        className="project-card__poster"
        src={"./images/" + image + ".jpg"}
        alt={"Poster for " + projectType + " project, " + title}
      />
      <h4>{title}</h4>
      <p>{year}</p>
    </div>
  )
}

export default ProjectCard
