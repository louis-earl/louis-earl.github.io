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
        tech={["JavaScript", "React", "Redux", "Web Sockets"]}
      />

      <ProjectCard
        projectType={"major"}
        image="poster-oww"
        title="One Way Wellington"
        year="2019"
        tech={["C#", "Unity Engine"]}
      />

      <ProjectCard
        projectType={"major"}
        image="poster-racer"
        title="Super Racer Go!"
        year="2018"
        tech={["Unreal Engine"]}
      />

    </div>
  )
}

export default ProjectsGridMajor
