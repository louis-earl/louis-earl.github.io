import React from 'react'
import ProjectPoster from './ProjectPoster'

function ProjectsGridInterest() {
  return (

    <div className="projects__grid scrollbar-hidden">

      <ProjectPoster
        image="poster-money"
        title="$how Me The Money"
        year="2021"
        tech={["JavaScript", "React", "Redux", "CSS"]}
        route="show-me-the-money"
      />

    </div>
  )
}

export default ProjectsGridInterest
