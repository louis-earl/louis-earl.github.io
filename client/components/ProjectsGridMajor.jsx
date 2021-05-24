import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectsGridMajor() {
  return (

    <div className="projects__grid">

      <ProjectCard
        projectType={"major"}
        image="poster-mafia"
        title="Midnight Mysteries"
        year="2021"
      />

      <ProjectCard
        projectType={"major"}
        image="poster-oww"
        title="One Way Wellington"
        year="2019"
      />

      <ProjectCard
        projectType={"major"}
        image="poster-racer"
        title="Super Racer Go!"
        year="2018"
      />

    </div>
  )
}

export default ProjectsGridMajor
