import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectsGridInterest() {
  return (
    <div className="projects__grid">
      <ProjectCard
        projectType={"interest"}
        image="research"
        title="Research Project"
        year="2020"
        tech={["C#", "Unity Engine"]}
      />

      <ProjectCard
        projectType={"interest"}
        image="research"
        title="Research Project"
        year="2021"
        tech={["C#", "Unity Engine"]}
      />

      <ProjectCard
        projectType={"interest"}
        image="research"
        title="Research Project"
        year="2019"
        tech={["C#", "Unity Engine"]}
      />

    </div>
  )
}

export default ProjectsGridInterest
