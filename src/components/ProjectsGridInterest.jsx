import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectsGridInterest() {
  return (

    <div className="projects__grid scrollbar-hidden">

      <ProjectCard
        image="project-portfolio"
        title="Portfolio Website"
        year="2021"
        tech={["JavaScript", "React", "Canvas"]}
        route="portfolio"
      />

    </div>
  )
}

export default ProjectsGridInterest
