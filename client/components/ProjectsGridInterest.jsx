import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectsGridInterest() {
  return (

    <div className="projects__grid">

      <ProjectCard
        image="research"
        title="Research Project"
        year="2020"
        tech={["C#", "Unity Engine"]}
        route="r1"
      />

      <ProjectCard
        image="research"
        title="Research Project"
        year="2021"
        tech={["C#", "Unity Engine"]}
        route="r2"
      />

      <ProjectCard
        image="research"
        title="Research Project"
        year="2019"
        tech={["C#", "Unity Engine"]}
        route="r3"
      />

    </div>
  )
}

export default ProjectsGridInterest
