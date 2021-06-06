import React from 'react'
import ProjectPoster from './ProjectPoster'

function ProjectsGridMajor() {
  return (

    <div className="projects__grid projects__grid--major scrollbar-hidden">

      <ProjectPoster
        image="poster-mafia"
        title="Midnight Mysteries"
        year="2021"
        tech={["JavaScript", "React", "Redux", "Web Sockets"]}
        route="midnight-mysteries"
      />

      <ProjectPoster
        image="poster-oww"
        title="One Way Wellington"
        year="2019"
        tech={["C#", "Unity Engine"]}
        route="one-way-wellington"
      />

      <ProjectPoster
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
