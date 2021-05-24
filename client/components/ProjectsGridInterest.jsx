import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectsGridInterest() {
  return (
    <div className="projects__grid">
      <ProjectCard projectType={"interest"} image="research" title="Research Project" year="2021" />
      <ProjectCard projectType={"interest"} image="research" title="Research Project" year="2020" />
      <ProjectCard projectType={"interest"} image="research" title="Research Project" year="2019" />
    </div>
  )
}

export default ProjectsGridInterest
