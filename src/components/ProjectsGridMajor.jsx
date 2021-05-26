import React from 'react'
import ProjectCard from './ProjectCard'

function ProjectsGridMajor() {
  return (

    <div className="projects__grid scrollbar-hidden">

      <ProjectCard
        image="poster-mafia"
        title="Midnight Mysteries"
        year="2021"
        tech={["JavaScript", "React", "Redux", "Web Sockets"]}
        route="midnight-mysteries"
      />

      <ProjectCard
        image="poster-oww"
        title="One Way Wellington"
        year="2019"
        tech={["C#", "Unity Engine"]}
        route="one-way-wellington"
      />

      <ProjectCard
        image="poster-racer"
        title="Super Racer Go!"
        year="2018"
        tech={["Unreal Engine"]}
        route="super-racer-go"
      />

    </div>
  )
}

export default ProjectsGridMajor
