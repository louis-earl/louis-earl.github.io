import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectsGridInterest() {
  return (

    <div className="projects__grid">

      <ProjectCard
        image="project-portfolio"
        title="Portfolio Website"
        year="2021"
        tech={["JavaScript", "React"]}
        route="portfolio"
      />

      <ProjectCard
        image="research"
        title="Research Project"
        year="2021"
        tech={["C#", "Unity Engine"]}
        route="research"
      />

      <ProjectCard
        image="research"
        title="Research Project"
        year="2019"
        tech={["C#", "Unity Engine"]}
        route="research"
      />

    </div>
  )
}

export default ProjectsGridInterest
