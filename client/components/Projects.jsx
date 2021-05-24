import React from 'react'
import ProjectsGrid from './ProjectsGrid'

function Projects({ }) {
  return (
    <div className="section">
      <div className="projects">
        <h3>Major Projects</h3>
        <ProjectsGrid cardType="major"/>
      </div>

      <div className="projects">
        <h3>Interest Projects</h3>
        <ProjectsGrid cardType="interest"/>
      </div>
    </div>
  )
}

export default Projects
