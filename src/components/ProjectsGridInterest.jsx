import React from 'react'
import ProjectPoster from './ProjectPoster'

function ProjectsGridInterest() {
  return (

    <div className="projects__grid scrollbar-hidden">

      <ProjectPoster
        image="project-portfolio"
        title="Portfolio Website"
        year="2021"
        tech={["JavaScript", "React", "Canvas", "CSS"]}
        route="portfolio"
      />

    </div>
  )
}

export default ProjectsGridInterest
