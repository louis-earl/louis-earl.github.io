import React from 'react'
import ProjectsGrid from './ProjectsGrid'

function Projects({ }) {
  return (
    <div className="section section--dark">
      <div className="projects">
        <h3>Major Projects</h3>
        <ProjectsGrid />
      </div>

      <div className="projects">
        <h3>Interest Projects</h3>
        <ProjectsGrid />
      </div>
    </div>
  )
}

export default Projects
